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
        type: Types.ObjectId,
        required: [true, "idPelicula is required"]
    },
    idUser: {
        type: Types.ObjectId,
        required: [true, "idUser is required"]
    },
    createdAt: {
        type: Date,
        required: [true, "Date is required"]
    },
    deleted: {
        type: Boolean,
        default: false,
    }
});

module.exports = model('Review', ReviewSchema);