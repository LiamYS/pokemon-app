import { Backdrop, CircularProgress, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPokemonList = async () => {
    let pokemonArray = [];
    for (let i = 1; i <= 151; i++) {
      pokemonArray.push(await getPokemonData(i));
    }
    console.log(pokemonArray);
    setPokemon(pokemonArray);
    setLoading(false);
  };

  const getPokemonData = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res;
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  return (
    <>
      {loading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
          <Typography sx={{ ml: 1 }}>Fetching Pokemon...</Typography>
        </Backdrop>
      ) : (
        <Grid container spacing={2}>
          {pokemon.map((p) => (
            <Grid item key={p.data.name} xs={12} md={4}>
              <PokemonCard pokemon={p.data} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Pokedex;
