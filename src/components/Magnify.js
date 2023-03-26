import { FormControlLabel, Switch } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default ({ value, onChange }) => {
  return (
    <>
      <FormControlLabel
        control={<Switch value={value} onChange={onChange} />}
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
