const { Schema, model } = require('mongoose');

const clientSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },

})

module.exports = model('Client', clientSchema)