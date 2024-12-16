const express = require('express');
const Joke = require('../models/Joke.model');
const router = express.Router();

let jokes = [
    { id: 1, joke: "Why don't scientists trust atoms? Because they make up everything!" },
    { id: 2, joke: "Why did the scarecrow win an award? Because he was outstanding in his field!" }
];

// Get all jokes
router.get('/', async (req, res) => {
    try {
        const jokes = await Joke.find();
        res.json(jokes);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Create a new joke
router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const result = await Joke.create(req.body);
        console.log(result);
        
        res.status(201).json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Get a single joke by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        const joke = await Joke.findById(id);
        if (!joke) throw new Error('Joke not found');
        
       return res.json(joke);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Update a joke by ID
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const joke = await Joke.findByIdAndUpdate(id, req.body, { new: true });

        if (!joke) throw new Error('Joke not found');

        res.send({
            message: 'Joke updated successfully',
            joke
        })
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Delete a joke by ID
router.delete('/:id', async (req, res) => {
   try {
        const { id } = req.params;
        const joke = await Joke.findByIdAndDelete(id);

        if (!joke) throw new Error('Joke not found');

        res.send({
            message: 'Joke deleted successfully',
        })
   } catch (error) {
    
   }
});

module.exports = router;