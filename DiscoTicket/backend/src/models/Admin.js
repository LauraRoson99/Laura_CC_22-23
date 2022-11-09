const { Schema, model } = require('mongoose');

const adminSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
})

module.exports = model('Admin', adminSchema)