const express = require('express');

const router = express.Router();

let jokes = [
    { id: 1, joke: "Why don't scientists trust atoms? Because they make up everything!" },
    { id: 2, joke: "Why did the scarecrow win an award? Because he was outstanding in his field!" }
];

// Get all jokes
router.get('/jokes', (req, res) => {
    res.json(jokes);
});

// Get a single joke by ID
router.get('/jokes/:id', (req, res) => {
    const joke = jokes.find(j => j.id === parseInt(req.params.id));
    if (!joke) return res.status(404).send('Joke not found');
    res.json(joke);
});

// Create a new joke
router.post('/jokes', (req, res) => {
    const newJoke = {
        id: jokes.length + 1,
        joke: req.body.joke
    };
    jokes.push(newJoke);
    res.status(201).json(newJoke);
});

// Update a joke by ID
router.put('/jokes/:id', (req, res) => {
    const joke = jokes.find(j => j.id === parseInt(req.params.id));
    if (!joke) return res.status(404).send('Joke not found');

    joke.joke = req.body.joke;
    res.json(joke);
});

// Delete a joke by ID
router.delete('/jokes/:id', (req, res) => {
    const jokeIndex = jokes.findIndex(j => j.id === parseInt(req.params.id));
    if (jokeIndex === -1) return res.status(404).send('Joke not found');

    jokes.splice(jokeIndex, 1);
    res.status(204).send();
});

module.exports = router;