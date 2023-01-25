const { Schema, model } = require('mongoose');

const clientSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: false },
    dateOfBirth: { type: Date, required: false },
    password: { type: String, required: false },
    email: { type: String, required: true },

})

module.exports = model('Client', clientSchema)