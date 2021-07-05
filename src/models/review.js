const {Schema, model, Types} = require('mongoose');

const ReviewSchema = Schema({
    text: {
        type: String,
        required: [true, "text is required"]
    },
    score: {
        type: Number,
        required: [true, "score is required"]
    },
    idPelicula: {
        type: Number,
        required: [true, "idPelicula is required"]
    },
    idUser: {
        type: Types.ObjectId,
        required: [true, "idUser is required"]
    },
    movieImg: {
        type: String,
        required: [true, "movieImg is required"]
    },
    createdAt: {
        type: Date,
    },
    deleted: {
        type: Boolean,
        default: false,
    }
});

module.exports = model('Review', ReviewSchema);