const ReviewService = require('../services/review');
const mongoose = require('mongoose');

const addReview = async (req, res, next) => {
    try {
        const { text, score, idPelicula, idUser, movieImg} = req.body;
        const idP = mongoose.Types.ObjectId(idPelicula);
        const idU = mongoose.Types.ObjectId(idUser);
        res.send(await ReviewService.addReview(text, score, idP, idU, movieImg))
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
        let movieRevs = await ReviewService.lastReviewsMovie(idPelicula);
        let lastReviews;
        if (movieRevs.length > 5) {
            lastReviews = movieRevs.slice(Math.max(reviews.length - 5, 1));
        }
        else{
            lastReviews = movieRevs;
        }
        
        res.send(lastReviews);
        console.log('Lucas manco con AWP');
    }
    catch (error) {
        next(error);
    }
    }

const getReviewsbyUserId = async (req, res, next) => {
try {
    res.send(await ReviewService.getReviewsbyUserId(req.params.idUser));
}
catch (error) {
    next(error);
}
}

// const getfriendsReviews = async (req, res, next) => {
//     try {

//         const {friends} = req.body;
//         let reviews = {};
//         friends.forEach(friendId => {
//             reviews[friendId] = await ReviewService.getReviewsbyUserId(friendId);
//         })
//         res.send(JSON.stringify(reviews));
//     }
//     catch (error) {
//         next(error);
//     }
// }






module.exports = {
    addReview,
    updateReview,
    deleteReview,
    getReviewsbyUserId,
    lastReviewsbyMovieId,
    //getfriendsReviews
};