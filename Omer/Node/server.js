const express = require('express');
const app = express();

// Rota GET para a raiz "/"
app.get('/', (req, res) => {
    res.send('Welcome to my basic Express server!');
});

// Rota GET para "/about"
app.get('/about', (req, res) => {
    res.send('This server was created by [Your Name]');
});

// Rota GET para "/contact"
app.get('/contact', (req, res) => {
    res.json({
        email: 'your-email@example.com',
        phone: '123-456-7890'
    });
});

// Rota GET para "/api/products"
app.get('/api/products', (req, res) => {
    res.json([
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 }
    ]);
});

// Rota dinâmica GET para "/api/products/:id"
app.get('/api/products/:id', (req, res) => {
    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 }
    ];
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');
    res.json(product);
});

// O servidor vai escutar na porta 3000
const port = 3000;
app.listen(port, () => {
    console.log('Server running on port ${ port }');
});