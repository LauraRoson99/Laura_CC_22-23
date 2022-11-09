const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    local: { type: Object, required: true }, // local's ID
})

module.exports = model('Event', eventSchema)