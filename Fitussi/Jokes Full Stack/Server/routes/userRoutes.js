const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// Rota para criar um usuário
router.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ message: 'Usuário criado com sucesso!', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
