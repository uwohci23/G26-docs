import { Grid } from "@mui/material";
import ImageInteractiveGroup from "../../components/ImageInteractiveGroup";
import img_0 from "../../images/menu.png";
import img_1 from "../../images/settings.png";
import img_2 from "../../images/setting_storage.png";
import img_3 from "../../images/settings_logout.png";
import Hover from "../../components/Hover";
import Paragraph from "../../components/Paragraph";
import TextContent from "../../components/TextContent";
import { useState } from "react";
import InteractiveBox from "../../components/InteractiveBox";
import Magnify from "../../components/Magnify";
import RadioGroup from "../../components/RadioGroup";

export default () => {
  const pages = ["Menu", "Settings", "Storage", "Logout"];
  const [page, setPage] = useState(pages[3]);
  const [magnifier, setMagnifier] = useState(false);
  const ImgGroup = () => {
    switch (page) {
      case pages[0]:
        return (
          <ImageInteractiveGroup magnifier={magnifier} img={img_0}>
            <Hover
              top="15.5%"
              left="5%"
              width="7%"
              height="3%"
              title="Icons"
              content="Using semiotic principle, user can get known the meaning of item quickly."
            />
          </ImageInteractiveGroup>
        );
      case pages[1]:
        return (
          <ImageInteractiveGroup magnifier={magnifier} img={img_1}>
            <Hover
              top="28%"
              left="2%"
              width="20%"
              height="4%"
              title="Album Item"
              content="This is a single album, tell user its cover, title and artist clearly."
            />
            <Hover
              top="35%"
              left="2%"
              width="20%"
              height="4%"
              title="Album Item"
              content="This is a single album, tell user its cover, title and artist clearly."
            />
          </ImageInteractiveGroup>
        );
      case pages[2]:
        return (
          <ImageInteractiveGroup magnifier={magnifier} img={img_2}>
            <Hover
              top="35%"
              left="25%"
              width="48%"
              height="5%"
              title="Dialog in Focus Mode"
              content="A focused dialog tells user what to concern."
            />
            <Hover
              top="47%"
              left="17%"
              width="50%"
              height="3%"
              title="Scroll Bar"
              content="The range of scroll bar is limited from 0 to 8GB, prevent illegal values."
            />
            <Hover
              top="47%"
              left="69%"
              width="12%"
              height="3%"
              title="Number"
              content="The number will tell user clearly what current value is."
            />
          </ImageInteractiveGroup>
        );
      case pages[3]:
        return (
          <ImageInteractiveGroup magnifier={magnifier} img={img_3}>
            <Hover
              top="37%"
              left="10%"
              width="80%"
              height="15%"
              title="Confirmation"
              content="Double check what the user wants to do."
            />
            <Hover
              top="53%"
              left="55%"
              width="23%"
              height="6%"
              title="Confirm Button"
              content="Using red color, warns the user this is a dangerous option."
            />
          </ImageInteractiveGroup>
        );
    }
  };

  return (
    <>
      <Grid item xs={12} md={4}>
        <ImgGroup />
        <InteractiveBox>
          <Magnify onChange={setMagnifier} value={magnifier} />
          <br />
          <RadioGroup status={pages} page={page} onChange={setPage} />
        </InteractiveBox>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paragraph title="Menu & Settings">
          <TextContent>
            <b>Semiotic</b>: These two icons represent playlist and settings.
            Users are able to understand what the options under the menu are
            since they are told what the icons represent from their environment
            and applications.
          </TextContent>
          <TextContent>
            <b>Mapping?</b>: All features in the menu are grouped into two
            categories by their behaviors. Users are able to select their
            actions by clicking on the category that the action belongs to.
          </TextContent>
          <TextContent>
            <b>Visibility</b>: Users are able to see the status of each option
            in settings by their colors. Black is functioning, red is dangerous.
          </TextContent>{" "}
          <TextContent>
            <b>Constraints</b>: Limit the user to set the cache/storage size
            from 0 to 8 GB. Since the size of the cache and storage is limited
            in device, setting the maximum volume could prevent users from
            making errors caused by memory overflow.
          </TextContent>{" "}
          <TextContent>
            <b>Confirmation</b>: a window pops up when users click on Logout in
            the settings page. This will prevent users from making irrevocable
            mistakes.
          </TextContent>
        </Paragraph>
      </Grid>
    </>
  );
};
