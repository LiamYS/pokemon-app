import {
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

const PokemonTraining = ({ pokemonDetails, pokemonSpecies }) => {
  return (
    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
      <Typography variant="h5">Training</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Catch rate</TableCell>
              <TableCell>{pokemonSpecies.capture_rate}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Base Friendship</TableCell>
              <TableCell>{pokemonSpecies.base_happiness}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Base Experience</TableCell>
              <TableCell>{pokemonDetails.base_experience}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Growth Rate</TableCell>
              <TableCell>
                {pokemonSpecies.growth_rate.name.replace("-", " ")}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default PokemonTraining;
