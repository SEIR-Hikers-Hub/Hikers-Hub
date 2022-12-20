// dependencies
const mongoose = require("mongoose");
const reviewSchema = require("./review");
const Schema = mongoose.Schema;

const trailSchema = new Schema(
    {
        name: { type: String, required: true },
        state: { type: String, enum: ['CA', 'WA', 'OR'], required: true },
        location: { type: String, required: true },
        difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
        description: { type: String },
        terrain: { type: String },
        length: { type: Number, required: true },
        image: { type: String, default: "https://www.hopenetwichita.org/wp-content/uploads/2020/08/NO-IMAGE-AVAILABLE-3-768x768.png" },
        reviews: [reviewSchema]
    }
)

const Trail = mongoose.model("Trail", trailSchema);

module.exports = Trail