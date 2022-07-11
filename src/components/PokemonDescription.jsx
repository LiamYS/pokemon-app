import { Grid, Typography } from "@mui/material";
import React from "react";

const PokemonDescription = ({ pokemonSpecies }) => {
  return (
    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
      <Typography variant="h5">PokéDex description</Typography>
      {console.log(pokemonSpecies.flavor_text_entries[0])}
      <Typography>
        {pokemonSpecies.flavor_text_entries[0].flavor_text}
      </Typography>
    </Grid>
  );
};

export default PokemonDescription;
