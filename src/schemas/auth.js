const Joi = require('joi');

const schema = Joi.object({
    email: Joi.string().required(),
    passwd: Joi.string().required()
});

module.exports = schema;