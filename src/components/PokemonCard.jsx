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

const PokemonCard = ({ pokemon }) => {
  function CountDigits(number) {
    switch (number.toString().length) {
      case 1:
        return <Typography variant="h6">#00{number}</Typography>;
      case 2:
        return <Typography variant="h6">#0{number}</Typography>;
      case 3:
        return <Typography variant="h6">#{number}</Typography>;
      default:
        return <Typography variant="h6">#{number}</Typography>;
    }
  }

  return (
    <Card>
      <CardActionArea href={`/pokemon/${pokemon.id}`}>
        <CardContent>
          <CardMedia
            component="img"
            image={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          {CountDigits(pokemon.id)}
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
