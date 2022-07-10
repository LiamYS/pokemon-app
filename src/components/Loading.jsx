import { Backdrop, CircularProgress, Typography } from "@mui/material";
import React from "react";

const Loading = (props) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={props.isLoading}
    >
      <CircularProgress color="inherit" />
      <Typography sx={{ ml: 1 }}>Fetching Pokémon...</Typography>
    </Backdrop>
  );
};

export default Loading;
