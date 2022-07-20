import { Refresh } from "@mui/icons-material";
import { Button, Container } from "@mui/material";
import React from "react";

const LoadMoreButton = (props) => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        variant="outlined"
        endIcon={<Refresh />}
        sx={{ mb: 4 }}
        onClick={props.onClick}
      >
        Load More
      </Button>
    </Container>
  );
};

export default LoadMoreButton;
