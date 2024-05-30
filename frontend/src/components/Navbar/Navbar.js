import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom"; 
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FaUserCircle } from "react-icons/fa";


const drawerWidth = 280;

const navItems = [
  { to: "/", text: "Home" },
  { to: "/aboutUs", text: "About us" },
  { to: "/contactUs", text: "Contact" },
  { to: "/create", text: "Admin", icon: <FaUserCircle style={{marginLeft:"10px"}} /> },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <NavLink to="/" className={styles.logoContainer}>
          <img className={styles.logo} src="/assets/logo.svg" alt="Logo" />
        </NavLink>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.to} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText 
                primary={
                  <NavLink 
                    to={item.to} 
                    className={({ isActive }) => isActive ? styles.activeLink : styles.links}
                  >
                    {item.text} {item.icon}
                  </NavLink>
                } 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar 
        component="nav" 
        style={{ 
          backgroundColor: "#fff", 
          paddingLeft: "70px", 
          paddingRight: "70px", 
          boxShadow: "none", 
          borderBottom: "2px solid #f5f5f5" 
        }}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <NavLink to="/" className={styles.logoContainer}>
              <img className={styles.logo} src="/assets/logo.svg" alt="Logo" />
            </NavLink>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item.to} sx={{ color: "#574143" }}>
                <NavLink 
                  to={item.to} 
                  className={({ isActive }) => isActive ? styles.activeLink : styles.links}
                >
                  {item.text} {item.icon}
                </NavLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
