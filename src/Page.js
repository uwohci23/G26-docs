import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Section from "./Section";

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
          ここにニュビタイトルがあるはずです。
        </Typography>
      </Grid>
      <Section title={"Title"}></Section>
    </Container>
  );
}

export default Page;
