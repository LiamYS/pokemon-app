import { Grid, Typography } from "@mui/material";
import React from "react";

const PokemonDescription = ({ pokemonDetails }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      {console.log(pokemonDetails)}
      <Typography variant="h5">PokéDex description</Typography>
      <Typography></Typography>
    </Grid>
  );
};

export default PokemonDescription;
