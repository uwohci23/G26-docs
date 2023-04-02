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
import Menu from "./report/Menu";
import Album from "./report/Album";
import Playlist from "./report/Playlist";
import Player from "./report/Player";
import PlayerController from "./report/PlayerController";

export default () => {
  return (
    <Section title={"Design Principles"}>
      <LoginPage />
      <Library />
      <Menu />
      <Album />
      <Playlist />
      <Player />
      <PlayerController />
    </Section>
  );
};
