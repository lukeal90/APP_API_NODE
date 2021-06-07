const ReviewModel = require('../models/review');

const getReviewsId = async (id) =>{
return await ReviewModel.find({idUser: id }).exec();
};

const lastReviewsMovie = (movieId) => {
const reviews = ReviewModel.find({idPelicula: movieId}).exec();
let lastReviews;

if (reviews.length >= 5){ 
    lastReviews = reviews.slice(Math.max(reviews.length - 5, 1));
}
else {
    lastReviews = reviews;
}
return lastReviews;
}

const addReview = (review) => {
    review.save();
};

const updateReview = (rta) => {
    return rta;
}

const deleteReview = (rta) => {
    return rta;
}

module.exports = {
    addReview,
    updateReview,
    deleteReview,
    getReviewsId,
    lastReviewsMovie
}
