import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import PokemonDescription from "../components/PokemonDescription";
import PokemonData from "../components/PokemonData";
import PokemonStats from "../components/PokemonStats";
import PokemonTraining from "../components/PokemonTraining";

const Pokemon = () => {
  // Get specific pokemon id from URL parameters
  const param = useParams();
  const [pokemonDetails, setPokemonDetails] = useState({
    details: null,
    species: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = param.id;
    const fetchData = async (id) => {
      const pokemonDetails = await axios(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      const pokemonSpecies = await axios(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
      );
      setPokemonDetails({
        details: pokemonDetails.data,
        species: pokemonSpecies.data,
      });

      setLoading(false);
    };

    fetchData(id);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Loading isLoading={loading} message="Pokémon" />
      ) : (
        <Card sx={{ m: 4 }}>
          <CardContent>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", fontWeight: "bold", mb: 3 }}
            >
              {pokemonDetails.details.name.charAt(0).toUpperCase() +
                pokemonDetails.details.name.slice(1)}
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography variant="h6"></Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                <CardMedia
                  component="img"
                  alt={pokemonDetails.details.name}
                  image={pokemonDetails.details.sprites.front_default}
                  height={475}
                />
              </Grid>
              <PokemonData
                pokemonDetails={pokemonDetails.details}
                pokemonSpecies={pokemonDetails.species}
              />
              <PokemonDescription pokemonSpecies={pokemonDetails.species} />
              <PokemonTraining
                pokemonDetails={pokemonDetails.details}
                pokemonSpecies={pokemonDetails.species}
              />
              <PokemonStats pokemonDetails={pokemonDetails.details} />
            </Grid>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Pokemon;
