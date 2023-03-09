const controller = require('./user.controller')
const router = require('express').Router()
const authMiddlewares = require("../common/middlewares/auth.middleware");

router.get("/", controller.getUsers)
router.get("/:id", controller.getUserById)
router.patch("/:id", authMiddlewares.adminMiddleware, controller.updateUser)
router.delete("/:id", authMiddlewares.adminMiddleware, controller.deleteUser)

module.exports = router;