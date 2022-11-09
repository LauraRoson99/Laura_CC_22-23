const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
    topic: { type: String, required: true },
    rate: { type: Number, required: true },
    description: { type: String, required: true },
    client: { type: Object, required: true }, // client's ID
    local: { type: Object, required: true } // local's ID
})

module.exports = model('Review', reviewSchema)