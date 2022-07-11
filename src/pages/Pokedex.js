import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import PokemonCard from "../components/PokemonCard";
import Generation from "../components/Generation";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPokemonList = async () => {
    let pokemonArray = [];
    for (let i = 1; i <= 151; i++) {
      pokemonArray.push(await getPokemonData(i));
    }
    // console.log(pokemonArray);
    setPokemon(pokemonArray);
    setLoading(false);
  };

  const getPokemonData = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res;
  };

  useEffect(() => {
    getPokemonList();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Loading isLoading={loading} />
      ) : (
        <>
          <Generation generation="1st" />
          <Grid container spacing={3} sx={{ p: 3 }}>
            {pokemon.map((p) => (
              <Grid item key={p.data.name} xs={12} sm={6} md={4} lg={2}>
                <PokemonCard pokemon={p.data} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </>
  );
};

export default Pokedex;
