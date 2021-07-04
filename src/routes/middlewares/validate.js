const Boom = require('@hapi/boom');

const validate = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.validateAsync(req.body);
            next();
        } catch (error) {
            res.send(Boom.badData());
        }
    };
}

    module.exports = {
        validate
    }
