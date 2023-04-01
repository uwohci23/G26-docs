import { Box } from "@mui/material";
import { GlassMagnifier } from "react-image-magnifiers";

export default ({ img, magnifier, children, size = "60%" }) => {
  return (
    <Box style={{ maxWidth: "100%", marginTop: "2rem" }}>
      {magnifier ? (
        <GlassMagnifier
          imageSrc={img}
          magnifierSize={size}
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
