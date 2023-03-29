const controller = require("./contactus.controller")

const router = require("express").Router()

router.post("/create", controller.sendContactUs)

module.exports = router;