const localCtrl = {};

const Local = require('../models/Local')

localCtrl.getLocals = async (req, res) => {
    try {
        const locals = await Local.find({});
        res.status(200).send({ data: locals });
    } catch (error) {
        res.status(500).send({ message: 'ERROR at get Locals' });
    }
};

localCtrl.getLocal = async (req, res) => {
    const _id = req.params.id;
    await Local.findById({ _id }, (err, local) => {
        if (err) {
            res.status(500).send({ message: 'ERROR at get local' });
        } else {
            if (!local) {
                res.status(404).send({ message: 'Local not found' });
            } else {
                res.status(200).send({ data: local });
            }
        }
    });
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
    await Local.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({ message: 'ERROR at delete local' });
        } else {
            res.status(200).send({ message: 'Local deleted', data: data });
        }
    });
};


module.exports = localCtrl;