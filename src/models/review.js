const {Schema, model} = require('mongoose');

const ReviewSchema = Schema({
    text: {
        type: 'String',
        required: [true, "text is required"]
    },
    score: {
        type: 'number',
        required: [true, "score is required"]
    },
    idPelicula: {
        type: 'ObjectId',
        //required: [true, "idPelicula is required"]
    },
    idUser: {
        type: 'ObjectId',
        //required: [true, "idUser is required"]
    }
});

module.exports = model('Review', ReviewSchema);