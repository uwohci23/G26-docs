import Section from "../../Section";
import { Box, Grid } from "@mui/material";
import ImageInteractiveGroup from "../../components/ImageInteractiveGroup";
import img_1 from "../../images/menu_1.png";
import img_2 from "../../images/menu_2.png";
import img_3 from "../../images/menu_3.png";
import img_4 from "../../images/menu_4.png";
import Paragraph from "../../components/Paragraph";
import Hover from "../../components/Hover";

export default () => {
  return (
    <Section title="Menu & Settings">
      <Grid item xs={12} md={4}>
        <ImageInteractiveGroup img={img_1}>
          <Hover
            width="10%"
            height="10%"
            left="4%"
            top="38%"
            title="Icons"
            content="Semiotic: representation of playlist and settings. Users are able to
          understand what the options under the menu.
          "
          />
        </ImageInteractiveGroup>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paragraph title="Menu">
          Semiotic: representation of playlist and settings. Users are able to
          understand what the options under the menu.
          <Box style={{ marginTop: "5px" }}>- Symbolic relation</Box>
        </Paragraph>
      </Grid>
      <Grid item xs={12} md={4}>
        <ImageInteractiveGroup img={img_2}></ImageInteractiveGroup>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paragraph title="Settings">
          Visibility: clearly tell the status of each option in the list.
        </Paragraph>
      </Grid>
      <Grid item xs={12} md={4}>
        <ImageInteractiveGroup img={img_3}>
          <Hover
            width="80%"
            height="10%"
            left="8%"
            top="38%"
            title="Progress bar"
            content="Limit the user to set the cache/storage size from 0 to 8 GB."
          />
        </ImageInteractiveGroup>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paragraph title="Storage Settings">
          Constraints: Limit the user to set the cache/storage size from 0 to 8
          GB. Since the size of the cache and storage is limited in device,
          setting the maximum volume could prevent users from making errors
          caused by memory overflow.
        </Paragraph>
      </Grid>
      <Grid item xs={12} md={4}>
        <ImageInteractiveGroup img={img_4}>
          <Hover
            width="31%"
            height="18%"
            left="55%"
            top="60%"
            title="Logout"
            content="Red button warn the user of dangerous operations.
          "
          />
        </ImageInteractiveGroup>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paragraph title="Logout">
          Confirmation: window pops up when users click on Logout in the
          settings page. This will prevent users from making irrevocable
          mistakes.
        </Paragraph>
      </Grid>
    </Section>
  );
};
