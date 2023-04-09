const authRouter = require('./auth/auth.routes')
const contactRouter = require('./contactus/contactus.routes')
const userInfo = require('./users/user.routes');

const router = require('express').Router()

router.use("/auth/", authRouter)
router.use("/contact/", contactRouter)
router.use("/user/", userInfo)

module.exports =  router;