import { FormControlLabel, Switch } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default ({ value, onChange }) => {
  return (
    <>
      <FormControlLabel
        control={
          <Switch value={value} onChange={(e) => onChange(e.target.checked)} />
        }
        label={
          <>
            <SearchIcon style={{ verticalAlign: "middle" }} /> Magnifier
          </>
        }
      />
      <br />
    </>
  );
};
