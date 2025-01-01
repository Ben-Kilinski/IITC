const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); // Certifique-se de ter importado isso
const User = require("../models/User.model");

const SALTROUNDS = 10;

async function signup(req, res) {
    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, SALTROUNDS); // Adicionado await aqui

        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

async function login(req, res) {
    console.log("hey");

    try {
        const { email, password } = req.body;
        console.log(email, password);


        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        console.log(password)
        console.log(user.password)
        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log(isPasswordValid);

        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });

        res.status(200).json({ token, message: "Login successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

async function userslist(req, res) {
    return (
        res.status(200).json({ message: "all users" })
    )
}

// Exportando funções
module.exports = { signup, login, userslist };
