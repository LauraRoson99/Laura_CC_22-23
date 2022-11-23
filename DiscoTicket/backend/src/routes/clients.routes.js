const { Router } = require('express');
const router = Router();

// router.get('/clients', (req, res) => res.send('Client routes'))

const clientCtrl = require('../controllers/clients.controller.js');

// /api/clients
router.get('/', clientCtrl.getClients);
router.get('/:id', clientCtrl.getClient);
router.post('/', clientCtrl.createClient);
router.put('/:id', clientCtrl.editClient);
router.delete('/:id', clientCtrl.deleteClient);
// router.get('/login/:email', clientCtrl.login)

module.exports = router;