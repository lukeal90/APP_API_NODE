const Joi = require('joi');

const ReviewSchemaValidation = Joi.object({
    text: Joi.string()
        .alphanum()
        .min(1)
        .max(50)
        .required(),
    score: Joi.number()
        .min(1)
        .max(5)
        .positive()
        .required()
});

module.exports = ReviewSchemaValidation;