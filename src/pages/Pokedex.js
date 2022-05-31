import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";

const Pokedex = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();

        setAllPokemons((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} p={2}>
      {allPokemons.map((pokemon, index) => (
        <Grid item xs={6} md={3}>
          <PokemonCard
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types[0].type.name}
            key={index}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Pokedex;
