const localCtrl = {};

const Local = require('../models/Local')

localCtrl.getLocals = async (req, res) => {
    const Locals = await Local.find();
    res.json(Locals);
};

localCtrl.getLocal = async (req, res) => {
    const Local = await Local.findById(req.params.id);
    res.send(Local);
};

localCtrl.createLocal = async (req, res) => {
    const newLocal = new Local(req.body);
    await newLocal.save();
    res.send({ message: 'Local created', data: newLocal });
};

localCtrl.editLocal = async (req, res) => {
    const Local = await Local.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Local updated', data: Local });
};

localCtrl.deleteLocal = async (req, res) => {
    const Local = await Local.findByIdAndRemove(req.params.id);
    res.json({ message: 'Local deleted', data: Local });
};


module.exports = localCtrl;