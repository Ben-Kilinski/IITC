import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios"; 


function App() {
  
  const [pokemonList, setPokemonList] = useState([]); 

  useEffect( // 'efeitos' a serem feitos após o react montar a tela 
    () => {console.log("o hook useEffect foi usado!")}, // o que fazer 
    [] // quando fazer 
  );

  return (
    <div className="App">
      <h1>Pokémon Viewer App</h1>
      <p>Show time!</p>
    </div>
  );
}

export default App;