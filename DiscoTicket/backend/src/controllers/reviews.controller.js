const reviewCtrl = {};

const Review = require('../models/Review')

reviewCtrl.getReviews = async (req, res) => {
    try {
        const reviews = await Review.find({});
        res.status(200).send({ data: reviews });
    } catch (error) {
        res.status(500).send({ message: 'ERROR at get Reviews' });
    }
};

reviewCtrl.getReview = async (req, res) => {
    const _id = req.params.id;
    await Review.findById({ _id }, (err, review) => {
        if (err) {
            res.status(500).send({ message: 'ERROR at get review' });
        } else {
            if (!review) {
                res.status(404).send({ message: 'Review not found' });
            } else {
                res.status(200).send({ data: review });
            }
        }
    });
};

reviewCtrl.createReview = async (req, res) => {
    const newReview = new Review(req.body);
    Review.findOne({ email: newreview.email }, (err, review) => {
        if (review) {
            res.status(404).json({ message: "review already registered" });
        } else {
            newReview.save((err, data) => {
                if (err) {
                    res.status(500).json({ message: "ERROR at create new review" });
                } else {
                    res.status(200).json({ message: 'Review created', data });
                }
            });
        }
    });

};

reviewCtrl.editReview = async (req, res) => {
    await Review.findByIdAndUpdate(req.params.id, req.body, (err, review) => {
        if (err) {
            res.status(500).send({ message: 'ERROR at update review' });
        } else {
            res.status(200).send({ message: 'Review updated', data: review });
        }
    });
};

reviewCtrl.deleteReview = async (req, res) => {
    await Review.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({ message: 'ERROR at delete review' });
        } else {
            res.status(200).send({ message: 'Review deleted', data: data });
        }
    });
};


module.exports = reviewCtrl;