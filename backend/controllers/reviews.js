// +-+-+-+-+-+-+-+-+-+-+-+-+
// |D|E|P|E|N|D|E|N|C|I|E|S|
// +-+-+-+-+-+-+-+-+-+-+-+-+
const db = require('../models');
const express = require('express');
const router = express.Router();



// Index Route (SHOW ALL Reviews for ALL trails and ALL users): 
router.get('/', (req, res) => {
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



module.exports = router;