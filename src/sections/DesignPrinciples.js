import Section from "../Section";
import { Grid } from "@mui/material";
import Paragraph from "../components/Paragraph";
import img from "../images/logo.png";
import TextContent from "../components/TextContent";
import ImageInteractiveGroup from "../components/ImageInteractiveGroup";
import img_1 from "../images/player.png";
import img_login from "../images/login_error.png";
import Hover from "../components/Hover";
import { useState } from "react";
import LoginPage from "./report/LoginPage";
import Library from "./report/Library";

export default () => {
  const [magnify, setMagnify] = useState(false);

  return (
    <Section title={"Design Principles Analysis"}>
      <LoginPage />
      <Library />

      <Grid item xs={12} md={4}></Grid>
      <Grid item xs={12} md={8}>
        <Paragraph title="Menu & Settings">
          <TextContent>
            <b>Semiotic</b>: These two icons represent playlist and settings.
            Users are able to understand what the options under the menu are
            since they are told what the icons represent from their environment
            and applications.
          </TextContent>
          <TextContent>
            <b>Mapping</b>: All features in the menu are grouped into two
            categories by their behaviors. Users are able to select their
            actions by clicking on the category that the action belongs to.
          </TextContent>
          <TextContent>
            <b>Visibility</b>: Users are able to see the status of each option
            in settings by their colors. Black is functioning, gray is not
            available, red is dangerous.
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

      <Grid item xs={12} md={4}></Grid>
      <Grid item xs={12} md={8}>
        <Paragraph title="Album">
          <TextContent>
            <b>Progressive Disclosure</b>: Commands of each song are collected
            into a hidden panel which requires users long press the song to show
            the commands. This will reduce the information complexity where only
            requested information is displayed.
          </TextContent>
          <TextContent>
            <b>?</b>: The function of this menu is to help the user to quickly
            perform actions on the songs, such as adding them to the list or
            downloading them directly. There are two ways to add to the list,
            one is to start playing immediately and the other is to add to the
            end of the list. Downloading is a third action different from these
            two ways, so the chunk principle is used to separate the two
            different options.
          </TextContent>
        </Paragraph>
      </Grid>

      <Grid item xs={12} md={4}></Grid>
      <Grid item xs={12} md={8}>
        <Paragraph title="Playlist">
          <TextContent>
            <b>Consistency</b>: the design of the playlist is similar to an
            album list. Users should easily understand the features of a
            playlist that is close to the album list without telling.
          </TextContent>
          <TextContent>
            <b>Chunking</b>: the song cover, song name, artist name and commands
            are collected into an horizontal area, distinguishing other songs
            with white space. Users can easily tell which information is related
            together.
          </TextContent>{" "}
          <TextContent>
            <b>Visibility</b>: when users keep pressing the songs in the
            playlist, there is a floating shadow generated under the selected
            song; if users drag the selected song to the position of other
            songs, the selected song will be repositioned with animation. It
            tells users the song status has been changed by adding these
            elements.
          </TextContent>{" "}
          <TextContent>
            <b>Fitts’ Law</b>: The control panel with playing command icons are
            listed at the bottom of the device. This design reduces the distance
            from the user's thumb to the screen so the user needs less time to
            interact with the UI.
          </TextContent>
        </Paragraph>
      </Grid>
      <Grid item xs={12} md={4}></Grid>
      <Grid item xs={12} md={8}>
        <Paragraph title="Playlist">
          <TextContent>
            <b>Consistency</b>: the design of the playlist is similar to an
            album list. Users should easily understand the features of a
            playlist that is close to the album list without telling.
          </TextContent>
          <TextContent>
            <b>Chunking</b>: the song cover, song name, artist name and commands
            are collected into an horizontal area, distinguishing other songs
            with white space. Users can easily tell which information is related
            together.
          </TextContent>{" "}
          <TextContent>
            <b>Visibility</b>: when users keep pressing the songs in the
            playlist, there is a floating shadow generated under the selected
            song; if users drag the selected song to the position of other
            songs, the selected song will be repositioned with animation. It
            tells users the song status has been changed by adding these
            elements.
          </TextContent>{" "}
          <TextContent>
            <b>Fitts’ Law</b>: The control panel with playing command icons are
            listed at the bottom of the device. This design reduces the distance
            from the user's thumb to the screen so the user needs less time to
            interact with the UI.
          </TextContent>
        </Paragraph>
      </Grid>
      <Grid item xs={12} md={4}>
        <ImageInteractiveGroup img={img_1}>
          <Hover
            width="95%"
            height="14%"
            top="80%"
            left="2%"
            title="Control Zone"
            content="This will allow user control the playing sequence and status"
          />
          <Hover
            width="95%"
            height="5%"
            top="75%"
            left="2%"
            title="Progress Bar"
            content="Progess bar can be dragged to seek the playing position"
          />
        </ImageInteractiveGroup>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paragraph title="Player">
          <TextContent>
            <b>Consistency</b>: Playing page mimics the design of most of the
            media players that contains album cover, song title, artist,
            progress bar and command buttons. Users should be very familiar with
            the design and understand how to use them.
          </TextContent>{" "}
          <TextContent>
            <b>Constraints</b>: The progress bar allows the user to play the
            song at a certain time. Since the song has a fixed length of time.
            Progress bar allows users to jump to a certain time but also limits
            user putting time that is out of the range.
          </TextContent>
          <TextContent>
            <b>Semiotic</b>: The icons represent playlist, last song,
            play/pause, next song, loop separately. Users can easily tell the
            use of buttons by looking at the icons.
          </TextContent>
        </Paragraph>
      </Grid>

      <Grid item xs={12} md={4}>
        <ImageInteractiveGroup img={img}>
          <Hover
            top="25%"
            left="78%"
            width="7%"
            height="45%"
            title="Time Indicator"
            content="Tell the user about current time"
          />
          <Hover
            top="50%"
            left="86%"
            width="12%"
            height="30%"
            title="Time Progress"
            content="Blue is Played, gray is loaded, white is not loaded"
          />
        </ImageInteractiveGroup>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paragraph title="Playing Control">
          <TextContent>
            <b>Visibility</b>: The control bar is located at the bottom of the
            screen, making it easily accessible and noticeable to users. All
            essential controls, includes play and pause, are clearly visible,
            ensuring users can effortlessly identify and interact with them.
          </TextContent>{" "}
          <TextContent>
            <b>Feedback</b>: The control bar provides immediate feedback,
            allowing users to understand the impact of their actions. For
            example, when the play button is tapped, it changes to a pause
            button, indicating that the music is now playing.
          </TextContent>
        </Paragraph>
      </Grid>
    </Section>
  );
};
