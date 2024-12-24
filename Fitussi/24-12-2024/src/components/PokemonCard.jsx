import { useState, useEffect } from "react";
import axios from "axios";

const PokemonCard = ({ pokemon }) => {
  
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    const fetchPokemon = async () => {
      const { data } = await axios.get(pokemon.url);
      setPokemondataPokeCard(data);
    };
    fetchPokemon();
  }, []);


  const goToPokemonPage = ()=> {
    
  }

  return (
    pokemonData.name && (
      <div
        style={{
          backgroundColor: "tomato",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "25vw",
          height: "20vh",
          borderRadius: "10px",
          border: "1px solid #0c0c0c",
          padding: "10px"
        }}
      >
        <h4 onClick={goToPokemonPage}>{pokemon.name}</h4>
        <img src={pokemonData?.sprites?.front_default} alt="" />
      </div>
    )
  );
};

export default PokemonCard;
