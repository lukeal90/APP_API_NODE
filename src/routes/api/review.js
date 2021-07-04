const { Router } = require('express');
const { validate, validateJWT } = require('../middlewares')
const ReviewController = require('../../controllers/review');
const schema = require('../../schemas/review');
const router = Router();

router.put('/',validateJWT, ReviewController.addReview);
router.post('/:id',validateJWT, ReviewController.updateReview);
router.delete('/:id',validateJWT, ReviewController.deleteReview);
//router.get('/lastmovie/:idPelicula', ReviewController.lastReviewsMovie);
//router.get('/:idUser', ReviewController.getReviewsId);
//router.get('/friendsReviews', ReviewController.getfriendsReviews);

module.exports = router;