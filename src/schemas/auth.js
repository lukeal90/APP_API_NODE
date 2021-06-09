const Joi = require('joi');

const schema = Joi.object({
    email: Joi.string().required(),
    passwd: Joi.string().required().error(
        new Error({ 'msg': 'password is required' }))
});

module.exports = schema;