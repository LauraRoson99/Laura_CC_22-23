const { Router } = require('express');
const router = Router();

const adminCtrl = require('../controllers/admins.controller.js');

// /api/admins
router.get('/', adminCtrl.getAdmins);
router.get('/:id', adminCtrl.getAdmin);
router.post('/', adminCtrl.createAdmin);
router.put('/:id', adminCtrl.editAdmin);
router.delete('/:id', adminCtrl.deleteAdmin);

module.exports = router;