import { FormControlLabel } from "@mui/material";

export default ({ status, page, onChange }) => {
  return (
    <>
      {status.map((s) => (
        <FormControlLabel
          key={s}
          control={
            <input
              type={"radio"}
              checked={page === s}
              onChange={() => onChange(s)}
            />
          }
          label={s}
        />
      ))}
    </>
  );
};
