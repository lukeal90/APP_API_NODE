const Joi = require('joi');

const schema = Joi.object({
    email: Joi.string().email().required(),
    passwd: Joi.string().required()
});

module.exports = schema;