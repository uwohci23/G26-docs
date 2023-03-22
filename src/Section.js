import { Box, Typography } from "@mui/material";

export default ({ title, children }) => {
  return (
    <Box>
      <Typography
        variant="h2"
        style={{
          margin: "6rem 0",
          paddingLeft: "0.5rem",
          borderLeft: "0.8rem black solid",
          position: "sticky",
          backgroundColor: "white",
          top: "0",
        }}
      >
        {title}
      </Typography>
      <Box>{children}</Box>
    </Box>
  );
};
