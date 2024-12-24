import { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";


const PokeContainer = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    console.log(data.results);

    setPokemons(data.results);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

    console.log(pokemons); //pokemons = data.results

  return (
    pokemons.length > 0 && (
      <>
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4vh"
        }}>
          {pokemons.map((singlepokemon) => {
            return <PokemonCard key={singlepokemon.name} pokemonProps={singlepokemon} />;
          })}
        </div>
      </>
    )
  );
};

export default PokeContainer;
