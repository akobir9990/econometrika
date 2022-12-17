import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Router from "../../routes/Router";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  { id: 1, name: "Tutorial", path: "/tutorial" },
  { id: 2, name: "Presentation", path: "/presentation" },
  { id: 3, name: "Lecture", path: "/lecture" },
  { id: 4, name: "Guidlinies", path: "/guidlinies" },
  { id: 5, name: "Syllabus", path: "/syllabus" },
  { id: 6, name: "Practice", path: "/practice" },
  { id: 7, name: "Glossaries", path: "/glossaries" },
  { id: 8, name: "About Creator", path: "/about" },
];

function DrawerAppBar(props) {
  const nameOfWebApp = "Ekonometrika";

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {nameOfWebApp}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <NavLink key={item.id} to={item.path} className="text-[15px]">
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                {item.name}
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {nameOfWebApp}
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                className="hover:scale-[1.2] ease-in-out text-[12px]"
                to={item.path}
              >
                <Button sx={{ color: "#fff" }}>{item.name}</Button>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box className="p-0 mt-[90px]  w-[100%]" component="main" sx={{ p: 2 }}>
        <Router />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
