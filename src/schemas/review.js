const Joi = require('joi');

const ReviewSchemaValidation = Joi.object({
    text: Joi.string().required(),
    score: Joi.number().required(),
    idPelicula: Joi.number().required(),
    idUser: Joi.string().required(),
    movieImg: Joi.string().required(),
});

module.exports = ReviewSchemaValidation;