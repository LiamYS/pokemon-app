import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import React from "react";

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
          <Typography variant="h6">#{pokemon.id}</Typography>
          <Typography variant="h5">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Typography>
          <Chip
            label={
              pokemon.types[0].type.name.charAt(0).toUpperCase() +
              pokemon.types[0].type.name.slice(1)
            }
            sx={{ backgroundColor: "green", marginRight: 1, mt: 1 }}
          />

          {/* <Chip
            label={pokemon.types[1].type.name}
            sx={{ backgroundColor: "purple" }}
          /> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PokemonCard;
