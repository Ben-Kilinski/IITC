const express = require("express");
const router = express.Router();

const { getAllUsers, getUserById, getRandomUser } = require("../controllers/usersController")


router.get("/random", getRandomUser);
router.get("/all", getAllUsers);
router.get("/:id", getUserById);

module.exports = router