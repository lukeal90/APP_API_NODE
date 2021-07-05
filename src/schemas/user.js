const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().required().alphanum().min(4).max(12),
    email: Joi.string().email().required(),
    passwd: Joi.string().required()
});

module.exports = schema;