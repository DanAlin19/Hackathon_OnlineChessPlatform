const controller = require("./contactus.controller")

const router = require("express").Router()

router.post("/create", controller.sendContactUs)
router.get("/", controller.getContacts)

module.exports = router;