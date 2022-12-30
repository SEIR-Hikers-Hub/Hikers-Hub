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
        terrain: { type: String, enum: ['hill', 'desert', 'forest', 'canyon', 'mountain', 'coast'] },
        activity: { type: String, enum: ['hiking', 'backpacking', 'mountain-biking', 'offroading'], required: true },
        waterfalls: { type: String, enum: ['yes', 'no'], default: 'no' },
        distance: { type: Number, required: true },
        image: { type: String, default: '/assets/hikers_hub_logo.png' },
        reviews: [reviewSchema], 
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }
)

const Trail = mongoose.model("Trail", trailSchema);

module.exports = Trail