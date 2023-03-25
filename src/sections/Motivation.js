import Section from "../Section";
import { Grid, Typography } from "@mui/material";
import "./style.css";
import Paragraph from "../components/Paragraph";
import { APP_NAME } from "../Consts";

export default () => {
  return (
    <div className={"motivation"}>
      <Section title={"Motivations for Music App – " + APP_NAME}>
        <Grid item xs={8}>
          <Paragraph>
            At {APP_NAME}, our primary motivation is to create a personalized
            music app that puts the user at the center of the experience. We
            believe in human-centered design and we prioritize the needs and
            capabilities of the users to ensure that our app can satisfy their
            preferences and desires. To provide an enhanced user experience, EZ
            Music focuses on usability, efficiency, and enjoyment. Also, we have
            designed our app to be user-friendly, easy to learn, and
            understandable, enabling users to quickly navigate and access their
            favorite tunes. By reducing the time and effort required to complete
            tasks and optimizing the interaction between humans and the app, we
            aim to offer an efficient, enjoyable, and satisfying experience for
            all users.
          </Paragraph>
        </Grid>
        <Grid xs={8}></Grid>
      </Section>
    </div>
  );
};
