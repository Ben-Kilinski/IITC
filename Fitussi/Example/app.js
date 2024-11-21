const express = require('express');
const app = express();

// Port the server will run on
const PORT = 3000;

// List of books
const books = [
    "To Kill a Mockingbird",
    "1984",
    "The Great Gatsby",
    "Pride and Prejudice",
    "The Catcher in the Rye"
];

// Endpoint to get the list of books
app.get('/books', (req, res) => {
    res.json(books); // Send the list of books as JSON
});
app.get('/', (req, res) => {
    res.send("Hi guys, welcome to my first server!!!!"); // Send the list of books as JSON
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


