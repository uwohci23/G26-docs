import Section from "../Section";
import { Typography } from "@mui/material";
import "./style.css";

export default () => {
  return (
    <div className={"motivation"}>
      <Section title={"Motivations for Music App – 名字"}>
        <ul>
          <ol>
            <Typography variant="h4">Passion</Typography>
            <li>
              <Typography variant="h5">
                personalized music app Human-centered design: prioritize the
                needs and capabilities of human users
              </Typography>
            </li>
          </ol>
          <ol>
            <Typography variant="h4">Enhanced User Experience</Typography>
            <li>
              <Typography variant="h6">enjoyable, user-friendly</Typography>
            </li>
            <li>
              <Typography variant="h6">
                easy to use, learn, and understand. Improving usability leads to
                more efficient, effective, and satisfying experiences for users.
              </Typography>
            </li>
          </ol>
          <ol>
            <Typography variant="h4">Efficiency and Usability:</Typography>
            <li>
              <Typography variant="h6">
                reducing the time and effort required to complete tasks
              </Typography>
            </li>
            <li>
              <Typography variant="h6">
                optimizing the interaction between humans and the music app
              </Typography>
            </li>
          </ol>
        </ul>
      </Section>
    </div>
  );
};
