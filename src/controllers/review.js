const ReviewService = require('../services/review');
const mongoose = require('mongoose');

const addReview = async (req, res, next) => {
    try {
        const { text, score, idPelicula, idUser, movieImg} = req.body;
        if(!idU.match(/^[0-9a-fA-F]{24}$/)){

        }
        const idU = mongoose.Types.ObjectId(idUser);
        res.send(await ReviewService.addReview(text, score, idPelicula, idU, movieImg))
    }catch(error){
        next(error);
    }
};

const updateReview = async (req,res,next) => {
    try {
        res.send(await ReviewService.updateReview(req.params.id,req.body.text,req.body.score));
    } catch (error) {
        next(error);
    }
};

const deleteReview = async (req, res, next) => {
    try{
        res.send(await ReviewService.deleteReview(req.params.id));
    }catch (error) {
        next(error);
    }
};

const lastReviewsbyMovieId = async (req, res, next) => {
    try {
        const {idPelicula} = req.params;
        let movieRevs = await ReviewService.lastReviewsbyMovieId(idPelicula);
        let lastReviews;
        if (movieRevs.length > 5) {
            lastReviews = movieRevs.slice(Math.max(reviews.length - 5, 1));
        }
        else{
            lastReviews = movieRevs;
        }
        
        res.send(lastReviews);
    }
    catch (error) {
        next(error);
    }
    }

const getReviewsbyUserId = async (req, res, next) => {
try {
    res.send(await ReviewService.getReviewsbyUserId(req.params.idUser));
}
catch (error){
    next(error);
}
}

const getFriendsReviews = async (req, res, next) => {
    
    try {
        const {friends} = req.body;
        console.log('Hi');
        console.log(friends);
        let reviews = {};
        friends.forEach( friendId => {
            console.log(friendId);
            let myrevs = ReviewService.getReviewsbyUserId(friendId)
            reviews = {
                ...reviews,
                "`${friendId}`": myrevs 
            }
        })
        console.log(reviews)
        res.send('pepito');
    }
    catch (error) {
        next(error);
    }


}

module.exports = {
    addReview,
    updateReview,
    deleteReview,
    getReviewsbyUserId,
    lastReviewsbyMovieId,
    getFriendsReviews
};