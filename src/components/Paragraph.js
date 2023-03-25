import { Typography } from "@mui/material";

export default ({ title, children }) => {
  return (
    <>
      <Typography variant={"h4"} style={{ marginTop: "1rem" }}>
        {title}
      </Typography>
      <Typography variant={"h5"}>{children}</Typography>
    </>
  );
};
