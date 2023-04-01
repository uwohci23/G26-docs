import Section from "../Section";
import { Grid } from "@mui/material";
import Paragraph from "../components/Paragraph";
import img from "../images/logo.png";
import TextContent from "../components/TextContent";

export default () => {
  return (
    <Section title={"Objective"}>
      <Grid item xs={12}>
        <TextContent>
          The objective of Simple Music is to offer an unparalleled usage
          experience to users by streamlining the app's interface, ensuring
          accessibility, and experiencing personalized features that service
          different individual users.
        </TextContent>
      </Grid>
    </Section>
  );
};
