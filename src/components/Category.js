import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { List as ListIcon } from "@mui/icons-material";
import { useState } from "react";

export default ({ links }) => {
  const [open, setOpen] = useState(true);
  return (
    <div
      style={{
        position: "fixed",
        left: "1rem",
        top: "1rem",
        backgroundColor: "white",
      }}
    >
      <IconButton size="large" onClick={() => setOpen((open) => !open)}>
        <ListIcon /> <Typography>Content</Typography>
      </IconButton>
      <List hidden={open}>
        {links?.map((link) => (
          <ListItem key={link} disablePadding>
            <ListItemButton
              onClick={() => {
                window.location.hash = link;
              }}
            >
              <ListItemText primary={link} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
