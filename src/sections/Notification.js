import { useState } from "react";
import Section from "../Section";
import { Grid } from "@mui/material";
import ImageInteractiveGroup from "../components/ImageInteractiveGroup";
import img from "../images/notification.png";
import Hover from "../components/Hover";
import Paragraph from "../components/Paragraph";
import InteractiveBox from "../components/InteractiveBox";
import Magnify from "../components/Magnify";

export default () => {
  const [magnify, setMagnify] = useState(false);
  return (
    <Section title={"Notification Controller"}>
      <Grid item xs={12} md={4}>
        <ImageInteractiveGroup magnifier={magnify} img={img}>
          <Hover
            top="47%"
            left="68%"
            width="25%"
            height="7%"
            boxColor="lightgray"
            title="Switch playing device"
            content="Press this will help user switch to another audio device"
          />
          <Hover
            top="60%"
            left="79.5%"
            width="12%"
            height="11%"
            boxColor="lightgray"
            title="Play Button"
            content="A large play/pause button, follows Fitts’ law"
          />
          <Hover
            top="78%"
            left="15%"
            width="70%"
            height="5%"
            boxColor="lightgray"
            title="Progress bar"
            content="Wave part = already played, line part = going to play"
          />
        </ImageInteractiveGroup>
        <InteractiveBox>
          <Magnify
            value={magnify}
            onChange={(e) => {
              console.log(e.target.checked);
              setMagnify(e.target.checked);
            }}
          />
        </InteractiveBox>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paragraph>
          Notifications is a tool that can inform the user of the current
          playing status in other application states. By clicking on the
          notification, users are able to quickly access the application.
        </Paragraph>
        <Paragraph title={"Background"}>
          The background of the notification is the album cover, allowing the
          user to know what song is playing in a short time.
        </Paragraph>
        <Paragraph title={"Play/Pause Button"}>
          The huge play and pause buttons allow the user to make precise
          actions.
        </Paragraph>
        <Paragraph title={"Progress bar"}>
          The different styles before and after the progress bar let the user
          know the current playing ratio.
        </Paragraph>
      </Grid>
    </Section>
  );
};
