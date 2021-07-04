const e = require('express');
const ReviewModel = require('../models/review');
const mongoose = require('mongoose');

const getReviewsbyUserId = async (id) =>{
    return await ReviewModel.find({ idUser: id, deleted: false }).exec();
};

const lastReviewsbyMovieId = (movieId) => {
    return ReviewModel.find({idPelicula: movieId}).exec();
}

const addReview = (text, score, idP, idU, img) => {
    return ReviewModel.create({text, score, idPelicula: idP , idUser: idU, movieImg: img, createdAt: new Date()});
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
    getReviewsbyUserId,
    lastReviewsbyMovieId
}
