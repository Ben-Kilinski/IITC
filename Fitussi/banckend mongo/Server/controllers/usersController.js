const users = [
    {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@example.com",
      "age": 30,
      "isActive": true
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "janesmith@example.com",
      "age": 25,
      "isActive": false
    },
    {
      "id": 3,
      "name": "Alice Johnson",
      "email": "alicej@example.com",
      "age": 28,
      "isActive": true
    },
    {
      "id": 4,
      "name": "Bob Brown",
      "email": "bobbrown@example.com",
      "age": 35,
      "isActive": true
    },
    {
      "id": 5,
      "name": "Charlie Davis",
      "email": "charlied@example.com",
      "age": 40,
      "isActive": false
    },
    {
      "id": 6,
      "name": "Emma Wilson",
      "email": "emmaw@example.com",
      "age": 22,
      "isActive": true
    },
    {
      "id": 7,
      "name": "Daniel Lee",
      "email": "daniellee@example.com",
      "age": 27,
      "isActive": false
    },
    {
      "id": 8,
      "name": "Sophia Martinez",
      "email": "sophiam@example.com",
      "age": 24,
      "isActive": true
    },
    {
      "id": 9,
      "name": "Liam Harris",
      "email": "liamh@example.com",
      "age": 29,
      "isActive": true
    },
    {
      "id": 10,
      "name": "Olivia Clark",
      "email": "oliviac@example.com",
      "age": 31,
      "isActive": false
    }
  ]

const getRandomUser = (req, res) => {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    res.send(randomUser);
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id); // Obtém o ID da rota
    const user = users.find(u => u.id === id); // Busca a piada pelo ID
    if (!user) {
        return res.status(404).send({ error: "User not found" }); // Retorna 404 se não encontrado
    }
    res.send(user); // Envia a piada encontrada
};

const getAllUsers = (req, res) => {
    res.send(users);
}

module.exports = {
    getUserById,
    getAllUsers,
    getRandomUser,
};
