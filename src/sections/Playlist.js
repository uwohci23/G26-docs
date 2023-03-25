import Section from "../Section";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Input,
  Tooltip,
  Typography,
} from "@mui/material";
import TextContent from "../components/TextContent";
import playlist_img from "../images/playlist.png";
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
} from "react-image-magnifiers";
import { useState } from "react";
import Hover from "../components/Hover";

export default () => {
  const [magnifier, setMagnifier] = useState(false);

  return (
    <Section title="Playlist">
      <Grid item xs={4}>
        <Box style={{ position: "relative" }}>
          <Box style={{ maxWidth: "100%" }}>
            {magnifier ? (
              <GlassMagnifier
                imageSrc={playlist_img}
                magnifierSize="40%"
                magnifierBackgroundColor="gray"
                overflow={true}
              />
            ) : (
              <Box style={{ position: "relative" }}>
                <img width="100%" src={playlist_img} />
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
              </Box>
            )}
          </Box>

          <Box
            style={{
              position: "sticky",
              bottom: "0",
              backgroundColor: "white",
              border: "2px gray solid",
              borderBottom: "0px gray solid",
              padding: "0.5rem",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox onChange={(e) => setMagnifier(e.target.checked)} />
              }
              label="Magnifier"
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={8}>
        <TextContent>
          In the original project, the playlist exists but is not visible or
          editable. This left the user to wait for a song to finish playing
          before automatically switching to the next song. In the new design we
          have added actionable playlists that allow users to not only add
          songs, but also delete and move them.
        </TextContent>
      </Grid>
    </Section>
  );
};
