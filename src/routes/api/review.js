const { Router } = require('express');
const { validate, validateJWT } = require('../middlewares')
const ReviewController = require('../../controllers/review');
const schema = require('../../schemas/review');
const router = Router();

router.put('/',validateJWT,validate(schema), ReviewController.addReview);
router.post('/:id',validateJWT, ReviewController.updateReview);
router.delete('/:id',validateJWT, ReviewController.deleteReview);
router.get('/lastmovie/:idPelicula', ReviewController.lastReviewsbyMovieId);
router.get('/:idUser',validateJWT, ReviewController.getReviewsbyUserId);
router.get('/getFriendsReviews/:idUser', ReviewController.getFriendsReviews);

module.exports = router;