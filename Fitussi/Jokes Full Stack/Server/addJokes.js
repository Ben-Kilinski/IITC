// Importa o Mongoose para conectar ao MongoDB
const mongoose = require("mongoose");

// Importa o modelo Joke
const Joke = require("./models/Joke.model");

// Carrega as variáveis de ambiente
require('dotenv').config();

// Lista de piadas
const jokes = [
  { setup: "Why was Moses the first to use a tablet?", punchline: "Because he had two of them with cloud storage!" },
  { setup: "Why do programmers prefer dark mode?", punchline: "Because light attracts bugs!" },
  { setup: "Why did the computer get cold?", punchline: "It left its Windows open!" },
  { setup: "Why was the math book sad?", punchline: "Because it had too many problems!" },
  { setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field!" },
  { setup: "Why don’t scientists trust atoms?", punchline: "Because they make up everything!" },
  { setup: "Why did the tomato blush?", punchline: "Because it saw the salad dressing!" },
  { setup: "Why did the golfer bring an extra pair of pants?", punchline: "In case he got a hole in one!" },
  { setup: "What’s a Jedi’s favorite dessert?", punchline: "Obi-Wan Cannoli!" },
  { setup: "Why did the bike fall over?", punchline: "It was two-tired!" },
  { setup: "Why don’t skeletons fight?", punchline: "Because they don’t have the guts!" },
  { setup: "Why was the stadium so cool?", punchline: "Because it was full of fans!" },
  { setup: "Why do cows wear bells?", punchline: "Because their horns don’t work!" },
  { setup: "What do you call a fake noodle?", punchline: "An impasta!" },
  { setup: "What do you call a fish with no eyes?", punchline: "Fsh!" },
  { setup: "Why did the music teacher go to jail?", punchline: "Because she got caught with sharp notes!" },
  { setup: "Why was the computer tired?", punchline: "Because it had a hard drive!" },
  { setup: "Why did the coffee file a police report?", punchline: "It got mugged!" },
  { setup: "What’s a pirate’s favorite programming language?", punchline: "ARRR-uby!" },
  { setup: "Why don’t programmers like nature?", punchline: "Too many bugs!" },
  { setup: "Why did the chicken join a band?", punchline: "Because it had the drumsticks!" },
  { setup: "Why did the programmer go broke?", punchline: "Because he lost his cache!" },
  { setup: "Why don’t vampires attack programmers?", punchline: "They love their bit-wise operations!" },
  { setup: "Why did the skeleton not go to the dance?", punchline: "Because he had no body to go with!" },
  { setup: "What’s a cat’s favorite button on the keyboard?", punchline: "Paws!" },
  { setup: "Why don’t dinosaurs use computers?", punchline: "They’re scared of the mouse!" },
  { setup: "Why was the broom late?", punchline: "It swept in late!" },
  { setup: "Why don’t eggs tell jokes?", punchline: "Because they’d crack up!" },
  { setup: "What do you call cheese that isn’t yours?", punchline: "Nacho cheese!" },
  { setup: "Why don’t skeletons go trick or treating?", punchline: "Because they have no body to go with!" },
  { setup: "What did the janitor say when he jumped out of the closet?", punchline: "Supplies!" },
  { setup: "Why did the teddy bear skip dessert?", punchline: "Because it was already stuffed!" },
  { setup: "Why was the belt arrested?", punchline: "Because it held up a pair of pants!" },
  { setup: "Why do bees have sticky hair?", punchline: "Because they use honeycombs!" },
  { setup: "Why did the computer cross the road?", punchline: "To get to the other domain!" },
  { setup: "What’s an astronaut’s favorite meal?", punchline: "Launch!" },
  { setup: "Why did the photo go to jail?", punchline: "It was framed!" },
  { setup: "Why did the banana go to the doctor?", punchline: "Because it wasn’t peeling well!" },
  { setup: "Why do cows make terrible musicians?", punchline: "They keep hitting flat notes!" },
  { setup: "Why did the cookie go to the doctor?", punchline: "Because it felt crumby!" },
  { setup: "What’s a tree’s favorite drink?", punchline: "Root beer!" },
  { setup: "Why was the math teacher so strict?", punchline: "She had too many functions to deal with!" },
  { setup: "Why don’t ghosts use elevators?", punchline: "They lift their own spirits!" },
  { setup: "Why did the cat sit on the computer?", punchline: "To keep an eye on the mouse!" },
  { setup: "Why did the baker go to therapy?", punchline: "Because he kneaded it!" },
  { setup: "Why don’t robots ever panic?", punchline: "They’re programmed to stay cool!" },
  { setup: "Why was the broom happy?", punchline: "It swept the competition!" },
  { setup: "Why do fish never do homework?", punchline: "Because they’re swimming in problems!" },
  { setup: "Why did the cow become an artist?", punchline: "Because it was moo-tivated!" },
];

// Função principal
async function addJokes() {
  try {
    console.log("Conectando ao MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    console.log("Buscando piadas existentes...");
    const existingJokes = await Joke.find({}, { setup: 1, _id: 0 });
    const existingSetups = new Set(existingJokes.map(joke => joke.setup));

    console.log("Filtrando piadas duplicadas...");
    const jokesToInsert = jokes.filter(joke => !existingSetups.has(joke.setup));

    if (jokesToInsert.length === 0) {
      console.log("Nenhuma piada nova para adicionar.");
    } else {
      console.log(`Adicionando ${jokesToInsert.length} piadas...`);
      const result = await Joke.insertMany(jokesToInsert);
      console.log(`${result.length} piadas adicionadas com sucesso!`);
    }
  } catch (err) {
    console.error("Erro:", err.message);
  } finally {
    await mongoose.connection.close();
    console.log("Conexão encerrada.");
  }
}

// Executa a função
addJokes();
