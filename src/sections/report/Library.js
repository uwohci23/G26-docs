import { Grid } from "@mui/material";
import Paragraph from "../../components/Paragraph";
import TextContent from "../../components/TextContent";
import img_0 from "../../images/library_loading.png";
import img_1 from "../../images/library_list.png";
import img_2 from "../../images/library_grid.png";
import img_3 from "../../images/library_list_scrolled.png";
import { useState } from "react";
import ImageInteractiveGroup from "../../components/ImageInteractiveGroup";
import InteractiveBox from "../../components/InteractiveBox";
import Magnify from "../../components/Magnify";
import RadioGroup from "../../components/RadioGroup";
import Hover from "../../components/Hover";

export default () => {
  const pages = ["Loading", "List", "Grid", "Scrolled"];
  const [page, setPage] = useState(pages[3]);
  const [magnifier, setMagnifier] = useState(false);

  const ImgGroup = () => {
    switch (page) {
      case pages[0]:
        return (
          <ImageInteractiveGroup magnifier={magnifier} img={img_0}>
            <Hover
              top="15.5%"
              left="43%"
              width="12%"
              height="6%"
              title="Loading Progress"
              content="This rotating symbol tells user the page is loading."
            />
          </ImageInteractiveGroup>
        );
      case pages[1]:
        return (
          <ImageInteractiveGroup magnifier={magnifier} img={img_1}>
            <Hover
              top="39%"
              left="2%"
              width="96%"
              height="11%"
              title="Album Item"
              content="This is a single album, tell user its cover, title and artist clearly."
            />
            <Hover
              top="39%"
              left="2%"
              width="96%"
              height="11%"
              title="Album Item"
              content="This is a single album, tell user its cover, title and artist clearly."
            />
            <Hover
              top="6%"
              left="89%"
              width="6%"
              height="3%"
              title="Display Toggle Icon"
              content="Click this button will switch to grid display mode."
            />
          </ImageInteractiveGroup>
        );
      case pages[2]:
        return (
          <ImageInteractiveGroup magnifier={magnifier} img={img_2}>
            <Hover
              top="16%"
              left="0%"
              width="48%"
              height="33%"
              title="Grid Album Item"
              content="This is a single album, tell user its cover, title and artist clearly. The Album is larger so user can get know the content quickly."
            />
            <Hover
              top="6%"
              left="89%"
              width="6%"
              height="3%"
              title="Display Toggle Icon"
              content="Click this button will switch to list display mode."
            />
          </ImageInteractiveGroup>
        );
      case pages[3]:
        return (
          <ImageInteractiveGroup magnifier={magnifier} img={img_3}>
            <Hover
              top="4%"
              left="0%"
              width="98%"
              height="7%"
              title="Title After Scrolled"
              content="More space for the list will be given after scrolling."
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
        <Paragraph title="Library">
          <TextContent>
            <b>Feedback</b>: When users successfully login in and data is
            loading from the server, a loading animation appears in the center
            of the screen. It provides better user experience to users by
            telling people that the request from them is received and being
            processed.
          </TextContent>
          <TextContent>
            <b>Visibility</b>: Title of the library page moves to top of the
            display window when users scroll down and view more albums. Since
            users are focusing on searching for an album instead of the title of
            the library, the title should take less screen to avoid attracting
            attention from users.
          </TextContent>
          <TextContent>
            <b>Representation</b>: Two types of representation are provided for
            different users’ needs. View mode album list is album title focused,
            and view album grid mode is album cover focused. Users are able to
            select different modes by their preference.
          </TextContent>
          <TextContent>
            <b>Chunking</b>: Album cover, album title and album artist is
            collected into a grid. This keeps the related things close together
            and aligned.
          </TextContent>
        </Paragraph>
      </Grid>
    </>
  );
};
