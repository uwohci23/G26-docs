import { Box } from "@mui/material";
import { GlassMagnifier } from "react-image-magnifiers";

export default ({ img, magnifier, children }) => {
  return (
    <Box style={{ maxWidth: "100%" }}>
      {magnifier ? (
        <GlassMagnifier
          imageSrc={img}
          magnifierSize="60%"
          magnifierBackgroundColor="gray"
          overflow={true}
        />
      ) : (
        <Box style={{ position: "relative" }}>
          <img width="100%" src={img} />
          {children}
        </Box>
      )}
    </Box>
  );
};
