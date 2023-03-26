import { Tooltip, Typography } from "@mui/material";
import { useState } from "react";

export default ({
  height,
  width,
  top,
  left,
  title,
  content,
  boxColor = "darkgray",
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Tooltip
      title={
        <>
          <Typography variant="h6" style={{ textAlign: "center" }}>
            {title}
          </Typography>
          <Typography>{content}</Typography>
        </>
      }
      placement="top"
    >
      <div
        style={{
          position: "absolute",
          top,
          left,
          height,
          width,
          border: `${hovered ? "orange" : boxColor} 4px dashed`,
          zIndex: 2,
          cursor: "pointer",
        }}
        onMouseOver={() => {
          setHovered(true);
          return false;
        }}
        onMouseLeave={() => {
          setHovered(false);
          return false;
        }}
      ></div>
    </Tooltip>
  );
};
