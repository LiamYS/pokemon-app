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
      <CardActionArea>
        <CardContent>
          <CardMedia
            component="img"
            // height="140"
            image={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          <Typography variant="h6">#{pokemon.id}</Typography>
          <Typography variant="h5">{pokemon.name}</Typography>
          {/* <Chip
            label={primaryType}
            sx={{ backgroundColor: "green", marginRight: 1 }}
          />
          <Chip label={secondaryType} sx={{ backgroundColor: "purple" }} /> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PokemonCard;
