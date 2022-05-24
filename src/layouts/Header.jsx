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
          component="a"
          href="#"
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
          {pages.map((page) => (
            <Button
              key={page}
              sx={{ color: "white", display: "inline", alignItems: "center" }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
