import { Box, Container, Grid, Typography } from "@mui/material";
import { APP_NAME } from "./Consts";
import Introduction from "./sections/Introduction";
import DesignPrinciples from "./sections/DesignPrinciples";
import Evaluation from "./sections/Evaluation";
import Recommendations from "./sections/Recommendations";
import Category from "./components/Category";
import React from "react";
import NavMap from "./sections/report/NavMap";
import ScriptNav from "./sections/ScriptNav";

function Page() {
  return (
    <Container fixed maxWidth="lg">
      <Grid container xs={12}>
        <Category
          links={[
            "Summary",
            "Design",
            "Script",
            "Navigational Map",
            "Design Principles",
            "Evaluation",
            "Recommendations",
          ]}
        />
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
      <Introduction />
      {/*<Design />*/}
      <NavMap />
      <ScriptNav />
      <DesignPrinciples />
      <Evaluation />
      <Recommendations />
      <Box style={{ height: "300px", paddingTop: "120px" }}>
        <Typography variant="h4">The End</Typography>
      </Box>
    </Container>
  );
}

export default Page;
