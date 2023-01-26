const { Router } = require('express');
const router = Router();

const reviewCtrl = require('../controllers/reviews.controller.js');

// /api/reviews
router.get('/', reviewCtrl.getReviews);
router.get('/:id', reviewCtrl.getReview);
router.post('/', reviewCtrl.createReview);
router.put('/:id', reviewCtrl.editReview);
router.delete('/:id', reviewCtrl.deleteReview);

module.exports = router;