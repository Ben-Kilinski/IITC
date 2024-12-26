import { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";


const PokeContainer = () => {
  const [pokemonsArray, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    console.log(data);

    setPokemons(data.results); 
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

    // console.log(pokemons); //pokemons = data.results

  return (
    pokemonsArray.length > 0 && (
      <>
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4vh"
        }}>
          {pokemonsArray.map((singlepokemonObject) => {
            return <PokemonCard key={singlepokemonObject.name} pokemonProps={singlepokemonObject} />;
          })}
        </div>
      </>
    )
  );
};

export default PokeContainer;
