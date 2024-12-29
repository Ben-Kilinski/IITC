const express = require('express');
const mongoose = require('mongoose');
const jokesRouter = require('./routes/jokeRoutes');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

// Configurar variáveis de ambiente
dotenv.config();

// Inicializar o express
const app = express();

// Conectar ao MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Middlewares globais
app.use(cors()); // Permite requisições cross-origin
app.use(morgan('tiny')); // Logger para requisições
app.use(express.json()); // Permite trabalhar com JSON no corpo das requisições

// Rotas
app.use('/api/v1/jokes', jokesRouter); // Rotas para piadas
app.use('/api', userRoutes); // Rotas para usuários

// Rota principal
app.get('/', (req, res) => {
  res.send('Hello World from server!');
});

// Inicializar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
