const e = require('cors');
const ReviewModel = require('../models/review');

const getReviewsId = async (Id) =>{


return await ReviewModel.find({idUser: Id }).exec();
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


module.exports = {
    getReviewsId,
    lastReviews
};