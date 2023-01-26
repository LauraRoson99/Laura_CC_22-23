const { Router } = require('express');
const router = Router();

const localCtrl = require('../controllers/locals.controller.js');

// /api/locals
router.get('/', localCtrl.getLocals);
router.get('/:id', localCtrl.getLocal);
router.get('/:id/reviews', localCtrl.getLocalReviews);
router.get('/:id/events', localCtrl.getLocalEvents);
router.post('/', localCtrl.createLocal);
router.put('/:id', localCtrl.editLocal);
router.delete('/:id', localCtrl.deleteLocal);

module.exports = router;