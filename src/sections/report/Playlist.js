import Section from "../../Section";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Switch,
  Typography,
} from "@mui/material";
import TextContent from "../../components/TextContent";
import playlist_img from "../../images/playlist.png";
import move_img from "../../images/move.png";
import delete_start_img from "../../images/playlist_delete_start.png";
import delete_end_img from "../../images/playlist_delete_end.png";
import { useState } from "react";
import Hover from "../../components/Hover";
import ImageInteractiveGroup from "../../components/ImageInteractiveGroup";
import SearchIcon from "@mui/icons-material/Search";
import Paragraph from "../../components/Paragraph";
import InteractiveBox from "../../components/InteractiveBox";
import Magnify from "../../components/Magnify";
import RadioGroup from "../../components/RadioGroup";

export default () => {
  const [magnifier, setMagnifier] = useState(false);
  const status = ["Playlist", "Move", "Delete Start", "Delete End"];
  const [page, setPage] = useState(status[0]);

  const showInteractiveGroup = () => {
    switch (page) {
      case status[0]:
        return (
          <ImageInteractiveGroup img={playlist_img} magnifier={magnifier}>
            <Hover
              top="13.5%"
              left="2.5%"
              height="3.5%"
              width="7%"
              title={"Play Icon"}
              content={"Show which song is playing"}
            />
            <Hover
              top="29.5%"
              left="2.5%"
              height="3.5%"
              width="7%"
              title={"Drag Icon"}
              content={"Click and drag to sort"}
            />
          </ImageInteractiveGroup>
        );
      case status[1]:
        return (
          <ImageInteractiveGroup img={move_img} magnifier={magnifier}>
            <Hover
              top="13%"
              left="0%"
              height="12%"
              width="100%"
              title={"Moving Item"}
              content={
                "Elevated effect with shadow, just like moving an actual item"
              }
            />
            <Hover
              top="27.5%"
              left="0%"
              height="8%"
              width="100%"
              title={"Stayed Item"}
              content={
                "Little bit dimmed out, help user focus on the moving object"
              }
            />
          </ImageInteractiveGroup>
        );
      case status[2]:
        return (
          <ImageInteractiveGroup img={delete_start_img} magnifier={magnifier}>
            <Hover
              top="19.3%"
              left="83%"
              height="8%"
              width="16%"
              title={"Delete Hint"}
              content={
                "Swipe item to left will hint user this will delete the song in playlist"
              }
            />
          </ImageInteractiveGroup>
        );
      case status[3]:
        return (
          <ImageInteractiveGroup img={delete_end_img} magnifier={magnifier}>
            <Hover
              top="19.3%"
              left="56%"
              height="8%"
              width="43%"
              title={"Delete Warning"}
              content={
                "Swipe item to far left will warn the user this will delete the item"
              }
            />
          </ImageInteractiveGroup>
        );
    }
  };

  return (
    <>
      <Grid item xs={12} md={4}>
        <Box style={{ position: "relative" }}>
          {showInteractiveGroup()}
          <InteractiveBox>
            <Magnify value={magnifier} onChange={setMagnifier} />
            <br />
            <RadioGroup status={status} page={page} onChange={setPage} />
          </InteractiveBox>
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paragraph title="Playlist">
          <TextContent>
            <b>Consistency</b>: the design of the playlist is similar to an
            album list. Users should easily understand the features of a
            playlist that is close to the album list without telling.
          </TextContent>
          <TextContent>
            <b>Chunking</b>: the song cover, song name, artist name and commands
            are collected into an horizontal area, distinguishing other songs
            with white space. Users can easily tell which information is related
            together.
          </TextContent>
          <TextContent>
            <b>Visibility</b>: when users keep pressing the songs in the
            playlist, there is a floating shadow generated under the selected
            song; if users drag the selected song to the position of other
            songs, the selected song will be repositioned with animation. It
            tells users the song status has been changed by adding these
            elements.
          </TextContent>
          <TextContent>
            <b>Fitts’ Law</b>: The control panel with playing command icons are
            listed at the bottom of the device. This design reduces the distance
            from the user's thumb to the screen so the user needs less time to
            interact with the UI.
          </TextContent>
        </Paragraph>
      </Grid>
    </>
  );
};
