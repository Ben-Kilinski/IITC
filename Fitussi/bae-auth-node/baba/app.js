const express = require('express');
const bcrypt = require('bcrypt')
const app = express();
const PORT = 3000;
const saltRounds = 10;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send({
        message: "Hello from the server :_:"
    })
})

app.post('/encrypt-password', (req, res) => {
    const { userPassword } = req.body;
    bcrypt.hash(userPassword, saltRounds)
})



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})