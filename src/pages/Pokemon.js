import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const Pokemon = () => {
  // Get specific pokemon id from URL parameters
  const param = useParams();
  const id = param.id;

  const [pokemonDetails, setPokemonDetails] = useState();
  const [loading, setLoading] = useState(true);

  const getPokemon = async (id) => {
    const details = await getPokemonData(id, "general");
    setPokemonDetails(details.data);
    setLoading(false);
  };

  const getPokemonData = async (id, type) => {
    const general = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return general;
  };

  useEffect(() => {
    getPokemon(id);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Loading isLoading={loading} />
      ) : (
        <Card sx={{ m: 4 }}>
          {/* {console.log(pokemonDetails)} */}
          <CardContent>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              {pokemonDetails.name.charAt(0).toUpperCase() +
                pokemonDetails.name.slice(1)}
            </Typography>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h6"></Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <CardMedia
                  component="img"
                  alt={pokemonDetails.name}
                  image={pokemonDetails.sprites.front_default}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="h5">Pokémon data</Typography>
                {pokemonDetails.abilities.map((a) => (
                  <Typography key={a.ability.name}>{a.ability.name}</Typography>
                ))}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Pokemon;
