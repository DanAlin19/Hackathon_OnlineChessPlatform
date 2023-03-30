const authRouter = require('./auth/auth.routes')
const contactRouter = require('./contactus/contactus.routes')
const reviewRouter = require('./review/review.routes')

const router = require('express').Router()

router.use("/auth/", authRouter)
router.use("/contact/", contactRouter)
router.use("/review/", reviewRouter)

module.exports =  router;