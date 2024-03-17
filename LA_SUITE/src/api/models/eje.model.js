const mongoose = require('mongoose');
const ejeSchema = new mongoose.Schema({
    marca: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    medida: {
        type: Number,
        required: true,
    },
    ruedas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Rueda"
    }],
})
const Eje = mongoose.model('Eje', ejeSchema);
module.exports = Eje;