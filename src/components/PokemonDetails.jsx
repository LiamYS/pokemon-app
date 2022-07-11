import {
  Chip,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { CountDigits } from "../Helper";

const PokemonData = ({ pokemonDetails }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Typography variant="h5">Pokémon Details</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>{CountDigits(pokemonDetails.id)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>
                {pokemonDetails.types.map((type) => (
                  <Chip
                    key={type.type.name}
                    label={
                      type.type.name.charAt(0).toUpperCase() +
                      type.type.name.slice(1)
                    }
                    className={type.type.name}
                    sx={{ mr: 1 }}
                  />
                ))}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Height</TableCell>
              <TableCell>{(pokemonDetails.height / 10).toFixed(1)} m</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Weight</TableCell>
              <TableCell>
                {(pokemonDetails.weight / 10).toFixed(1)} kg
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Abilities</TableCell>
              <TableCell>
                {pokemonDetails.abilities.map((a) => (
                  <Typography key={a.ability.name}>
                    {a.ability.name.charAt(0).toUpperCase() +
                      a.ability.name.slice(1)}
                  </Typography>
                ))}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default PokemonData;
