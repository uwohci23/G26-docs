import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Section from "./Section";
import Motivation from "./sections/Motivation";
import Playlist from "./sections/Playlist";
import Notification from "./sections/Notification";
import LongPressMenu from "./sections/LongPressMenu";
import MenuAndSettings from "./sections/MenuAndSettings";
import Playing from "./sections/Playing";
import PlayerController from "./sections/PlayerController";
import Design from "./sections/Design";
import { APP_NAME } from "./Consts";

function Page() {
  return (
    <Container fixed maxWidth="xl">
      <Grid container xs={12}>
        <Typography
          variant="h1"
          style={{
            fontSize: "5rem",
            margin: "6rem 0",
            paddingLeft: "0.5rem",
            borderLeft: "1rem black solid",
          }}
        >
          Group 26 - {APP_NAME}
        </Typography>
      </Grid>
      <Motivation />
      <Design />
      <Playlist />
      <Notification />
      <LongPressMenu />
      <MenuAndSettings />
      <Playing />
      <PlayerController />
      <Box style={{ height: "300px", paddingTop: "120px" }}>
        <Typography variant="h4">The End</Typography>
      </Box>
    </Container>
  );
}

export default Page;
