// dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const reviewSchema = new Schema(
	{
		title: { type: String, required: true },
		rating: { type: Number, required: true },
		content: { type: String, required: true },
		reviewer: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true
		}
	},
	{
		timestamps: true
	}
);

module.exports = reviewSchema