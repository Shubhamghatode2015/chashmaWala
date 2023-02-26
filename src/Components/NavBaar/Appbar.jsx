import * as React from "react";

import Container from "@mui/material/Container";

import {
  AppBar,
  Box,
  Toolbar,
  Button,
  CardMedia,
  IconButton,
  InputBase,
  useMediaQuery,
  Typography,
  Menu,
  Fade,
  MenuItem,
  ListItemIcon,
  Avatar,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import {
  Chat,
  Favorite,
  KeyboardArrowDown,
  Person,
  ShoppingCart,
} from "@mui/icons-material";
import Header from "../../Examples/Header";

function ResponsiveAppBar() {
  const [isSearch, setIsSearch] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const nav = ProductContext(ProductArray);
  // const setSearch = nav.setSearch;
  const navigate = useNavigate();
  const matches = useMediaQuery("(max-width:870px)");

  const handleKeyDown = (e) => {
    // if (e.key === "Enter") {
    //   setSearch(isSearch);
    //   navigate(`/filter-page`);
    //   setIsSearch("");
    // }
  };
  const location = useLocation();

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  const style = {
    borderColor: "#0395AF",
  };
  return (
    <>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "#fff", color: "#000" }}
        style={{
          // display: `${
          //   location.pathname === "/register-page" ? "none" : "flex"
          // }`,
          transitionDuration: "800ms",
          // opacity: `${visible ? "1" : "0"}`,
          top: `${visible ? "0" : "-15%"}`,
        }}
      >
        <Container maxWidth="xl" style={{ padding: "0 3rem" }}>
          <Toolbar disableGutters>
            <Box
              style={{
                width: "5rem",

                height: "100%",
                padding: "0.6rem",
              }}
              sx={{ display: "flex" }}
            >
              <Link to="/">
                <CardMedia
                  component="img"
                  // height="14"
                  image={require("../../assets/images/logo.png")}
                  alt="Logo"
                  style={{ width: "100%", height: "100%" }}
                />
              </Link>
            </Box>

            <Box
              borderColor="primary.main"
              sx={{
                width: "62%",
                height: "2.5rem",
                marginLeft: { xs: "0", md: "5rem" },
                marginRight: { xs: "0", md: "5rem" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#000",
                border: 3,
                // borderColor: "shubham",
                borderRadius: "10px",
              }}
              style={{ ...style }}
            >
              <InputBase
                sx={{
                  width: "75%",
                  pl: 4,
                  height: "100%",
                  borderRight: 1,
                  borderColor: "primary.main",
                }}
                style={{
                  color: "#000",
                  display: "block",
                }}
                placeholder="search...."
                inputProps={{ "aria-label": "search google maps" }}
                value={isSearch}
                onChange={(e) => setIsSearch(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <Box
                sx={{
                  display: "flex",
                  width: "25%",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    height: "2.5rem",
                    fontSize: "0.7rem",
                    p: "0.1rem 0.3rem",
                    width: "70%",
                    border: 0,
                    borderRadius: 0,
                    color: "secondary.main",
                    "&: hover": {
                      border: 0,
                      borderRadius: 0,
                      color: "secondary.main",
                    },
                  }}
                  endIcon={<KeyboardArrowDown />}
                >
                  {" "}
                  All category{" "}
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    borderLeft: "none",
                    borderRadius: "0 10px 10px 0",
                    bgcolor: "primary.main",
                    height: "2.5rem",
                    fontSize: "0.7rem",
                    width: "30%",
                    p: "0.1rem 0.6rem",
                    color: "white.main",
                    "&:hover": {
                      bgcolor: "primary.main",
                      color: "white.main",
                    },
                  }}
                >
                  Search{" "}
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="info"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  "&: hover": {
                    color: "primary.main",
                  },
                }}
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <Person />
                <Typography variant="subtitle2"> User</Typography>
              </IconButton>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem
                  color="secondary"
                  onClick={() => {
                    navigate("/register-page");
                    handleClose();
                  }}
                  sx={{
                    "&: hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  <ListItemIcon>
                    <Avatar sx={{ width: 30, height: 30, mr: 1 }} />
                  </ListItemIcon>
                  Register
                </MenuItem>
                <MenuItem
                  color="secondary"
                  onClick={() => {
                    navigate("/profile-page");
                    handleClose();
                  }}
                  sx={{
                    "&: hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  <ListItemIcon>
                    <Avatar sx={{ width: 30, height: 30, mr: 1 }} />
                  </ListItemIcon>
                  Profile
                </MenuItem>
                <MenuItem
                  color="secondary"
                  onClick={() => {
                    navigate("/orderHistory-page");
                    handleClose();
                  }}
                  sx={{
                    "&: hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  <ListItemIcon>
                    <Avatar sx={{ width: 30, height: 30, mr: 1 }} />
                  </ListItemIcon>
                  Order Hisory
                </MenuItem>
                <MenuItem
                  color="secondary"
                  onClick={() => {
                    navigate("/wishList-page");
                    handleClose();
                  }}
                >
                  <ListItemIcon>
                    <Avatar sx={{ width: 30, height: 30, mr: 1 }} />
                  </ListItemIcon>
                  Wish List
                </MenuItem>
                <MenuItem
                  color="secondary"
                  onClick={() => {
                    navigate("/membersip-page");
                    handleClose();
                  }}
                >
                  <ListItemIcon>
                    <Avatar sx={{ width: 30, height: 30, mr: 1 }} />
                  </ListItemIcon>
                  Membership
                </MenuItem>
                <MenuItem
                  color="secondary"
                  onClick={handleClose}
                  sx={{
                    "&: hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  <ListItemIcon>
                    <Avatar sx={{ width: 30, height: 30, mr: 1 }} />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="info"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  "&: hover": {
                    color: "primary.main",
                  },
                }}
                onClick={() => navigate("/massage-page")}
              >
                <Chat />
                <Typography variant="subtitle2"> Message</Typography>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="info"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  "&: hover": {
                    color: "primary.main",
                  },
                }}
                onClick={() => navigate("/orderHistory-page")}
              >
                <Favorite />
                <Typography variant="subtitle2"> Orders</Typography>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="info"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  "&: hover": {
                    color: "primary.main",
                  },
                }}
                onClick={() => navigate("/cart-page")}
              >
                <ShoppingCart />
                <Typography variant="subtitle2"> My cart</Typography>
              </IconButton>
            </Box>
            {/* <AccountMenu  /> */}
          </Toolbar>
        </Container>
      </AppBar>
      <Header />
    </>
  );
}
export default ResponsiveAppBar;
