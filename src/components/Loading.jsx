import { Backdrop, CircularProgress, Typography } from "@mui/material";
import React from "react";

const Loading = ({ isLoading, message }) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
      <Typography sx={{ ml: 1 }}>Fetching {message}...</Typography>
    </Backdrop>
  );
};

export default Loading;
