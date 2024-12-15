// routes/animalsRoutes.js: 
// Handles all routes (CRUD operations) for managing animals.

const express = require("express");
const Animal = require("../models/AnimalModel");

const router = express.Router();

// Criar um novo animal
router.post("/", async (req, res) => {
  try {
    const animal = await Animal.create(req.body);
    res.status(201).json(animal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Listar todos os animais
router.get("/", async (req, res) => {
  try {
    const animals = await Animal.find();
    res.status(200).json(animals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Atualizar um animal por ID
router.put("/:id", async (req, res) => {
  try {
    const animal = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(animal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Deletar um animal por ID
router.delete("/:id", async (req, res) => {
  try {
    await Animal.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
