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
        //const { _id } = req.params;
        const { text, score} = req.body;
        res.send(await ReviewService.updateReview(req.params.id,text,score));
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

module.exports = {
    addReview,
    updateReview,
    deleteReview
};