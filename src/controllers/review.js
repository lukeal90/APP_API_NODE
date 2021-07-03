const ReviewService = require('../services/review');
const mongoose = require('mongoose');

const addReview = async (req, res, next) => {
    try {
        const { text, score, idPelicula, idUser} = req.body;
        const idP = mongoose.Types.ObjectId(idPelicula);
        const idU = mongoose.Types.ObjectId(idUser);
        res.send(await ReviewService.addReview(text, score, idP, idU))
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

const lastReviewsMovie = async (req, res, next) => {
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

const getReviewsId = async (req, res, next) => {
try {
    res.send(await ReviewService.getReviewsId(req.params.idUser));
}
catch (error) {
    next(error);
}

}

module.exports = {
    addReview,
    updateReview,
    deleteReview,
    getReviewsId,
    lastReviewsMovie
};