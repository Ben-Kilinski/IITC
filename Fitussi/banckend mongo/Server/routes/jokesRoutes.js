const express = require("express");
const router = express.Router()

const { getAllJokes, getJokeById, getRandomJoke } = require("../controllers/jokesController")


router.get("/random", getRandomJoke);
router.get("/all", getAllJokes)
router.get("/:id", getJokeById);


module.exports = router