import './App.css';

//import react hooks useState (to storage pokemons) and 
// useEffect(to search for data after the page is loaded) 
import React, { useState, useEffect } from 'react';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20'); //API requisition
        const data = await response.json();//api converted to Json format (readible to JS)
        setPokemonList(data.results);
        setPokemonList(data.results); // Storage the data at the state pokemonlist
        console.log(data.results); // Exibindo a lista no console
      } catch (error) {
        console.error('Erro ao buscar Pokémon:', error);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <div className="App">
      <h1>Pokémon Viewer App</h1>
      <ul className="pokemon-list">
        {pokemonList.map((pokemon, index) => (
          <li key={index} className="pokemon-item">
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
