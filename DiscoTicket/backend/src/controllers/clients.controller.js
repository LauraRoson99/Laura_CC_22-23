const clientCtrl = {};

const Client = require('../models/Client')

clientCtrl.getClients = async (req, res) => {
    const clients = await Client.find();
    res.json(clients);
};

clientCtrl.getClient = async (req, res) => {
    const client = await Client.findById(req.params.id);
    res.send(client);
};

clientCtrl.createClient = async (req, res) => {
    const newClient = new Client(req.body);
    await newClient.save();
    res.send({ message: 'Client created', data: newClient });
};

clientCtrl.editClient = async (req, res) => {
    const client = await Client.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Client updated', data: client });
};

clientCtrl.deleteClient = async (req, res) => {
    const client = await Client.findByIdAndRemove(req.params.id);
    res.json({ message: 'Client deleted', data: client });
};


module.exports = clientCtrl;