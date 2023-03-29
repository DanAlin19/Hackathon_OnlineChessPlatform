const authRouter = require('./auth/auth.routes')
const contactRouter = require('./contactus/contactus.routes')

const router = require('express').Router()

router.use("/auth/", authRouter)
router.use("/contact/", contactRouter)

module.exports =  router;