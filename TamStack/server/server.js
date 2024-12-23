import express from 'express';
const app = express()
app.get('/', (request, response) => {
    console.log('Requisição recebida:');
    console.log(`Método: ${request.method}`);
    console.log(`URL: ${request.url}`);
    response.send("Server running🏃‍♂️‍➡️🚀");
})
app.listen(3000, () => { console.log('Server is running on http://localhost:3000') })