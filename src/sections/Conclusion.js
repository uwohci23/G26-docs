import Section from "../Section";
import { Grid } from "@mui/material";
import Paragraph from "../components/Paragraph";
import img from "../images/logo.png";

export default () => {
  return (
    <Section title={"Conclusion"}>
      <Grid item xs={12}>
        <Paragraph>
          Simple Music is set to transform the music streaming domain by
          delivering an extremely user-friendly experience, emphasizing
          human-computer interaction concepts. Concentrating on effortless
          navigation, customized elements, and user accessibility, our goal is
          to catch users who enjoys our product and appreciates the distinct
          advantages of our application.
        </Paragraph>
      </Grid>
    </Section>
  );
};
