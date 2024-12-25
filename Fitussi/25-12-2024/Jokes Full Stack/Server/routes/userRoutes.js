const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getRandomUser,
} = require("./controllers/usersController.js");

// Get all users
// TODO: Add to Postman
router.get("/", getAllUsers);

// Create a new user
// TODO: Add to Postman
router.post("/", createUser);

// Get a random user
// TODO: Add to Postman
router.get("/random", getRandomUser);

// Get a single user by ID
// TODO: Add to Postman
router.get("/:id", getUserById);

// Update a user by ID
// TODO: Add to Postman
router.put("/:id", updateUser);

// Delete a user by ID
// TODO: Add to Postman
router.delete("/:id", deleteUser);

module.exports = router;