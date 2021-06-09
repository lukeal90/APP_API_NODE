const { Router } = require('express');
const router = Router();
const schema = require('../../schemas/review');
const validate = require('../middlewares/validate');
const ReviewController = require('../../controllers/review');

router.put('/', ReviewController.addReview);
router.post('/:id', ReviewController.updateReview);
router.delete('/:id', ReviewController.deleteReview);


module.exports = router;