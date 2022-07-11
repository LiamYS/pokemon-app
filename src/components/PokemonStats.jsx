import {
  Grid,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const PokemonStats = ({ pokemonDetails }) => {
  const normalise = (value) => ((value - 0) * 100) / (200 - 0);
  var total_stats = 0;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Typography variant="h5">Base Stats</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {pokemonDetails.stats.map((stat) => (
              <TableRow key={stat.stat.name}>
                <TableCell width="25%">
                  {stat.stat.name.charAt(0).toUpperCase() +
                    stat.stat.name.slice(1)}
                </TableCell>
                <TableCell width="10%">{stat.base_stat}</TableCell>
                <TableCell>
                  <LinearProgress
                    variant="determinate"
                    value={normalise(stat.base_stat)}
                  ></LinearProgress>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>
                {pokemonDetails.stats.forEach((element) => {
                  total_stats += element.base_stat;
                })}
                {total_stats}
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default PokemonStats;
