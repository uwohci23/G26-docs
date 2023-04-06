import {
  Button,
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
        zIndex: 100,
        backgroundColor: "white",
      }}
    >
      <Button
        variant="outlined"
        size="large"
        onClick={() => setOpen((open) => !open)}
      >
        <ListIcon />
      </Button>
      <List hidden={open}>
        {links?.map((link) => (
          <ListItem key={link} disablePadding>
            <ListItemButton
              onClick={() => {
                window.location.hash = link;
                setOpen((open) => !open);
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
