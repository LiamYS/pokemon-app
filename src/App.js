import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Header from "./layouts/Header";

function App() {
  const [mode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Header />
      </Box>
    </ThemeProvider>
  );
}

export default App;
