import { Grid } from "@mui/material";
import Paragraph from "../components/Paragraph";
import TextContent from "../components/TextContent";
import Section from "../Section";
import Li from "../components/Li";
import ImageInteractiveGroup from "../components/ImageInteractiveGroup";
import img_login from "../images/design/login.png";
import img_library from "../images/design/library.png";
import img_library_scrolled from "../images/design/library_scrolled.png";
import img_library_grid from "../images/design/library_grid_scrolled.png";
import img_playing_status from "../images/design/playing_status.png";
import img_album_detail from "../images/design/album_detail.png";
import img_album_detail_scrolled from "../images/design/album_detail_scrolled.png";
import img_album_detail_long_pressed from "../images/design/album_detail_long_pressed.png";
import img_menu from "../images/design/drawer.png";
import img_playlist from "../images/design/playlist.png";
import img_playlist_move from "../images/design/playlist_moving.png";
import img_playlist_remove_a from "../images/design/list_delete_a.png";
import img_playlist_remove_b from "../images/design/list_delete_b.png";
import img_playing from "../images/design/playing.png";
import img_settings from "../images/design/settings.png";
import img_logout from "../images/design/logout.png";
import img_notification from "../images/design/notification.png";
import img_lockscreen from "../images/design/lockscreen.png";

