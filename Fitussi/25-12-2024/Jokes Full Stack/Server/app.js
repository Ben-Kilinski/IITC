const express = require('express');
const mongoose = require('mongoose');
const jokesRouter = require('./routes/jokeRoutes')
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
const cors = require('cors');
const jokesData = require('./data/jokesData.json')
jokesData.forEach((joke, index) => {
    console.log(`${index + 1}. ${joke.setup} - ${joke.punchline}`);
  });
dotenv.config();

const app = express();
const port = 3000;

app.use(cors());

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
});

app.use(express.json())

app.use('/api/v1/jokes', jokesRouter);

app.use('/api/v1/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});