const Client = require("../models/Client.js");

const clientCtrl = {};

clientCtrl.getClients = async (req, res) => {
    const clients = await Client.find();
    res.status(200).send({ data: clients });
};

clientCtrl.getClient = async (req, res) => {
    const _id = req.params.id;
    await Client.findById({ _id }, (err, client) => {
        if (err) {
            res.status(500).send({ message: 'ERROR at get Client' });
        } else {
            if (!client) {
                res.status(404).send({ message: 'Client not found' });
            } else {
                res.status(200).send({ data: client });
            }
        }
    });
};

clientCtrl.createClient = async (req, res) => {
    const newClient = new Client(req.body);
    Client.findOne({ email: newClient.email }, (err, user) => {
        if (user) {
            res.status(404).json({ message: "User already registered" });
        } else {
            newClient.save((err, data) => {
                if (err) {
                    res.status(500).json({ message: "ERROR at create new client" });
                } else {
                    res.status(200).json({ message: 'Client created', data });
                }
            });
        }
    });

};

clientCtrl.editClient = async (req, res) => {
    const client = await Client.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send({ message: 'Client updated', data: client });
};

clientCtrl.deleteClient = async (req, res) => {
    const client = await Client.findByIdAndRemove(req.params.id);
    res.status(200).send({ message: 'Client deleted', data: client });
};


module.exports = clientCtrl;