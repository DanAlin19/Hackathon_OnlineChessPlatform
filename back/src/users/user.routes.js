const controller = require('./user.controller')
const router = require('express').Router()

router.get("/", controller.getUsers)
router.get("/:id", controller.getUserById)


module.exports = router;