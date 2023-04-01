import Section from "../Section";
import { Grid } from "@mui/material";
import Paragraph from "../components/Paragraph";
import img from "../images/logo.png";
import TextContent from "../components/TextContent";

export default () => {
  const Li = ({ children }) => (
    <li style={{ marginBottom: "2rem" }}>{children}</li>
  );
  return (
    <Section title={"Key Features"}>
      <Grid item xs={12}>
        <TextContent>
          <ol>
            <Li>
              Dynamic Library: Simple Music library interface offers multiple
              representation styles and viewing modes, allowing users to
              customize their browsing experience based on personal preferences.
            </Li>
            <Li>
              Comprehensive Album and Playlist Management: Simple Music album
              and playlist interfaces enable users to easily search, manage, and
              interact with their music collection through intuitive designs and
              familiar interactions.
            </Li>
            <Li>
              Seamless Navigation: Simple Music menu and control bar designs
              provide easy access to essential functions, ensuring users can
              effortlessly identify and interact with various features, such as
              play, pause, skip, and volume controls.
            </Li>
            <Li>
              Interactive Music Playing: The playing interface imitates the
              design of popular media players, allowing users to intuitively
              control song playback and access essential features through
              recognizable icons and command buttons.
            </Li>
            <Li>
              Efficient Login and Settings: Simple Music simplifies the login
              process by incorporating constraints and consistency, while
              providing a clear and user-friendly settings interface that
              incorporates visibility, confirmation, and constraint features.
            </Li>
          </ol>
        </TextContent>
      </Grid>
    </Section>
  );
};
