import { Grid } from "@mui/material";
import Paragraph from "../../components/Paragraph";
import TextContent from "../../components/TextContent";
import { useState } from "react";
import ImageInteractiveGroup from "../../components/ImageInteractiveGroup";
import Hover from "../../components/Hover";
import img_0 from "../../images/album_large_cover.png";
import img_1 from "../../images/album_list.png";
import img_2 from "../../images/album_menu.png";
import img_3 from "../../images/album_downloading_toast.png";
import img_4 from "../../images/album_add_to_playlist.png";
import InteractiveBox from "../../components/InteractiveBox";
import Magnify from "../../components/Magnify";
import RadioGroup from "../../components/RadioGroup";

export default () => {
  const pages = [
    "Large Cover",
    "Scrolled",
    "Long Press Menu",
    "Press Download",
    "Press Add to Playlist",
  ];
  const [page, setPage] = useState(pages[4]);
  const [magnifier, setMagnifier] = useState(false);

  const ImgGroup = () => {
    switch (page) {
      case pages[0]:
        return (
          <ImageInteractiveGroup magnifier={magnifier} img={img_0}>
            <Hover
              top="10%"
              left="1%"
              width="96%"
              height="32%"
              title="Album Cover"
              content="Tell user album content in a efficient way."
            />
            <Hover
              top="44%"
              left="1%"
              width="96%"
              height="16%"
              title="Title and Information"
              content="Show title, artist, time and song count in a significant way."
            />
          </ImageInteractiveGroup>
        );
      case pages[1]:
        return (
          <ImageInteractiveGroup magnifier={magnifier} img={img_1}>
            <Hover
              top="8%"
              left="2%"
              width="95%"
              height="6%"
              title="Cover Hided After Scrolling"
              content="Provide more information on the album trucks."
            />
          </ImageInteractiveGroup>
        );
      case pages[2]:
        return (
          <ImageInteractiveGroup magnifier={magnifier} img={img_2}>
            <Hover
              top="33.5%"
              left="23%"
              width="33%"
              height="2%"
              title="Split Line"
              content="The split line divides menu into two different categories."
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
              top="85%"
              left="29%"
              width="40%"
              height="7%"
              title="Toast"
              content="Provide feedback to the user's operation."
            />
          </ImageInteractiveGroup>
        );
      case pages[4]:
        return (
          <ImageInteractiveGroup magnifier={magnifier} img={img_4}>
            <Hover
              top="85%"
              left="29%"
              width="40%"
              height="7%"
              title="Toast"
              content="Provide feedback to the user's operation."
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
        <Paragraph title="Album">
          <TextContent>
            <b>Progressive Disclosure</b>: Commands of each song are collected
            into a hidden panel which requires users long press the song to show
            the commands. This will reduce the information complexity where only
            requested information is displayed.
          </TextContent>
          <TextContent>
            <b>Chunk</b>: The function of this menu is to help the user to
            quickly perform actions on the songs, such as adding them to the
            list or downloading them directly. There are two ways to add to the
            list, one is to start playing immediately and the other is to add to
            the end of the list. Downloading is a third action different from
            these two ways, so the chunk principle is used to separate the two
            different options.
          </TextContent>
        </Paragraph>
      </Grid>
    </>
  );
};
