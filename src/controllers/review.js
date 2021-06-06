const ReviewService = require('../services/review');
const Review = require('../models/review');
const mongoose = require('mongoose');
const { db } = require('../models/review');

const addReview = async (req, res, next) => {
    try {
        const { text, score, idPelicula, idUser} = req.body;
        const idP = mongoose.Types.ObjectId(idPelicula);
        const idU = mongoose.Types.ObjectId(idUser);
        const createdAt = new Date();
        const review = new Review({text, score, idPelicula, idUser, createdAt});
        review.idPelicula = idP;
        review.idUser = idU;
        res.send(await ReviewService.addReview(review));
    }catch(error){
        next(error);
    }
};

const updateReview = async (req,res,next) => {
    try {
        const { _id } = req.params;
        const { text, score} = req.body;
        const rta = await Review.findOneAndUpdate(_id, {$set: {text, score}},{new: true},);
        res.send(await rta);
    } catch (error) {
        next(error);
    }
};

const deleteReview = async (req, res, next) => {
    try{
        const { _id } = req.params;
        const rta = await Review.findOneAndDelete(_id);
        res.send(await rta);
    }catch (error) {
        next(error);
    }
};

module.exports = {
    addReview,
    updateReview,
    deleteReview
};