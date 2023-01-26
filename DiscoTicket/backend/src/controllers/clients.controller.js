const Client = require("../models/Client.js");
const Review = require("../models/Review.js");

const clientCtrl = {};

clientCtrl.getClients = async (req, res) => {
    try {
        const clients = await Client.find({});
        res.status(200).send({ data: clients });
    } catch (error) {
        res.status(500).send({ message: 'ERROR at get Clients' });
    }
};

clientCtrl.getClient = async (req, res) => {
    try {
        const _id = req.params.id;
        const client = await Client.findById(_id);
        if (!client) {
            res.status(404).send({ message: 'Client not found' });
        } else {
            res.status(200).send({ data: client });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: 'ERROR at get Client' });
    }
};

clientCtrl.getClientReviews = async (req, res) => {
    try {
        const clientId = req.params.id;
        const reviews = await Review.find({ client: clientId });
        if (!reviews) {
            res.status(404).send({ message: 'No reviews found for this client' });
        } else {
            res.status(200).send({ data: reviews });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving reviews for this client' });
    }
};

clientCtrl.createClient = async (req, res) => {
    const newClient = new Client(req.body);
    Client.findOne({ email: newClient.email }, (err, user) => {
        if (user) {
            res.status(404).json({ message: "User already registered" });
        } else {
            newClient.save((err, data) => {
                if (err) {
                    res.status(500).json({ message: req.headers });
                } else {
                    res.status(200).json({ message: 'Client created', data });
                }
            });
        }
    });

};

clientCtrl.editClient = async (req, res) => {
    await Client.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if (err) {
            res.status(500).send({ message: 'ERROR at update Client' });
        } else {
            res.status(200).send({ message: 'Client updated', data: data });
        }
    });
};

clientCtrl.deleteClient = async (req, res) => {
    await Client.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({ message: 'ERROR at delete Client' });
        } else {
            res.status(200).send({ message: 'Client deleted', data: data });
        }
    });
};


module.exports = clientCtrl;