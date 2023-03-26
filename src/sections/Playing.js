import Section from "../Section";
import { Grid } from "@mui/material";
import ImageInteractiveGroup from "../components/ImageInteractiveGroup";
import img_1 from "../images/player.png";
import Paragraph from "../components/Paragraph";
import Hover from "../components/Hover";

export default () => {
  return (
    <Section title={"Player"}>
      <Grid item xs={12} md={4}>
        <ImageInteractiveGroup img={img_1}>
          <Hover
            width="95%"
            height="14%"
            top="80%"
            left="2%"
            title="Control Zone"
            content="This will allow user control the playing sequence and status"
          />
          <Hover
            width="95%"
            height="5%"
            top="75%"
            left="2%"
            title="Progress Bar"
            content="Progess bar can be dragged to seek the playing position"
          />
        </ImageInteractiveGroup>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paragraph title="Consistency">
          Playing page mimics the design of most of the media players that
          contains album cover, song title, artist, progress bar and command
          buttons. Users should be very familiar with the design and understand
          how to use them.
        </Paragraph>
        <Paragraph title="Constraints">
          The progress bar allows the user to play the song at a certain time.
          Since the song has a fixed length of time. Progress bar allows users
          to jump to a certain time but also limits user putting time that is
          out of the range.
        </Paragraph>
        <Paragraph title="Semiotic">
          The icons represent playlist, last song, play/pause, next song, loop
          separately. Users can easily tell the use of buttons by looking at the
          icons.
        </Paragraph>
      </Grid>
    </Section>
  );
};
