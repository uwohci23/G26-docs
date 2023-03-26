import { Box } from "@mui/material";

export default ({ children }) => {
  return (
    <Box
      style={{
        position: "sticky",
        bottom: "0",
        backgroundColor: "white",
        border: "2px gray solid",
        padding: "1rem",
        zIndex: 9,
      }}
    >
      {children}
    </Box>
  );
};
