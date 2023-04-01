import { Grid } from "@mui/material";
import ImageInteractiveGroup from "../../components/ImageInteractiveGroup";
import img_login from "../../images/login_error.png";
import Hover from "../../components/Hover";
import Paragraph from "../../components/Paragraph";
import TextContent from "../../components/TextContent";
import { useState } from "react";
import InteractiveBox from "../../components/InteractiveBox";
import Magnify from "../../components/Magnify";

export default () => {
  const [magnifier, setMagnifier] = useState(false);
  return (
    <>
      <Grid item xs={12} md={4}>
        <ImageInteractiveGroup img={img_login} magnifier={magnifier}>
          <Hover
            width="26%"
            height="12%"
            top="27%"
            left="29%"
            title="Enlarge Text"
            content="Help users see the text clearly, reduce the gulf of execution"
          />
          <Hover
            width="40%"
            height="8%"
            top="75%"
            left="14%"
            title="Error Hint"
            content="Feedback help users know what went wrong"
          />
        </ImageInteractiveGroup>
        <InteractiveBox>
          <Magnify value={magnifier} onChange={setMagnifier} />
        </InteractiveBox>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paragraph title="Login Page">
          <TextContent>
            <b>Constraints</b>: Since MyPlayer requires connection of the server
            to play music, users’ actions are limited to typing server domain
            name, username, password, and action login. This reduces the
            confusion when users are not able to play music while the server is
            disconnected.
          </TextContent>
          <TextContent>
            <b>Consistency</b>: The design of the login page is similar to other
            famous login pages such as YouTube Music and Spotify which has a
            traditional, center aligned overlay login form. Users will have a
            similar experience as other apps which need little thinking to
            understand how the login page works.
          </TextContent>
          <TextContent>
            <b>Visibility</b>: When a user wants to edit the information typed
            in the input bar, a window pops up and zooms in the location the
            user finger is pressing to help the user locate the character. This
            design reduces the gulf of execution.
          </TextContent>{" "}
          <TextContent>
            <b>Feedback</b>: When users put their information incorrectly, an
            error message with highlighted color pops up under the incorrect
            information, telling users there might be potential correction
            required in this area.
          </TextContent>
        </Paragraph>
      </Grid>
    </>
  );
};
