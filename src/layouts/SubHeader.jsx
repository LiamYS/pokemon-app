import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const SubHeader = ({ title, description }) => {
  return (
    <Card>
      <CardContent>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography sx={{ textAlign: "center", ml: 15, mr: 15 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SubHeader;
