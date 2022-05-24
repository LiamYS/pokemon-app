import { CatchingPokemon } from "@mui/icons-material";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

const pages = ["Pokémon data", ""];

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <CatchingPokemon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PokéApp
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
