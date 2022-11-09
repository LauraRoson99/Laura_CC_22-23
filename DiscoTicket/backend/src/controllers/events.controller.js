const eventCtrl = {};

const Event = require('../models/Event')

eventCtrl.getEvents = async (req, res) => {
    const Events = await Event.find();
    res.json(Events);
};

eventCtrl.getEvent = async (req, res) => {
    const Event = await Event.findById(req.params.id);
    res.send(Event);
};

eventCtrl.createEvent = async (req, res) => {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.send({ message: 'Event created', data: newEvent });
};

eventCtrl.editEvent = async (req, res) => {
    const Event = await Event.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Event updated', data: Event });
};

eventCtrl.deleteEvent = async (req, res) => {
    const Event = await Event.findByIdAndRemove(req.params.id);
    res.json({ message: 'Event deleted', data: Event });
};


module.exports = eventCtrl;