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
        .pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.ro$/)
        .required()
        .messages(validationMessages),
    password: Joi.string()
        .alphanum()
        .min(8)
        .max(32)
        .required()
        .messages(validationMessages),
})