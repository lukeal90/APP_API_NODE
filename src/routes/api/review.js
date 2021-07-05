const { Router } = require('express');
const { validate, validateJWT } = require('../middlewares')
const ReviewController = require('../../controllers/review');
const schema = require('../../schemas/review');
const router = Router();

router.put('/', validate(schema), ReviewController.addReview);
router.post('/:id',validateJWT, ReviewController.updateReview);
router.delete('/:id',validateJWT, ReviewController.deleteReview);
router.get('/lastmovie/:idPelicula', ReviewController.lastReviewsbyMovieId);
router.get('/:idUser', ReviewController.getReviewsbyUserId);
router.put('/getFriendsReviews/', ReviewController.getFriendsReviews);

module.exports = router;