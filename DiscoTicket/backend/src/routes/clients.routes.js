const { Router } = require('express');
const router = Router();

router.get('/clients', (req, res) => res.send('holi'))

const clientCtrl = require('../controllers/cllients.controller.js');

// /api/clients
router.get('/', clientCtrl.getClients);
router.get('/:id', clientCtrl.getClient);
router.post('/', clientCtrl.createClient);
router.put('/:id', clientCtrl.editClient);
router.delete('/:id', clientCtrl.deleteClient);

module.exports = router;