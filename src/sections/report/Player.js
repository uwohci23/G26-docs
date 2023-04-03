import { Grid } from "@mui/material";
import ImageInteractiveGroup from "../../components/ImageInteractiveGroup";
import img_1 from "../../images/player.png";
import Hover from "../../components/Hover";
import Paragraph from "../../components/Paragraph";
import TextContent from "../../components/TextContent";
import { useState } from "react";
import InteractiveBox from "../../components/InteractiveBox";
import Magnify from "../../components/Magnify";
import RadioGroup from "../../components/RadioGroup";

export default () => {
  const [magnifier, setMagnifier] = useState(false);
  return (
    <>
      <Grid item xs={12} md={4}>
        <ImageInteractiveGroup img={img_1} magnifier={magnifier}>
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
        <InteractiveBox>
          <Magnify onChange={setMagnifier} value={magnifier} />
        </InteractiveBox>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paragraph title="Player">
          <TextContent>
            <b>Consistency</b>: Playing page mimics the design of most of the
            media players that contains album cover, song title, artist,
            progress bar and command buttons. Users should be very familiar with
            the design and understand how to use them.
          </TextContent>
          <TextContent>
            <b>Constraints</b>: The progress bar allows the user to play the
            song at a certain time. Since the song has a fixed length of time.
            Progress bar allows users to jump to a certain time but also limits
            user putting time that is out of the range.
          </TextContent>
          <TextContent>
            <b>Semiotic</b>: The icons represent playlist, last song,
            play/pause, next song, loop separately. Users can easily tell the
            use of buttons by looking at the icons.
          </TextContent>
          <TextContent>
            <b>Affordance</b>: Affordance is what lets the user know what to do
            with it the moment they see it. We use a progress bar here because a
            progress bar appears to the user as an element that can be
            manipulated. We use the progress bar to inform the user that the
            element can be manipulated by dragging it.
          </TextContent>
          <TextContent>
            <b>Mapping</b>: In the player screen, the previous song is on the
            left and the next song is on the right. The progress bar is before
            the current time on the left and after on the right. The principle
            of Mapping is used
          </TextContent>
          <TextContent>
            <b>Metaphor</b>: The whole interface is designed to mimic the
            traditional player, allowing users to transfer their previous
            experience and quickly understand how to use it.
          </TextContent>
        </Paragraph>
      </Grid>
    </>
  );
};
