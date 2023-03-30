const Review = require("./review.model")
const reviewValidation = require("./review.validation")
const errors = require("../common/errors/errors");


async function getReview(_, res, next) {
    try {
        const reviews = await Review.find();

        res.send(reviews);
    } catch (e) {
        next(e);
    }
}

async function createReview(req, res, next) {
    try {
        const { message, rating } = await reviewValidation.validateAsync(req.body);

        const existingReview = await Review.findOne({ message })
        if (existingReview) {
            throw new errors.ResourceConflictError("The meme already exists!");
        }

        const newReview = new Review({
            user: req.user._id,
            message,
            rating,
            
        });
        await newReview.save();

        res.send({ message: "Meme was successfully created!" });
    } catch (e) {
        next(e);
    }
}

module.exports = {
    createReview,
    getReview,
}