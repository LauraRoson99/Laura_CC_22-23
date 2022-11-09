const { Router } = require('express');
const router = Router();

router.get('/Locals', (req, res) => res.send('Local routes'))

const localCtrl = require('../controllers/locals.controller.js');

// /api/locals
router.get('/', localCtrl.getLocals);
router.get('/:id', localCtrl.getLocal);
router.post('/', localCtrl.createLocal);
router.put('/:id', localCtrl.editLocal);
router.delete('/:id', localCtrl.deleteLocal);

module.exports = router;