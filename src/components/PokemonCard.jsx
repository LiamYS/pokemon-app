import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import React from "react";

const PokemonCard = () => {
  return (
    <Card sx={{ naxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          maxHeight="100px"
          image="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
          alt="Bulbassaur"
        />
        <CardContent>
          <Typography variant="h6">#001</Typography>
          <Typography variant="h5">Bulbassaur</Typography>
          <Chip
            label="Grass"
            sx={{ backgroundColor: "green", marginRight: 1 }}
          />
          <Chip label="Poison" sx={{ backgroundColor: "purple" }} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PokemonCard;
