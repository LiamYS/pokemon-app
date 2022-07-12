import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const Region = (props) => {
  return (
    <Card>
      <CardContent>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          {props.generation}
        </Typography>
        <Typography sx={{ textAlign: "center", ml: 15, mr: 15 }}>
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Region;
