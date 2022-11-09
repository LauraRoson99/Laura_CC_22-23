const adminCtrl = {};

const Admin = require('../models/Admin')

adminCtrl.getAdmins = async (req, res) => {
    const Admins = await Admin.find();
    res.json(Admins);
};

adminCtrl.getAdmin = async (req, res) => {
    const Admin = await Admin.findById(req.params.id);
    res.send(Admin);
};

adminCtrl.createAdmin = async (req, res) => {
    const newAdmin = new Admin(req.body);
    await newAdmin.save();
    res.send({ message: 'Admin created', data: newAdmin });
};

adminCtrl.editAdmin = async (req, res) => {
    const Admin = await Admin.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Admin updated', data: Admin });
};

adminCtrl.deleteAdmin = async (req, res) => {
    const Admin = await Admin.findByIdAndRemove(req.params.id);
    res.json({ message: 'Admin deleted', data: Admin });
};


module.exports = adminCtrl;