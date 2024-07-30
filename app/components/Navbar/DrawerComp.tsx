import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function DrawerComp() {
  const [state, setState] = useState(false);

  const toggleDrawer = (newState: boolean) => () => {
    setState(newState);
  };

  const DrawerList = (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {["home", "speisekarte", "services", "about", "contact"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton href={index === 0 ? "/" : "/" + text}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="top" open={state} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
