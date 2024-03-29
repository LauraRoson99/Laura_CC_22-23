const { Router } = require('express');
const router = Router();

const eventCtrl = require('../controllers/events.controller.js');

// /api/events
router.get('/', eventCtrl.getEvents);
router.get('/:id', eventCtrl.getEvent);
router.post('/', eventCtrl.createEvent);
router.put('/:id', eventCtrl.editEvent);
router.delete('/:id', eventCtrl.deleteEvent);

module.exports = router;