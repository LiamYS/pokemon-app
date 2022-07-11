import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import PokemonDescription from "../components/PokemonDescription";
import PokemonData from "../components/PokemonDetails";
import PokemonStats from "../components/PokemonStats";

const Pokemon = () => {
  // Get specific pokemon id from URL parameters
  const param = useParams();
  const id = param.id;

  const [pokemonDetails, setPokemonDetails] = useState();
  const [pokemonSpecies, setPokemonSpecies] = useState();
  const [loading, setLoading] = useState(true);

  const getPokemon = async (id, type) => {
    // setPokemonDetails(details.data);

    if (type === "species") {
      const details = await getPokemonSpecies(id);
      setPokemonSpecies(details.data);
    } else {
      const details = await getPokemonData(id);
      setPokemonDetails(details.data);
    }

    setLoading(false);
  };

  const getPokemonData = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res;
  };

  const getPokemonSpecies = async (id) => {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`
    );
    return res;
  };

  useEffect(() => {
    getPokemon(id);
    getPokemon(id, "species");
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Loading isLoading={loading} />
      ) : (
        <Card sx={{ m: 4 }}>
          {/* {console.log(pokemonDetails)}
          {console.log(pokemonSpecies)} */}
          <CardContent>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", fontWeight: "bold", mb: 3 }}
            >
              {pokemonDetails.name.charAt(0).toUpperCase() +
                pokemonDetails.name.slice(1)}
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography variant="h6"></Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <CardMedia
                  component="img"
                  alt={pokemonDetails.name}
                  image={pokemonDetails.sprites.front_default}
                  height={475}
                />
              </Grid>
              <PokemonData pokemonDetails={pokemonDetails} />
              <PokemonDescription pokemonDetails={pokemonSpecies} />
              <PokemonStats pokemonDetails={pokemonDetails} />
            </Grid>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Pokemon;
