import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 

const PokemonCard = ({ pokemonProps }) => {
  const [pokemonData, setPokemonData] = useState({}); 

  const fetchPokemon = async () => {
    try {
      const { data } = await axios.get(pokemonProps.url); // URL passada pela prop
      setPokemonData(data); // Atualiza o estado com os dados do Pokémon
    } catch (error) {
      console.error("Erro ao buscar o Pokémon:", error);
    }
  };
  useEffect(() => { fetchPokemon()}, [pokemonProps.url]); // Dependência adicionada para evitar warnings

  return (
    pokemonData.name && ( // Verifica se os dados do Pokémon estão carregados
      <Link to={`/pokemon/${pokemonData.name}`} key={pokemonData.name}>
        <div
          style={{
            backgroundColor: "tomato",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column", // Centraliza título e imagem em coluna
            width: "25vw",
            height: "20vh",
            borderRadius: "10px",
            border: "1px solid #0c0c0c",
            padding: "10px",
          }}
        >
          <h4 style={{ margin: "10px 0" }}>{pokemonData.name}</h4>
          <img
            src={pokemonData?.sprites?.front_default}
            alt={pokemonData.name}
            style={{ maxWidth: "100%", maxHeight: "80%" }}
          />
        </div>
      </Link>
    )
  );
};

export default PokemonCard;
