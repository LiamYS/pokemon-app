import { Grid } from "@mui/material";
import React from "react";
import PokemonCard from "../components/PokemonCard";

const Pokedex = () => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} p={2}>
      <Grid item xs={6} md={3}>
        <PokemonCard />
      </Grid>
      <Grid item xs={6} md={3}>
        <PokemonCard />
      </Grid>
      <Grid item xs={6} md={3}>
        <PokemonCard />
      </Grid>
      <Grid item xs={6} md={3}>
        <PokemonCard />
      </Grid>
    </Grid>
  );
};

export default Pokedex;
