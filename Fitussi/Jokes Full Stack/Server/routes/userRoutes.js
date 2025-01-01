const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User.model");
const { signup, login, userslist } = require("../controllers/userController");
const { authenticateToken } = require("../middlewares/middleware");

const router = express.Router();

// Signupus
router.post("/signup", signup)

// Login
router.post("/login", login)

//baba 
router.get("/baba", authenticateToken, userslist)



// Rota protegida
// router.get("/protected", authenticateToken, (req, res) => {
//   res.status(200).json({ message: "This is a protected route", user: req.user });
// });

module.exports = router;
