import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { adminRoutes, employeeRoutes, routeType } from "./constants";
import { loginFailedAction } from "../redux/login/login.action";

function MainNavigation() {
  // dispatching actions for login
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    dispatch(loginFailedAction());
    window.location.reload()
    setTimeout(() =>{
      navigate("/");
    },2000)
    
  };

  // Sidebar toggle
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawerWidth = 180;
  const routes =
    JSON.parse(localStorage.getItem("currentUser") || "[]").role === "employee"
      ? employeeRoutes
      : adminRoutes;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {routes.map((item: routeType, index: number) => (
              <ListItemText key={index}>
                <NavLink
                  style={{ textDecoration: "none", color: "black" }}
                  to={item.path}
                >
                  <ListItemText primary={item.title} />
                </NavLink>
              </ListItemText>
            ))}
            <ListItemText>
              <ListItemText primary={"Logout"} onClick={logout} />
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    typeof window !== "undefined" ? window.document.body : undefined;

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "flex-end",
                alignItems: "center",
                display: { xs: "none", md: "flex" },
              }}
            >
              {routes.map((item: routeType, index: number) => (
                <NavLink to={item.path} key={index}>
                  <Button
                    sx={{
                      margin: "10px",
                      backgroundColor: "white",
                      color: "black",
                      "&:hover": {
                        backgroundColor: "lightgray", // Optional: Change background color on hover
                      },
                    }}
                    variant="contained"
                    color="primary"
                  >
                    {item.title}
                  </Button>
                </NavLink>
              ))}
              <NavLink to="">
                <Button
                  sx={{
                    margin: "10px",
                    backgroundColor: "white",
                    color: "black",
                    "&:hover": {
                      backgroundColor: "lightgray", // Optional: Change background color on hover
                    },
                  }}
                  variant="contained"
                  color="primary"
                  onClick={logout}
                >
                  Logout
                </Button>
              </NavLink>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: {
              xs: "block",
              sm: "block",
              md: "block",
              lg: "block",
              xl: "block",
            },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}
export default MainNavigation;
