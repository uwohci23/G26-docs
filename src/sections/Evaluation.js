import Section from "../Section";
import Paragraph from "../components/Paragraph";
import TextContent from "../components/TextContent";
import { Grid } from "@mui/material";

export default () => {
  return (
    <Section title={"Evaluation"}>
      <Grid item xs={12}>
        <TextContent>
          The project as a whole follows the design principles learned in the
          course and achieves a high design standard. Nevertheless, there are
          still areas for improvement in the project. We will analyze this topic
          below.
        </TextContent>
        <Paragraph title="Visibility of System Status">
          <TextContent>
            The application as a whole provides enough feedback to let the user
            know whether the operation has taken effect, for example, to see the
            change in the interface when switching between interfaces. If the
            interaction does not allow the user to see enough changes, we add a
            Toast to let the user know that the action has taken effect,
            reducing confusion. However there are some places where visibility
            can be improved. For example, in the playlist, we did not prompt the
            user by default that swiping to the left was a delete function. This
            may cause some confusion to new users. Play time is not shown in the
            player interface by default, because it is thought that users do not
            have a high demand for knowing the play time at all times. This
            needs further user research and evaluation.
          </TextContent>
        </Paragraph>
        <Paragraph title="Match Between the System and the Real World">
          <TextContent>
            The application as a whole is relatively intuitive and easy to
            understand. For example, we used Library as the name of the album
            list, which is reminiscent of a real library with a large collection
            of books, similar to an album cabinet. Other names such as Playlist
            are very straightforward. Other icons have little ambiguity
          </TextContent>
        </Paragraph>
        <Paragraph title="User Control & Freedom">
          <TextContent>
            Our application supports a return on page. This back feature allows
            the user to cancel and return to the previous page if they go to the
            wrong page. However, the application lacks more granular controls.
            For dangerous operations, such as deleting music from a playlist,
            the app does not provide undo and redo functions. Adding such
            features could greatly improve the user experience. The download and
            add to playlist functions also do not provide a cancel function.
            These are all areas that could be improved.
          </TextContent>
        </Paragraph>
        <Paragraph title="Consistency & Standards">
          <TextContent>
            The application uses the same UI design with no distinctive
            interactions, so there is a high degree of consistency. There is a
            clear distinction in appearance between content that can be
            interacted with and content that cannot be interacted with, so that
            users can clearly distinguish between them.
          </TextContent>
        </Paragraph>
        <Paragraph title="Error Prevention">
          <TextContent>
            The application prevents users from making mistakes in many ways.
            For example, in a playlist, the user needs to swipe the music to the
            left more than 50% of the way through before the deletion will take
            place. And before the hand leaves, the user can undo it by reversing
            the operation. When setting the cache size, the size provided starts
            from 0 to a sufficiently large number. This operation, which is not
            entered by the user himself, reduces the number of input errors.
            Where the application does not do enough is in the login section,
            where the password does not provide a visible option. This option
            would help the user to see the password they have entered and reduce
            errors.
          </TextContent>
        </Paragraph>
        <Paragraph title="Recognition vs. Recall in User Interfaces">
          <TextContent>
            We strictly limited the length of prompts in the design of the
            application. All prompts, including error messages, are clear and
            concise in telling the user what is wrong, and use red to indicate
            the part of the application that is wrong. The downside is that the
            errors are not broken down enough. If the errors were broken down,
            the user could know more specifically what the problem is and get a
            direct solution.
          </TextContent>
        </Paragraph>
        <Paragraph title="Flexibility and Efficiency of Use">
          <TextContent>
            We are clearly lacking in this area. For example, in the case of
            deletion, even though the operation is very simple, the user still
            has to do it for each piece of music in order to delete many. Also,
            if the user wants to add a lot of music to the playlist, they need
            to repeat the operation several times. The user needs to click once
            on each item to add them all. This violates the principles of
            Flexibility and Efficiency of Use.
          </TextContent>
        </Paragraph>
        <Paragraph title="Aesthetic and Minimalist Design">
          <TextContent>
            We put a lot of effort into this. For example, the delete action in
            the playlist is hidden most of the time, because it is not a common
            feature. Similarly, in the album details, add to playlist location
            and download are also uncommon functions, so they appear only when
            long pressed. The menu is just an icon when it is not open, when it
            is open it will have detailed content and options.
          </TextContent>
        </Paragraph>
        <Paragraph title="Help Users Recognize, Diagnose, and Recover from Errors">
          <TextContent>
            At this point we use specific errors to let users know how they
            should improve their input. For example, we tell users to check the
            format of a link when we find an illegitimate link, and ask them to
            check their password when it is incorrect.
          </TextContent>
        </Paragraph>
        <Paragraph title="Help & Documentation">
          <TextContent>
            This is another area where we did not do enough. We did not teach
            users enough. Therefore, the hidden features, such as the long press
            menu and the delete and move functions of the playlist, need to be
            properly taught to the users in order for them to better grasp the
            features.
          </TextContent>
        </Paragraph>
      </Grid>
    </Section>
  );
};
