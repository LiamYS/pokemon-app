import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Pokedex from "./pages/Pokedex";
import Berries from "./pages/Berries";
import Items from "./pages/Items";
import Pokemon from "./pages/Pokemon";

function App() {
  const [mode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline enableColorScheme />
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Header />
          <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/pokemon/:id" element={<Pokemon />} />
            <Route path="/berries" element={<Berries />} />
            <Route path="/items" element={<Items />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
