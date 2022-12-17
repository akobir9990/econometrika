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

const drawerWidth = 260;
const navItems = [
  { id: 1, name: "Презентации", path: "/presentation" },
  { id: 2, name: "Практические занятия", path: "/practice" },
  { id: 3, name: "Тексты лексии", path: "/lecture" },
  { id: 4, name: "Методические указании", path: "/guidlinies" },
  { id: 5, name: "Учебные пособие", path: "/tutorial" },
  { id: 6, name: "Глоссарий", path: "/glossaries" },
  { id: 7, name: "Силлабус", path: "/syllabus" },
  { id: 8, name: "О нас", path: "/about" },
];

function DrawerAppBar(props) {
  const nameOfWebApp = "Эконометрика";

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
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: "35px" }}>
            {nameOfWebApp}
          </Typography>
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
              >
                <Button  sx={{ color: "#fff", fontSize: "10px" }}>{item.name}</Button>
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
            display: { xs: "block", lg: "none" },
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
