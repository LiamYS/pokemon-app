import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import PokemonCard from "../components/PokemonCard";
import SubHeader from "../layouts/SubHeader";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPokemonList = async () => {
    let pokemonArray = [];
    for (let i = 1; i <= 151; i++) {
      pokemonArray.push(await getPokemonData(i));
    }
    setPokemon(pokemonArray);
    setLoading(false);
  };

  const getPokemonData = async (id) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response;
  };

  useEffect(() => {
    getPokemonList();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Loading isLoading={loading} message="Pokémon" />
      ) : (
        <>
          <SubHeader
            title="Kanto Region"
            description="Kanto is a region in the Pokémon series and is the main region in first generation and their remakes and a secondary region in the second generation and their remakes. It is located east of Johto and has many of the same Berries, but no Apricorns. It is also located above Hoenn, and below Sinnoh."
          />
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
