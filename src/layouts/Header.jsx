import { CatchingPokemon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const pages = ["PokéDex", "Berries", "Items"];

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Header = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <CatchingPokemon sx={{ mr: 1, alignItems: "center" }} />
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "block" },
            color: "inherit",
            textDecoration: "none",
            alignItems: "center",
          }}
        >
          PokéApp
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Button
            component={Link}
            to="/"
            sx={{ color: "white", display: "inline", alignItems: "center" }}
          >
            PokéDex
          </Button>
          <Button
            component={Link}
            to="/berries"
            sx={{ color: "white", display: "inline", alignItems: "center" }}
          >
            Berries
          </Button>
          <Button
            component={Link}
            to="/items"
            sx={{ color: "white", display: "inline", alignItems: "center" }}
          >
            Items
          </Button>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
