// +-+-+-+-+-+-+-+-+-+-+-+-+
// |D|E|P|E|N|D|E|N|C|I|E|S|
// +-+-+-+-+-+-+-+-+-+-+-+-+
const db = require('../models');
const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple')
const config = require('../config/config')

function isAuthenticated(req, res, next) {
	if (req.headers.authorization) {
		const token = req.headers.authorization
		const decoded = jwt.decode(token, config.jwtSecret)
		const foundUser = db.User.findById(decoded.id)
		if (foundUser.admin) {
			next()
		} else {
			res.sendStatus(401)
		}
	}
}

// Index Route (SHOW ALL Reviews for ALL trails and ALL users): 
router.get('/', isAuthenticated, (req, res) => {
	db.Trail.find(
		{},
		{ reviews: true, _id: false },
		(err, trails) => {
			// format query results to appear in one array, 
			// rather than an array of objects containing arrays 
			const flatList = []
			for (let trail of trails) {
				flatList.push(...trail.reviews)
			}
			res.json(flatList)
		}
	)
});


// Index Route (All Reviews by a Specified Trail):

router.get('/trail/:id', (req, res) => {
	db.Trail.findById(
		req.params.id,
		{ name: true, reviews: true, _id: false },
		(err, trail) => {
			res.json(trail)
		}
	)
});


// Destroy Route: DELETE localhost:3000/reviews/:id
router.delete('/:id', isAuthenticated, (req, res) => {
	db.Trail.findOneAndUpdate(
		{ 'reviews._id': req.params.id },
		{
			$pull: {
				reviews: { _id: req.params.id }
			}
		},
		{ new: true },
		(err, trail) => {
			res.json(trail)
		})
});

module.exports = router;