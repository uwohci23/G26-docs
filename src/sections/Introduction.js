import Section from "../Section";
import { Grid } from "@mui/material";
import Paragraph from "../components/Paragraph";
import img from "../images/logo.png";
import TextContent from "../components/TextContent";

export default () => {
  return (
    <Section title={"Introduction"}>
      <Grid item xs={12} md={8}>
        <TextContent>
          Simple Music is a groundbreaking music application designed with a
          strong focus on human-computer interaction principles to provide an
          intuitive, user-centric experience for the people who love music. Our
          motivation is to create a personalized music app that puts the user at
          the center of the experience and satisfy what they need.
        </TextContent>
      </Grid>
      <Grid xs={4}>
        <img src={img} style={{ maxWidth: "100%" }} />
      </Grid>
    </Section>
  );
};
