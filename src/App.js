import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Pokedex from "./pages/Pokedex";
import Berries from "./pages/Berries";
import Items from "./pages/Items";

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
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Header />
          <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/berries" element={<Berries />} />
            <Route path="/items" element={<Items />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
