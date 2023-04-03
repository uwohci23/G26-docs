import Section from "../Section";
import Paragraph from "../components/Paragraph";
import TextContent from "../components/TextContent";
import { Grid } from "@mui/material";

export default () => {
  return (
    <Section title={"Recommendations"}>
      <Grid item xs={12}>
        <TextContent>
          Therefore, based on our evaluation, there are several aspects of this
          project that could be improved.
        </TextContent>
        <Paragraph title="Adding documentation and teaching sessions">
          <TextContent>
            We wanted to add instructional content to the page. The first time
            the user opens the application, they are told how to do it through a
            tutorial that can be done multiple times. The tutorial would include
            informing the user of important menu locations, and how to delete
            and move actions in the playlist.
          </TextContent>
        </Paragraph>
        <Paragraph title="Provide undo function">
          <TextContent>
            Provide an undo function for the main operations of the application.
            For example, after adding to a playlist, a small Toast with a button
            pops up. this pop-up box automatically disappears after a few
            seconds and the user can undo the action just taken by clicking the
            button. This can also be applied to setting changes and deletion
            operations.
          </TextContent>
        </Paragraph>
        <Paragraph title="Provide optional password display">
          <TextContent>
            Provide an option to temporarily see the password on the password
            entry box. Currently, passwords are replaced with dots for the sake
            of password privacy. This protects privacy, but the user cannot see
            the exact content and therefore has no chance to confirm the
            password and can only log in after entering the password to know if
            it is correct or incorrect. Therefore, when we add this option, the
            dot will become a character when the user's finger is pressed, and
            will become a dot again when the hand is released. This short-time
            operation does not affect privacy and provides more confirmation for
            the user.
          </TextContent>
        </Paragraph>
        <Paragraph title="Increase the types of error messages">
          <TextContent>
            Add more detailed error alerts. The current error message only
            allows the user to locate the general error and check it on their
            own. We want the error message to let the user know the reason for
            the error. For example, if the server address is entered
            incorrectly, the user should be informed in detail whether it is a
            network problem, a problem with the address format, or a problem
            with the server.
          </TextContent>
        </Paragraph>
        <Paragraph title="Add batch processing option">
          <TextContent>
            Add batch processing function. For example, on the album details
            page, a button should be provided to allow users to add the whole
            album to the playlist at once, or provide a multi-selection option
            for users to select multiple music. Similarly, we should also add a
            batch operation option to the playlist, allowing users to modify the
            playing order in batch or delete multiple music. Such an option
            would reduce repetitive user actions and improve flexibility.
          </TextContent>
        </Paragraph>
        <Paragraph title="Add a download progress">
          <TextContent>
            We should add a progress indicator to the download function.
            Currently there is no download progress indication will make users
            confused about the completion time of the download users know the
            progress of the download will have a basic expectation of the
            completion time. At the same time, we should add a download control
            function in the page, such as pause or cancel, so that users can
            control the priority.
          </TextContent>
        </Paragraph>
      </Grid>
    </Section>
  );
};
