import { Box, Typography } from "@mui/material";

export default ({ children }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <Typography variant="body1" style={{ fontSize: "1.3rem" }}>
        {children}
      </Typography>
    </div>
  );
};
