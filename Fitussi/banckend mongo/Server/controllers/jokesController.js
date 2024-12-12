const jokes = [
    {
        id: 1,
        baseline: "Why don’t skeletons fight each other?",
        punchline: "They don’t have the guts.",
    },
    {
        id: 2,
        baseline: "What do you call cheese that isn't yours?",
        punchline: "Nacho cheese.",
    },
    {
        id: 3,
        baseline: "Why couldn’t the bicycle stand up by itself?",
        punchline: "It was two tired.",
    },
    {
        id: 4,
        baseline: "What do you call a fake noodle?",
        punchline: "An impasta.",
    },
    {
        id: 5,
        baseline: "Why don’t eggs tell jokes?",
        punchline: "They might crack up.",
    },
    {
        id: 6,
        baseline: "How does a penguin build its house?",
        punchline: "Igloos it together.",
    },
    {
        id: 7,
        baseline: "What do you call bears with no ears?",
        punchline: "B.",
    },
    {
        id: 8,
        baseline: "Why don’t some couples go to the gym?",
        punchline: "Because some relationships don’t work out.",
    },
    {
        id: 9,
        baseline: "What did one wall say to the other?",
        punchline: "I'll meet you at the corner.",
    },
    {
        id: 10,
        baseline: "Why did the scarecrow win an award?",
        punchline: "Because he was outstanding in his field!",
    },
];

const getRandomJoke = (req, res) => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.send(randomJoke);
};

const getJokeById = (req, res) => {
    const id = parseInt(req.params.id); // Obtém o ID da rota
    const joke = jokes.find(j => j.id === id); // Busca a piada pelo ID
    console.log(id);
    if (!joke) {
        return res.status(404).send({ error: "Joke not found" }); // Retorna 404 se não encontrado
    }
    res.send(joke); // Envia a piada encontrada
};


const getAllJokes = (req, res) => {
    res.send(jokes);
}

module.exports = {
    getJokeById,
    getAllJokes,
    getRandomJoke,
}