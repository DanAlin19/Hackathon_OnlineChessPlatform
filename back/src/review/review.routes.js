const controller = require("./review.controller")

const router = require("express").Router()

router.post("/create", controller.createReview)
router.get("/", controller.getReview)

module.exports = router;