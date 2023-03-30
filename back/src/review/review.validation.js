const Joi = require("joi")
const validationMessages = require("../common/errors/validation.messages")

module.exports = Joi.object({
    message: Joi.string()
        .min(8)
        .max(5000)
        .required()
        .messages(validationMessages),
    rating: Joi.number()
        .required()
        .messages(validationMessages),
})
