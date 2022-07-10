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
          {props.region} Region
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Region;
