const { Schema, model } = require('mongoose');

const localSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true }, // Disco or Pub
    dateOfBirth: { type: Date, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    capacity: { type: Number, required: true },
    music: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
})

module.exports = model('Local', localSchema)