const express = require('express');
const dotenv = require('dotenv'); 
const mongoose = require('mongoose');

// Load environment variables
dotenv.config();

const app = express(); 

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
});

// Middleware for parsing JSON
app.use(express.json());

// Root Route
app.get('/', (req, res) => {
    res.send("Welcome to your Server, you're the guy Ben");
});

// Animal Routes
const animalsRoutes = require('./routes/animalsRoutes.js');
app.use('/animals', animalsRoutes);

// Start the Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server on port: ${PORT}`);
});



