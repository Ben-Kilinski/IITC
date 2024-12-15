//app.js: 
// The main entry point of the application. 
// Configures the server, middleware, 
// and connects the routes.

const express = require('express');

const dotenv = require('dotenv'); 
dotenv.config();

const app = express(); 
app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
});


app.get( '/' , (req, res)=>{res.send("Welcome to your Server")} )

const animalsRoutes = require('./routes/animalsRoutes.js')
app.use('/animals', animalsRoutes)

const PORT = 3000;
app.listen( PORT, ()=>{console.log(`Server on port: ${PORT}`)} )


