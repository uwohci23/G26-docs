import Section from "../Section";
import { Grid } from "@mui/material";
import Paragraph from "../components/Paragraph";
import img from "../images/logo.png";
import TextContent from "../components/TextContent";

const Li = ({ children }) => (
  <li style={{ marginBottom: "2rem" }}>{children}</li>
);
export default () => {
  return (
    <Section title={"Summary"}>
      <Grid item xs={12}>
        <Paragraph title="Introduction">
          <TextContent>
            Simple Music is a groundbreaking music application designed with a
            strong focus on human-computer interaction principles to provide an
            intuitive, user-centric experience for the people who love music.
            Our motivation is to create a personalized music app that puts the
            user at the center of the experience and satisfy what they need.
          </TextContent>
        </Paragraph>
        <Paragraph title="Objective">
          <TextContent>
            The objective of Simple Music is to offer an unparalleled usage
            experience to users by streamlining the app's interface, ensuring
            accessibility, and experiencing personalized features that service
            different individual users.
          </TextContent>
        </Paragraph>
        <Paragraph title="Key Features">
          <TextContent>
            <ol>
              <Li>
                Dynamic Library: Simple Music library interface offers multiple
                representation styles and viewing modes, allowing users to
                customize their browsing experience based on personal
                preferences.
              </Li>
              <Li>
                Comprehensive Album and Playlist Management: Simple Music album
                and playlist interfaces enable users to easily search, manage,
                and interact with their music collection through intuitive
                designs and familiar interactions.
              </Li>
              <Li>
                Seamless Navigation: Simple Music menu and control bar designs
                provide easy access to essential functions, ensuring users can
                effortlessly identify and interact with various features, such
                as play, pause, skip, and volume controls.
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
        </Paragraph>
        <Paragraph title="Repo Links and Infomation">
          <TextContent>
            <div>
              Code:
              <a
                style={{ marginLeft: "1rem" }}
                href="https://github.com/uwohci23/G26-code"
              >
                https://github.com/uwohci23/G26-code
              </a>
            </div>
            <div>
              Application:
              <a
                style={{ marginLeft: "1rem" }}
                href="https://github.com/uwohci23/G26-code/releases/download/apk/app-debug.apk"
              >
                https://github.com/uwohci23/G26-code/releases/download/apk/app-debug.apk
              </a>
            </div>
            <div>
              Test Account:{" "}
              <span style={{ marginLeft: "1rem" }}>
                Private. Please see submission info on OWL
              </span>
            </div>
          </TextContent>
        </Paragraph>
      </Grid>
    </Section>
  );
};
