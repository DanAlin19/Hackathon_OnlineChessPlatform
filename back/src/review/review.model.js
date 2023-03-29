const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const ReviewSchema = new Schema({

    lastName: { type: String, require: true},
    firstName: { type: String, require: true},
    email: { type: String, require: true },
    message: { type: String, require: true},
    rating: { type: Number, require: true}
});

const Review = model('review', ReviewSchema);
module.exports = Review;