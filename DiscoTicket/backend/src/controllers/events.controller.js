const eventCtrl = {};

const Event = require('../models/Event')

eventCtrl.getEvents = async (req, res) => {
    try {
        const events = await Event.find({});
        res.status(200).send({ data: events });
    } catch (error) {
        res.status(500).send({ message: 'ERROR at get Events' });
    }
};

eventCtrl.getEvent = async (req, res) => {
    try {
        const _id = req.params.id;
        const event = await Event.findById(_id);
        if (!event) {
            res.status(404).send({ message: 'Event not found' });
        } else {
            res.status(200).send({ data: event });
        }
    } catch (err) {
        res.status(500).send({ message: 'ERROR at get Event' });
    }
};

eventCtrl.createEvent = async (req, res) => {
    const newEvent = new Event(req.body);
    Event.findOne({ email: newEvent.email }, (err, event) => {
        if (event) {
            res.status(404).json({ message: "Event already registered" });
        } else {
            newEvent.save((err, data) => {
                if (err) {
                    res.status(500).json({ message: "ERROR at create new Event" });
                } else {
                    res.status(200).json({ message: 'Event created', data });
                }
            });
        }
    });

};

eventCtrl.editEvent = async (req, res) => {
    await Event.findByIdAndUpdate(req.params.id, req.body, (err, event) => {
        if (err) {
            res.status(500).send({ message: 'ERROR at update Event' });
        } else {
            res.status(200).send({ message: 'Event updated', data: event });
        }
    });
};

eventCtrl.deleteEvent = async (req, res) => {
    await Event.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({ message: 'ERROR at delete Event' });
        } else {
            res.status(200).send({ message: 'Event deleted', data: data });
        }
    });
};


module.exports = eventCtrl;