const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const ReviewSchema = new Schema({

    user: { type: Schema.Types.ObjectId, required: true, ref: "users"},
    message: { type: String, require: true},
    rating: { type: Number, require: true}
});

const Review = model('review', ReviewSchema);
module.exports = Review;