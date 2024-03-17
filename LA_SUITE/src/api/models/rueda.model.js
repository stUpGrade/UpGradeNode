const mongoose = require('mongoose');
const ruedaSchema = new mongoose.Schema({
    marca: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    tamaño: {
        type: Number,
        required: true,
    },
    dureza: {
        type: Number,
        required: true,
    },
})
const Rueda = mongoose.model('Rueda', ruedaSchema);
module.exports = Rueda;