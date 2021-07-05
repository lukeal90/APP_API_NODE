const ReviewService = require('../services/review');
const UserService = require('../services/user');
const mongoose = require('mongoose');

const addReview = async (req, res, next) => {
    try {
        const {
            text,
            score,
            idPelicula,
            idUser,
            movieImg
        } = req.body;
        const idP = mongoose.Types.ObjectId(idPelicula);
        const idU = mongoose.Types.ObjectId(idUser);
        res.send(await ReviewService.addReview(text, score, idP, idU, movieImg))
    } catch (error) {
        next(error);
    }
};

const updateReview = async (req, res, next) => {
    try {
        res.send(await ReviewService.updateReview(req.params.id, req.body.text, req.body.score));
    } catch (error) {
        next(error);
    }
};

const deleteReview = async (req, res, next) => {
    try {
        res.send(await ReviewService.deleteReview(req.params.id));
    } catch (error) {
        next(error);
    }
};

const lastReviewsbyMovieId = async (req, res, next) => {
    try {
        const {
            idPelicula,
        } = req.params;
        let movieRevs = await ReviewService.lastReviewsbyMovieId(idPelicula);
        let lastReviews;
        if (movieRevs.length > 5) {
            lastReviews = movieRevs.slice(Math.max(reviews.length - 5, 1));
        } else {
            lastReviews = movieRevs;
        }

        res.send(lastReviews);
    } catch (error) {
        next(error);
    }
}

const getReviewsbyUserId = async (req, res, next) => {
    try {
        if (!req.params.idUser.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(401).json({
                msg: "Mandaste algo mal"
            })
        }
        res.send(await ReviewService.getReviewsbyUserId(req.params.idUser));
    } catch (error) {
        next(error);
    }
}

const getFriendsReviews = async (req, res, next) => {
    try {
        const friends = await UserService.getFriends(req.params.idUser)
        let friendsAll = [];

        for (let i = 0; i < friends.length; i++) {
            let revw = await ReviewService.getReviewsbyUserId(friends[i])
            friendsAll[i] = {
                id: friends[i],
                reviews: [...revw]
            };
        }

        res.send(friendsAll);
    } catch (error) {
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