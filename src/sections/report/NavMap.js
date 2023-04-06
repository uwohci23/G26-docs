import Section from "../../Section";
import { Grid } from "@mui/material";
import img_1 from "../../images/navmap1.png";
import img_2 from "../../images/navmap2.png";
import ImageInteractiveGroup from "../../components/ImageInteractiveGroup";

export default () => {
  return (
    <Section title="Navigational Map">
      <Grid item>
        <ImageInteractiveGroup img={img_1} magnifier={true} size="30%" />
      </Grid>
      <Grid item>
        <ImageInteractiveGroup img={img_2} magnifier={true} size="30%" />
      </Grid>
    </Section>
  );
};
