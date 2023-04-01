import Section from "../../Section";
import img from "../../images/album_detail_long_press_menu.png";
import { Grid } from "@mui/material";
import ImageInteractiveGroup from "../../components/ImageInteractiveGroup";
import Hover from "../../components/Hover";
import { useState } from "react";
import InteractiveBox from "../../components/InteractiveBox";
import Magnify from "../../components/Magnify";
import Paragraph from "../../components/Paragraph";

export default () => {
  const [magnify, setMagnify] = useState(false);
  return (
    <Section title={"Album Detail Long Press Menu"}>
      <Grid item xs={12} md={4}>
        <ImageInteractiveGroup img={img} magnifier={magnify}>
          <Hover
            width="34%"
            height="5%"
            left="48%"
            top="57%"
            title="Divide Line"
            content="Split the menu to two chunks, so user can get the idea of each part quickly"
          />
        </ImageInteractiveGroup>
        <InteractiveBox>
          <Magnify
            value={magnify}
            onChange={(e) => setMagnify(e.target.checked)}
          />
        </InteractiveBox>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paragraph>
          The function of this menu is to help the user to quickly perform
          actions on the songs, such as adding them to the list or downloading
          them directly. There are two ways to add to the list, one is to start
          playing immediately and the other is to add to the end of the list.
          Downloading is a third action different from these two ways, so the
          chunk principle is used to separate the two different options.
        </Paragraph>
      </Grid>
    </Section>
  );
};
