import { useState } from "react";
import Section from "../Section";
import { Grid } from "@mui/material";
import ImageInteractiveGroup from "../components/ImageInteractiveGroup";
import img from "../images/notification.png";
import Hover from "../components/Hover";

export default () => {
  const [magnify, setMagnify] = useState(false);
  return (
    <Section title={"Notification Controller"}>
      <Grid item xs={4}>
        <ImageInteractiveGroup magnifier={magnify} img={img}>
          <Hover
            top="23.3%"
            left="68%"
            width="25%"
            height="4%"
            title="Switch playing device"
            content="Press this will help user switch to another audio device"
          />
          <Hover
            top="30%"
            left="79.5%"
            width="12%"
            height="5%"
            title="Switch playing device"
            content="Press this will help user switch to another audio device"
          />
        </ImageInteractiveGroup>
      </Grid>
      <Grid item xs={8}></Grid>
    </Section>
  );
};
