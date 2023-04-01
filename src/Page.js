import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Section from "./Section";
import Motivation from "./sections/presentation/Motivation";
import Playlist from "./sections/presentation/Playlist";
import Notification from "./sections/presentation/Notification";
import LongPressMenu from "./sections/presentation/LongPressMenu";
import MenuAndSettings from "./sections/presentation/MenuAndSettings";
import Playing from "./sections/presentation/Playing";
import PlayerController from "./sections/presentation/PlayerController";
import Design from "./sections/presentation/Design";
import { APP_NAME } from "./Consts";
import Introduction from "./sections/Introduction";
import Objective from "./sections/Objective";
import KeyFeatures from "./sections/KeyFeatures";
import DesignPrinciples from "./sections/DesignPrinciples";

function Page() {
  return (
    <Container fixed maxWidth="lg">
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
          <Typography variant="h2">Final Report</Typography>
        </Typography>
      </Grid>
      {/*<Motivation />*/}
      {/*<Design />*/}
      {/*<Playlist />*/}
      {/*<Notification />*/}
      {/*<LongPressMenu />*/}
      {/*<MenuAndSettings />*/}
      {/*<Playing />*/}
      {/*<PlayerController />*/}
      <Introduction />
      <Objective />
      <KeyFeatures />
      <DesignPrinciples />
      <Box style={{ height: "300px", paddingTop: "120px" }}>
        <Typography variant="h4">The End</Typography>
      </Box>
    </Container>
  );
}

export default Page;
