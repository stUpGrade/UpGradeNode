const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema(
    {
        tittle: {
            type: String,
            require: true
        },
        direector: {
            type: String,
            require: true
        },
        year: {
            type: Number
        },
        genre: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true,
    }
);

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;