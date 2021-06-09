const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    passwd: Joi.string().required()
});

module.exports = schema;