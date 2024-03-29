const adminCtrl = {};

const Admin = require('../models/Admin')

adminCtrl.getAdmins = async (req, res) => {
    try {
        const admins = await Admin.find({});
        res.status(200).send({ data: admins });
    } catch (error) {
        res.status(500).send({ message: 'ERROR at get Admins' });
    }
};

adminCtrl.getAdmin = async (req, res) => {
    try {
        const _id = req.params.id;
        const admin = await Admin.findById(_id);
        if (!admin) {
            res.status(404).send({ message: 'Admin not found' });
        } else {
            res.status(200).send({ data: admin });
        }
    } catch (err) {
        res.status(500).send({ message: 'ERROR at get Admin' });
    }
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
    try {
        const id = req.params.id;
        const deletedAdmin = await Admin.findByIdAndRemove(id);
        if (!deletedAdmin) {
            res.status(404).send({ message: 'Admin not found' });
        } else {
            res.status(200).send({ message: 'Admin deleted successfully', data: deletedAdmin });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error deleting Admin', error });
    }
};



module.exports = adminCtrl;