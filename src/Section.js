import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default ({ title, children }) => {
  return (
    <Box>
      <a id={title} />
      <Typography
        variant="h2"
        style={{
          margin: "6rem 0",
          paddingLeft: "0.5rem",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          borderLeft: "0.8rem black solid",
          position: "sticky",
          backgroundColor: "white",
          top: "0",
          zIndex: 10,
        }}
      >
        {title}
      </Typography>
      <Grid container spacing={4}>
        {children}
      </Grid>
    </Box>
  );
};