export default () => {
  return (
    <Section title="Script">
      <Grid item xs={12} md={4}>
        <Grid item>
          <ImageInteractiveGroup magnifier={true} img={img_login} />
        </Grid>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid>
          <Paragraph title="Login page">
            <TextContent>
              <ol>
                <Li>
                  Input the server address. The user can input the information
                  of server to connect.
                </Li>
                <Li>
                  Enter login credentials. The user enters their username and
                  password into the appropriate fields of the login form. The
                  user name may be an email address or a unique user name
                  created by the user.
                </Li>
                <Li>
                  Grant access. If the user's login credentials are correct, the
                  Music application grants them access to their account.
                </Li>
                <Li>
                  Error handling. If the user's login credentials are incorrect,
                  the Music application needs to notify the user a reason.
                </Li>
              </ol>
            </TextContent>
          </Paragraph>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid item>
          <ImageInteractiveGroup magnifier={true} img={img_library} />
        </Grid>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid>
          <Paragraph title="Library">
            <TextContent>
              <ol>
                <Li>
                  Once users log in to the music app, they will be directed to
                  the library page. The library page displays all albums
                  available on the app
                </Li>
                <Li>
                  Each album is represented by its cover art, title, and artist
                  name. Users can tap on an album to enter a “detail page” for
                  viewing more details, include the list of songs included in
                  the album and their duration.
                </Li>
              </ol>
            </TextContent>
          </Paragraph>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid item>
          <ImageInteractiveGroup magnifier={true} img={img_library_scrolled} />
        </Grid>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid>
          <Paragraph>
            <TextContent>
              Users can browse through the albums by scrolling up and down the
              page.
            </TextContent>
            <TextContent>
              When user scroll down the list, title “Library” will shrink to the
              title bar, hence the area album list displayed will be larger.
            </TextContent>
          </Paragraph>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid item>
          <ImageInteractiveGroup magnifier={true} img={img_library_grid} />
        </Grid>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid>
          <Paragraph>
            <TextContent>
              Users could tap the top right icon to toggle between list view and
              grid view. In grid view, there will be larger covers images. More
              area will be used than in list view, so more album can be shown.
            </TextContent>
          </Paragraph>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid item>
          <ImageInteractiveGroup magnifier={true} img={img_playing_status} />
        </Grid>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid>
          <Paragraph title="Playing Status">
            <TextContent>
              Playing status is a small bar at the bottom of some pages of app
              when playing music. User can play or pause the music easily via
              this bar. Also, when click the bar, user will enter playing
              detail. On the bar, current playing time, progress, album cover,
              title and artist name will be displayed.
            </TextContent>
          </Paragraph>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid item>
          <ImageInteractiveGroup magnifier={true} img={img_album_detail} />
        </Grid>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid>
          <Paragraph title="Album Detail">
            <TextContent>
              When a user clicks on an album from the library page in the music
              app, they will be directed to the album detail page. The album
              detail page includes several details about the album, include:
            </TextContent>
            <TextContent>Album title: The name of the album.</TextContent>
            <TextContent>
              Artist name: The name of the artist or band who created the album.
            </TextContent>
            <TextContent>
              Song list: A list of all the songs included in the album, along
              with their titles and durations.
            </TextContent>
            <TextContent>Users can tap the song to play.</TextContent>
            <TextContent>
              If the user wants to go back to the library page, they can click
              on a top left icon to return to the previous library page. This
              allows them to easily navigate through the app and find the music
              they want to listen to.
            </TextContent>
          </Paragraph>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid item>
          <ImageInteractiveGroup
            magnifier={true}
            img={img_album_detail_scrolled}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid>
          <Paragraph title="">
            <TextContent>
              When user scroll the list, the image will collapse so more space
              will be provided for the album list.
            </TextContent>
          </Paragraph>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid item>
          <ImageInteractiveGroup
            magnifier={true}
            img={img_album_detail_long_pressed}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid>
          <Paragraph title="Long Press Menu">
            <TextContent>
              Users can long press on an individual song to have a short list
              including play it, adding it to their playlist, or downloading it.
              By clicking other area user could close the short list. When user
              interact with “Add to playlist” or “Download”, an auto-disappeared
              toast will be provided as feedback, so user will get the result.
              Following is an image of “toast”.
            </TextContent>
          </Paragraph>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid item>
          <ImageInteractiveGroup magnifier={true} img={img_menu} />
        </Grid>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid>
          <Paragraph title="Menu">
            <TextContent>
              <b>Playlist</b>: Users can view, create, and edit their playlists,
              as well as add songs to them.
            </TextContent>
            <TextContent>
              <b>Settings</b>: Users can adjust various settings for the app.
            </TextContent>
            <TextContent>
              To access any of these options, users can simply tap on the
              corresponding item in the menu. The menu provides an easy and
              convenient way for users to navigate through the app and customize
              their experience.
            </TextContent>
          </Paragraph>
        </Grid>
      </Grid>{" "}
      <Grid item xs={12} md={4}>
        <Grid item>
          <ImageInteractiveGroup magnifier={true} img={img_playlist} />
        </Grid>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid>
          <Paragraph title="Playlist">
            <TextContent>
              When a user clicks on the "Playlist" option from the menu in the
              music app, they will be directed to the playlist page. The
              playlist page displays all of the user's saved playlists. Users
              can browse through the playlists by scrolling up and down the
              page. A click operation will change the playing music to the
              clicked one.
            </TextContent>
          </Paragraph>
        </Grid>
      </Grid>{" "}
      <Grid item xs={12} md={4}>
        <Grid item>
          <ImageInteractiveGroup magnifier={true} img={img_playlist_move} />
        </Grid>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid>
          <Paragraph title="Playlist Moving Item">
            <TextContent>
              When a user is viewing a playlist in the music app, they can drag
              and drop songs by long press and drag to change the order in which
              they are played. To do this, the user can tap and hold on a song
              in the playlist until it "lifts up" from the list. The user can
              then drag the song to a new position in the list and release it to
              drop it into place.
            </TextContent>
          </Paragraph>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid item>
          <ImageInteractiveGroup magnifier={true} img={img_playlist_remove_a} />
        </Grid>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid>
          <Paragraph title="Playlist Remove Item">
            <TextContent>
              User could delete song in playlist by swipe to left, then gray
              background with delete button will appear. If the user lift up the
              finger, the delete operation will be canceled.
            </TextContent>
          </Paragraph>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid item>
          <ImageInteractiveGroup magnifier={true} img={img_playlist_remove_b} />
        </Grid>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid>
          <Paragraph title="">
            <TextContent>
              If user swipe left more, the background will become red. If user
              lift the finger, the delete operation will be performed.
            </TextContent>
          </Paragraph>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid item>
          <ImageInteractiveGroup magnifier={true} img={img_playing} />
        </Grid>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid>
          <Paragraph title="Player Page">
            <TextContent>
              <ol>
                <Li>
                  When a user clicks on a song in the music app, they will be
                  directed to the "Now Playing" page. The Now Playing page
                  displays information about the song that is currently playing,
                  including the song title and artist name.
                </Li>
                <Li>
                  Users can use the music player controls to play or pause the
                  song, skip to the next or previous song in the playlist.
                </Li>
                <Li>
                  User can change playing mode among “ordered” “shuffle” and
                  “random” by click .
                </Li>
                <Li>
                  In addition to these controls, users can also move the
                  progress bar to change the progress of the song. The progress
                  bar shows the current position of the song and allows users to
                  quickly jump to any point in the song.
                </Li>
                <Li>
                  If the user wants to go back to previous page, they can click
                  on a button.
                </Li>
                <Li>
                  Click icon to return to the previous page. This allows them to
                  easily navigate through the app and switch between songs and
                  playlists or albums.
                </Li>
              </ol>
            </TextContent>
          </Paragraph>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid item>
          <ImageInteractiveGroup magnifier={true} img={img_settings} />
        </Grid>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid>
          <Paragraph title="Settings">
            <TextContent>
              When a user clicks on the "Settings" option from the menu in the
              music app, they will be directed to the settings page. The
              settings page includes several options, include:
            </TextContent>
            <TextContent>
              <ol>
                <Li>
                  Storage: Users can view the amount of storage space currently
                  available on their device and the amount of storage space used
                  by the music app. Users may also be able to manage their
                  downloaded music and delete songs or albums they no longer
                  need.
                </Li>
                <Li>
                  Cache: Users can view and manage the app's cache, which stores
                  temporary data to help the app run more smoothly. Users may be
                  able to clear the cache if they are experiencing issues with
                  the app.
                </Li>
                <Li>
                  Log out: Users can log out of their account from this page.
                </Li>
              </ol>
            </TextContent>
          </Paragraph>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid item>
          <ImageInteractiveGroup magnifier={true} img={img_logout} />
        </Grid>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid>
          <Paragraph title="Logout">
            <TextContent>
              <ol>
                <Li>
                  When a user clicks on the "Log out" option from the settings
                  page in the music app, the app will prompt the user with a
                  message asking if they are sure they want to log out.
                </Li>
                <Li>
                  If the user confirms that they want to log out by clicking on
                  a red "Logout" button, the app will end the user's session and
                  redirect them to the login page. The login page will prompt
                  the user to enter their login credentials in order to access
                  their account again.
                </Li>
                <Li>
                  By providing this prompt, the music app ensures that users do
                  not accidentally log out of their account and lose any unsaved
                  data or settings. It also helps prevent unauthorized access to
                  a user's account by requiring them to enter their login
                  credentials again to access the app.
                </Li>
              </ol>
            </TextContent>
          </Paragraph>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid item>
          <ImageInteractiveGroup magnifier={true} img={img_notification} />
        </Grid>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid>
          <Paragraph title="Notification">
            <TextContent>
              <ol>
                <Li>
                  When a user starts playing music in the music app, the app may
                  display information about the currently playing song in the
                  notification shade or Notification Center. This information
                  includes the song title, artist name, album art, and music
                  player controls, includes play/pause, skip, and rewind.
                </Li>
                <Li>
                  Users can use these controls to manage their music playback
                  without having to open the app itself. They can tap the
                  play/pause button to start or stop the music, or swipe the
                  notification to skip to the next song in the playlist.
                </Li>
              </ol>
            </TextContent>
          </Paragraph>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid item>
          <ImageInteractiveGroup magnifier={true} img={img_lockscreen} />
        </Grid>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid>
          <Paragraph title="Lock Screen">
            <TextContent>
              <ol>
                <Li>
                  When a user starts playing music in the music app and locks
                  their phone, the music player will continue to play in the
                  background. The music player may display information about the
                  currently playing song, include the song title and artist, on
                  the lock screen.
                </Li>
                <Li>
                  To control their music playback from the lock screen, the user
                  can use the controls provided by the music app. They can play
                  or pause the song, skip to the next or previous song in the
                  playlist, adjust the volume, or repeat or shuffle the
                  playlist.
                </Li>
                <Li>The operation can be done without unlock the screen.</Li>
              </ol>
            </TextContent>
          </Paragraph>
        </Grid>
      </Grid>
    </Section>
  );
};
