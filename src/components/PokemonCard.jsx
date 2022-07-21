import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import React from "react";
import "../components/PokemonCardStyles.css";
import { countDigits } from "../Helper";

const PokemonCard = ({ pokemon }) => {
  return (
    <Card>
      <CardActionArea href={`/pokemon/${pokemon.id}`}>
        <CardContent>
          <CardMedia
            component="img"
            image={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          {countDigits(pokemon.id, true)}
          <Typography variant="h5">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Typography>

          {pokemon.types.map((t) => (
            <Chip
              key={t.type.name}
              label={t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)}
              className={t.type.name}
              sx={{ mr: 1, mt: 1 }}
            />
          ))}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PokemonCard;
