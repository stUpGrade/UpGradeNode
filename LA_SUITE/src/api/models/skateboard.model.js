const mongoose = require('mongoose');
const skateboardSchema = new mongoose.Schema({
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
    ejes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Eje"
    }],
})
const Skateboard = mongoose.model('Skateboard', skateboardSchema);
module.exports = Skateboard;