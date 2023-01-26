const localCtrl = {};

const Local = require('../models/Local');
const Review = require("../models/Review.js");
const Event = require("../models/Event.js");

localCtrl.getLocals = async (req, res) => {
    try {
        const locals = await Local.find({});
        res.status(200).send({ data: locals });
    } catch (error) {
        res.status(500).send({ message: 'ERROR at get Locals' });
    }
};

localCtrl.getLocal = async (req, res) => {
    try {
        const _id = req.params.id;
        const local = await Local.findById(_id);
        if (!local) {
            res.status(404).send({ message: 'Local not found' });
        } else {
            res.status(200).send({ data: local });
        }
    } catch (err) {
        res.status(500).send({ message: 'ERROR at get Local' });
    }
};

localCtrl.getLocalReviews = async (req, res) => {
    try {
        const localId = req.params.id;
        const reviews = await Review.find({ local: localId });
        if (!reviews) {
            res.status(404).send({ message: 'No reviews found for this local' });
        } else {
            res.status(200).send({ data: reviews });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving reviews for this local' });
    }
};

localCtrl.getLocalEvents = async (req, res) => {
    try {
        const localId = req.params.id;
        const events = await Event.find({ local: localId });
        if (!events) {
            res.status(404).send({ message: 'No events found for this local' });
        } else {
            res.status(200).send({ data: events });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving events for this local' });
    }
};

localCtrl.createLocal = async (req, res) => {
    const newlocal = new Local(req.body);
    Local.findOne({ email: newlocal.email }, (err, local) => {
        if (local) {
            res.status(404).json({ message: "Local already registered" });
        } else {
            newlocal.save((err, data) => {
                if (err) {
                    res.status(500).json({ message: "ERROR at create new local" });
                } else {
                    res.status(200).json({ message: 'Local created', data });
                }
            });
        }
    });

};

localCtrl.editLocal = async (req, res) => {
    await Local.findByIdAndUpdate(req.params.id, req.body, (err, local) => {
        if (err) {
            res.status(500).send({ message: 'ERROR at update local' });
        } else {
            res.status(200).send({ message: 'Local updated', data: local });
        }
    });
};

localCtrl.deleteLocal = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedLocal = await Local.findByIdAndRemove(id);
        if (!deletedLocal) {
            res.status(404).send({ message: 'Local not found' });
        } else {
            res.status(200).send({ message: 'Local deleted successfully', data: deletedLocal });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error deleting Local', error });
    }
};


module.exports = localCtrl;