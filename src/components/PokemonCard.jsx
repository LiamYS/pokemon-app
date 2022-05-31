import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import React from "react";

const PokemonCard = ({ id, name, image, type, key }) => {
  return (
    <Card sx={{ naxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" image={image} alt={name} />
        <CardContent>
          <Typography variant="h6">#0{id}</Typography>
          <Typography variant="h5">{name}</Typography>
          <Chip
            label={type}
            sx={{ backgroundColor: "green", marginRight: 1 }}
          />
          <Chip label="Poison" sx={{ backgroundColor: "purple" }} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PokemonCard;
