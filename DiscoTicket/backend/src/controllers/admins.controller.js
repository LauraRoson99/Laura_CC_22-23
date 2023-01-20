const adminCtrl = {};

const Admin = require('../models/Admin')

adminCtrl.getAdmins = async (req, res) => {
    await Admin.find({}, (err, admins) => {
        if (err) {
            res.status(500).send({ message: 'ERROR at get admins' });
        } else {
            res.status(200).send({ data: admins });
        }
    });
};

adminCtrl.getAdmin = async (req, res) => {
    const _id = req.params.id;
    await Admin.findById({ _id }, (err, admin) => {
        if (err) {
            res.status(500).send({ message: 'ERROR at get Admin' });
        } else {
            if (!admin) {
                res.status(404).send({ message: 'Admin not found' });
            } else {
                res.status(200).send({ data: admin });
            }
        }
    });
};

adminCtrl.createAdmin = async (req, res) => {
    const newAdmin = new Admin(req.body);
    Admin.findOne({ email: newAdmin.email }, (err, admin) => {
        if (admin) {
            res.status(404).json({ message: "Admin already registered" });
        } else {
            newAdmin.save((err, data) => {
                if (err) {
                    res.status(500).json({ message: "ERROR at create new Admin" });
                } else {
                    res.status(200).json({ message: 'Admin created', data });
                }
            });
        }
    });

};

adminCtrl.editAdmin = async (req, res) => {
    await Admin.findByIdAndUpdate(req.params.id, req.body, (err, admin) => {
        if (err) {
            res.status(500).send({ message: 'ERROR at update Admin' });
        } else {
            res.status(200).send({ message: 'Admin updated', data: admin });
        }
    });
};

adminCtrl.deleteAdmin = async (req, res) => {
    await Admin.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({ message: 'ERROR at delete Admin' });
        } else {
            res.status(200).send({ message: 'Admin deleted', data: data });
        }
    });
};


module.exports = adminCtrl;