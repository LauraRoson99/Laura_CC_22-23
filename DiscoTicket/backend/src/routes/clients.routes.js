const { Router } = require('express');
const router = Router();

const clientCtrl = require('../controllers/clients.controller.js');

// /api/clients
router.get('/', clientCtrl.getClients);
router.get('/:id', clientCtrl.getClient);
router.get('/:id/reviews', clientCtrl.getClientReviews);
router.post('/', clientCtrl.createClient);
router.put('/:id', clientCtrl.editClient);
router.delete('/:id', clientCtrl.deleteClient);

module.exports = router;