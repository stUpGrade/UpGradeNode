const express = require('express');
const { connectMongo } = require('./utils/db')

connectMongo();

const PORT = 3002;
const server = express();

const Movie = require('./src/models/movie');

const router = express.Router();
router.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.find();
        return res.status(200).json(movies)
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.get('/movies/id/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const movie = await Movie.findById(id);
        if (movie) {
            return res.status(200).json(movie);
        } else {
            return res.status(404).json('No movie found by this id');
        }
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.get('/movies/title/:title', async (req, res) => {
    const { title } = req.params;
    try {
        const moveByTitle = await Movie.find({ title });
        return res.status(200).json(moveByTitle);
    } catch (err) {
        return res.status(500).json(err);
    }
});


router.get('/movies/genre/:genre', async (req, res) => {
    const { genre } = req.params;
    try {
        const moveByGenre = await Movie.find({ genre });
        return res.status(200).json(moveByGenre);
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.get('/movies/year/:year', async (req, res) => {
    const { year } = req.params;
    try {
        const moveByYear = await Movie.find({ year: { $gte: year } });
        return res.status(200).json(moveByYear);
    } catch (err) {
        return res.status(500).json(err);
    }
});
server.use('/', router);

server.listen(PORT, () => {
console.log(`app running in port ${PORT}`);
});