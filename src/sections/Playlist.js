import Section from "../Section";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Switch,
  Typography,
} from "@mui/material";
import TextContent from "../components/TextContent";
import playlist_img from "../images/playlist.png";
import move_img from "../images/move.png";
import delete_start_img from "../images/playlist_delete_start.png";
import delete_end_img from "../images/playlist_delete_end.png";
import { useState } from "react";
import Hover from "../components/Hover";
import ImageInteractiveGroup from "../components/ImageInteractiveGroup";
import SearchIcon from "@mui/icons-material/Search";
import Paragraph from "../components/Paragraph";
import InteractiveBox from "../components/InteractiveBox";
import Magnify from "../components/Magnify";

export default () => {
  const [magnifier, setMagnifier] = useState(false);
  const status = ["Playlist", "Move", "Delete Start", "Delete End"];
  const [page, setPage] = useState(status[3]);

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
    <Section title="Playlist">
      <Grid item xs={12} md={4}>
        <Box style={{ position: "relative" }}>
          {showInteractiveGroup()}
          <InteractiveBox>
            <Magnify
              value={magnifier}
              onChange={(e) => setMagnifier(e.target.checked)}
            />
            <br />
            {status.map((s) => (
              <FormControlLabel
                key={s}
                control={
                  <input
                    type={"radio"}
                    checked={page === s}
                    onChange={() => setPage(s)}
                  />
                }
                label={s}
              />
            ))}
          </InteractiveBox>
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paragraph>
          In the original project, the playlist exists but is not visible or
          editable. This left the user to wait for a song to finish playing
          before automatically switching to the next song. In the new design we
          have added actionable playlists that allow users to not only add
          songs, but also delete and move them.
        </Paragraph>
        <Paragraph title={"Delete"}>
          The delete function will be triggered when the user swipes the song to
          the left. It will first reveal a gray background with a trash can
          icon, prompting the user that this feature is Delete. If the user lets
          go at this point, the delete operation will be cancelled. This design
          is to prevent accidental touch. Swipe more to the left and the
          background will turn red, warning the user that the delete action will
          be triggered. At this point, the delete operation can be offset by
          swiping to the right to return to the gray state. If the user directly
          releases his hand, the song will automatically continue to move to the
          left, prompting the user that the deletion is complete.
        </Paragraph>
        <Paragraph title={"Move"}>
          The song list movement function is achieved by long pressing the
          button on the left side. The handle icon on the left side indicates to
          the user that this is an option that can be manipulated. By long
          pressing it will go to the next state. In the move state, the option
          being moved will appear to have a boost effect, i.e. a shadow will
          appear around it. The target will be empty in the list as soon as it
          is moved to the specified position, prompting the user that the target
          will be inserted here.
        </Paragraph>
      </Grid>
    </Section>
  );
};
