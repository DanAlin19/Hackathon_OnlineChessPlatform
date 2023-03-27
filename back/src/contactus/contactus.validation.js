const Joi = require("joi")
const validationMessages = require("../common/errors/validation.messages")

module.exports = Joi.object({
    fullname: Joi.string()
        .alphanum()
        .min(8)
        .max(32)
        .required()
        .messages(validationMessages),
    email: Joi.string()
        .pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        .required()
        .messages(validationMessages),
    message: Joi.string()
        .alphanum()
        .min(8)
        .max(5000)
        .required()
        .messages(validationMessages),
    rating: Joi.number()
        .required()
        .messages(validationMessages),
})
