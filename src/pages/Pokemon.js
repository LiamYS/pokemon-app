import {
  Backdrop,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pokemon = () => {
  const param = useParams();
  const id = param.id;
  const [pokemonDetails, setPokemonDetails] = useState();
  const [loading, setLoading] = useState(true);

  const getPokemon = async (id) => {
    const details = await getPokemonData(id);
    setPokemonDetails(details.data);
    setLoading(false);
  };

  const getPokemonData = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res;
  };

  useEffect(() => {
    getPokemon(id);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
          <Typography sx={{ ml: 1 }}>Fetching Pokémon...</Typography>
        </Backdrop>
      ) : (
        <Card sx={{ m: 4 }}>
          <CardContent>
            <CardMedia
              component="img"
              alt={pokemonDetails.name}
              image={pokemonDetails.sprites.front_default}
            />
            <Typography variant="h4">{pokemonDetails.name}</Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Pokemon;
