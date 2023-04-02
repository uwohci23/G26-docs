import Section from "../Section";
import Paragraph from "../components/Paragraph";
import TextContent from "../components/TextContent";
import { Grid } from "@mui/material";

export default () => {
  return (
    <Section title={"Evaluation"}>
      <Grid item xs={12}>
        <Paragraph title="Visibility of System Status">
          <TextContent>
            The app provides real-time feedback on the playing status,
            connection status, and errors. The playing status bar and
            notifications ensure that users are always aware of the app's
            current state. The app only sometimes provides clear and timely
            feedback about the status of ongoing processes. For example, whether
            the app attempts to connect to the server during the login process
            needs to be clarified. A visual indicator like a spinning wheel or
            progress bar would improve the user experience.
          </TextContent>
        </Paragraph>
        <Paragraph title="Match Between the System and the Real World">
          <TextContent>
            The app uses familiar controls, icons, and terminology that users
            would expect in a music app. The design and functionality are
            consistent with other music apps, making it easy for users to
            understand and navigate the interface.
          </TextContent>
        </Paragraph>
        <Paragraph title="User Control & Freedom">
          <TextContent>
            The app offers multiple ways to navigate and control music playback,
            including touch gestures, buttons, and menus. Users can customize
            settings like themes and cache management to personalize their
            experience.
          </TextContent>
        </Paragraph>
        <Paragraph title="Consistency & Standards">
          <TextContent>
            The app maintains consistency in design elements, icons, and
            terminology across different pages and functions. This consistency
            helps users learn the system more quickly and reduces the likelihood
            of errors.
          </TextContent>
        </Paragraph>
        <Paragraph title="Error Prevention">
          <TextContent>
            The app uses constraints, confirmation dialogs, and clear error
            messages to prevent user errors. For example, users must confirm
            before logging out or deleting songs, and error messages clearly
            explain any issues. While the app attempts to minimize user errors,
            there are still areas where improvements can be made. For instance,
            the app should validate user input for server IP, username, and
            password fields during the login process to ensure the entered data
            is correct before submitting the login request.
          </TextContent>
        </Paragraph>
        <Paragraph title="Recognition vs. Recall in User Interfaces">
          <TextContent>
            The app uses icons, labels, and tooltips to help users recognize
            functions and controls. Familiar icons and design elements allow
            users to transfer knowledge from other music apps, reducing the need
            for recall. The app's navigation and menu system could be improved
            by making it more intuitive and discoverable. Users may need to
            recognize that they can swipe right to access the menu from the
            Library page. A more visible and consistent menu icon throughout the
            app would help users easily identify and navigate to the desired
            section.
          </TextContent>
        </Paragraph>
        <Paragraph title="Flexibility and Efficiency of Use">
          <TextContent>
            The app offers multiple views and ways to interact with content,
            allowing users to choose the best method. Features like playlists,
            searches, and settings cater to user needs and enable efficient app
            use.
          </TextContent>
        </Paragraph>{" "}
        <Paragraph title="Aesthetic and Minimalist Design">
          <TextContent>
            The app's design is clean and minimalist, focusing on essential
            elements and removing unnecessary distractions. This design approach
            improves usability and enhances user satisfaction. While the app has
            attempted to maintain a minimalist design, there are instances where
            the design could be further refined. For example, the Playing Status
            bar at the bottom of the screen could be more visually appealing and
            better integrated with the overall app design. Additionally, the
            Album Detail page can be improved by providing a more consistent
            layout for song lists in the grid and list views.
          </TextContent>
        </Paragraph>{" "}
        <Paragraph title="Help Users Recognize, Diagnose, and Recover from Errors">
          <TextContent>
            The app provides clear error messages and guidance on resolving
            issues. This helps users understand what went wrong and how to fix
            it, reducing frustration and promoting a positive user experience.
            The app does not consistently provide clear error messages to help
            users understand and resolve issues. In cases where login
            credentials are incorrect, the app should give specific information
            about which field is wrong (e.g., incorrect password) rather than a
            generic error message.
          </TextContent>
        </Paragraph>{" "}
        <Paragraph title="Help & Documentation">
          <TextContent>
            While this document does not detail the help and documentation
            features of the app, it is essential to provide clear and concise
            service resources for users. These resources should be easily
            accessible within the app and offer guidance on using the app's
            features, troubleshooting common issues, and understanding any error
            messages that may occur. The app needs a comprehensive help section
            or documentation to assist users in troubleshooting issues or
            learning how to use the app's features. A built-in help section with
            searchable FAQs, tips, and tutorials can improve user experience and
            reduce frustration.
          </TextContent>
        </Paragraph>
      </Grid>
    </Section>
  );
};
