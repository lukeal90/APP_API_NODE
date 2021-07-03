const ReviewModel = require('../models/review');

const getReviewsId = async (id) =>{
    return await ReviewModel.find({idUser: id }).exec();
};

const lastReviewsMovie = (movieId) => {
    return ReviewModel.find({idPelicula: movieId}).exec();
}

const addReview = (text, score, idP, idU) => {
    return ReviewModel.create({text, score, idPelicula: idP , idUser: idU, createdAt: new Date()});
};

const updateReview = (id,text, score) => {
    return ReviewModel.findOneAndUpdate({_id: id, deleted: false}, {$set: {text, score}},{new: true},(err, res)=> {});
}

const deleteReview = (id) => {
    return ReviewModel.findOneAndUpdate({_id: id, deleted: false},{deleted: true},(err, res)=> {});
}

module.exports = {
    addReview,
    updateReview,
    deleteReview,
    getReviewsId,
    lastReviewsMovie
}
