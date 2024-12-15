const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

// Routes imports
const animalsRoutes = require('./routes/animalsRoutes.js')

app.get("/", (req, res)=>{res.send('Hello Ben')})


app.use('/animals', animalsRoutes);


app.listen(PORT, ()=>{console.log(`Server is running in ${PORT}`)})