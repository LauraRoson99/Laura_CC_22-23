const reviewCtrl = {};

const Review = require('../models/Review')

reviewCtrl.getReviews = async (req, res) => {
    const Reviews = await Review.find();
    res.json(Reviews);
};

reviewCtrl.getReview = async (req, res) => {
    const Review = await Review.findById(req.params.id);
    res.send(Review);
};

reviewCtrl.createReview = async (req, res) => {
    const newReview = new Review(req.body);
    await newReview.save();
    res.send({ message: 'Review created', data: newReview });
};

reviewCtrl.editReview = async (req, res) => {
    const Review = await Review.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Review updated', data: Review });
};

reviewCtrl.deleteReview = async (req, res) => {
    const Review = await Review.findByIdAndRemove(req.params.id);
    res.json({ message: 'Review deleted', data: Review });
};


module.exports = reviewCtrl;