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
		next()
	} else {
		res.status(401).json({ data: 'Not Authorized!' })
	}
}



//index route
router.get('/', async (req, res) => {
	const allTrails = await db.Trail.find({});
	res.json(allTrails);
});

//index route for CA hikes
router.get('/CA', async (req, res) => {
	const caTrails = await db.Trail.find({ "state": "CA" });
	res.json(caTrails);
});

//index route for WA hikes
router.get('/WA', async (req, res) => {
	const waTrails = await db.Trail.find({ "state": "WA" });
	res.json(waTrails);
});

//index route for OR hikes
router.get('/OR', async (req, res) => {
	const orTrails = await db.Trail.find({ "state": "OR" });
	res.json(orTrails);
});

// Create Route
// router.post('/', isAuthenticated, async (req, res) => {
// 	const createdTrail = await db.Trail.create(req.body);
// 	res.json(createdTrail);
// });

// // Create Review Route
router.put('/review/:id/', async (req, res) => {
	const trail = await db.Trail.findByIdAndUpdate(
		req.params.id,
		{ $push: { reviews: req.body } },
		{ new: true }
	);
	res.json(trail);
});

// Create Route without authentication for admin
router.post('/', async (req, res) => {
	const createdTrail = await db.Trail.create(req.body);
	res.json(createdTrail);
});


//Create route with new user relational model
// router.post('/', async (req, res) => {
//     const token = req.headers.authorization
// 	// const token = localStorage.token
//     const decoded = jwt.decode(token, config.jwtSecret)
//     const createdTrail = await db.Trail.create(req.body)
//     createdTrail.user = decoded.id
//     createdTrail.save()
//     res.json(createdTrail)
// })



// Show Route
router.get('/:id', async (req, res) => {
	const trail = await db.Trail.findById(req.params.id);
	// console.log(trail._id)
	res.json(trail);
});

// Delete Route 
// router.delete('/:id', isAuthenticated, async (req, res) => {
// 	await db.Trail.findByIdAndDelete(req.params.id);
// 	res.json({ status: 200 });
// });

// Delete Route without authentication for admin
router.delete('/:id', async (req, res) => {
	await db.Trail.findByIdAndDelete(req.params.id);
	res.json({ status: 200 });
});

// // Update Route
// router.put('/:id', isAuthenticated, async (req, res) => {
// 	const updatedTrail = await db.Trail.findByIdAndUpdate(
// 		req.params.id,
// 		req.body,
// 		{ new: true }
// 	);
// 	res.json(updatedTrail);
// });

// Edit Route
router.get('/:id', async (req, res) => {
	const trail = await db.Trail.findById(req.params.id);
	console.log(trail._id)
	res.json(trail);
});

// Update Route without authentication for admin
router.put('/:id', async (req, res) => {
	const updatedTrail = await db.Trail.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true }
	);
	res.json(updatedTrail);
});





// router.put('/:id/review', async (req, res) => {
// 	const trail = await db.Trail.findByIdAndUpdate(
// 		req.params.id,
// 		{ $push: { reviews: req.body } },
// 		{ new: true }
// 	);
// 	res.json(trail);
// });
module.exports = router;
