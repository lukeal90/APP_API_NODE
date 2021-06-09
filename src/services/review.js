const ReviewModel = require('../models/review');

const getReviewsId = async (id) =>{
    return await ReviewModel.find({idUser: id }).exec();
};

const lastReviewsMovie = (movieId) => {
    return ReviewModel.find({idPelicula: movieId}).exec();
    
    /*Logic to be removed from service
    if (reviews.length >= 5){ 
     lastReviews = reviews.slice(Math.max(reviews.length - 5, 1));
    }
    else {
       lastReviews = reviews;
    }
    return lastReviews;*/
}

const addReview = (text, score, idP, idU) => {
    ReviewModel.create({text, score, idPelicula: idP , idUser: idU, createdAt: new Date()});
};

const updateReview = (id,text, score) => {
    ReviewModel.findOneAndUpdate({_id: id}, {$set: {text, score}},{new: true},(err, res)=> {});
}

const deleteReview = (id) => {
    ReviewModel.findOneAndDelete({_id: id},(err, res)=> {});
}

module.exports = {
    addReview,
    updateReview,
    deleteReview,
    getReviewsId,
    lastReviewsMovie
}
