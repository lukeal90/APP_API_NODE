const Joi = require('joi');

const ReviewSchemaValidation = Joi.object({
    text: Joi.string()
        .required(),
    score: Joi.number()
        .required()
});

module.exports = ReviewSchemaValidation;