import Section from "../../Section";
import { Grid } from "@mui/material";
import img from "../../images/play_control.png";
import ImageInteractiveGroup from "../../components/ImageInteractiveGroup";
import Paragraph from "../../components/Paragraph";
import Hover from "../../components/Hover";

export default () => {
  return (
    <Section title="Player Controller">
      <Grid item xs={12}>
        <ImageInteractiveGroup img={img}>
          <Hover
            top="25%"
            left="78%"
            width="7%"
            height="45%"
            title="Time Indicator"
            content="Tell the user about current time"
          />
          <Hover
            top="50%"
            left="86%"
            width="12%"
            height="30%"
            title="Time Progress"
            content="Blue is Played, gray is loaded, white is not loaded"
          />
        </ImageInteractiveGroup>
      </Grid>
      <Grid item xs={12}>
        <Paragraph title="Visibility">
          The control bar is located at the bottom of the screen, making it
          easily accessible and noticeable to users. All essential controls,
          includes play and pause, are clearly visible, ensuring users can
          effortlessly identify and interact with them.
        </Paragraph>
        <Paragraph title="Feedback">
          The control bar provides immediate feedback, allowing users to
          understand the impact of their actions. For example, when the play
          button is tapped, it changes to a pause button, indicating that the
          music is now playing.
        </Paragraph>
      </Grid>
    </Section>
  );
};
