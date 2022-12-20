// dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {
        userName: { type: String, default: "Anonymous" },
        rating: { type: Number, required: true },
        title: { type: String, required: true },
        content: { type: String, required: true }
    },
    {
        timestamps: true
    }
)

module.exports = reviewSchema