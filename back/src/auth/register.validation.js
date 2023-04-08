const Joi = require("joi")
const validationMessages = require("../common/errors/validation.messages")

module.exports = Joi.object({
    lastName: Joi.string()
        .alphanum()
        .min(4)
        .max(32)
        .required()
        .messages(validationMessages),
    firstName: Joi.string()
        .alphanum()
        .min(4)
        .max(32)
        .required()
        .messages(validationMessages),
    email: Joi.string()
        .pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        .required()
        .messages(validationMessages),
    password: Joi.string()
        .alphanum()
        .min(8)
        .max(32)
        .required()
        .messages(validationMessages),
})