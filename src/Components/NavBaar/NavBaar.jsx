import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { AccountCircle, ShoppingCart } from "@mui/icons-material";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Avatar,
  Button,
  Fade,
  ListItemIcon,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { Container } from "@mui/system";

export default function NavBaar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
  const navigate = useNavigate();
  const matches = useMediaQuery("(max-width:870px)");
  const location = useLocation();
  const { id } = useParams();
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          position: "sticky",
          transitionDuration: "800ms",
          top: `${visible ? "0" : "-15%"}`,
        }}
      >
        <Container>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Link to="/">
                <img
                  // assets/images/Asset 2.png
                  src={require("../../assets/images/logo.png")}
                  alt="logo"
                  style={{ height: "3rem" }}
                />
              </Link>
            </Box>
            <Box
              flex={1}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Link to="/">
                <Typography
                  variant="subtitle2"
                  color="info.main"
                  sx={{
                    "&: hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {" "}
                  Home
                </Typography>
              </Link>
              <Link to="/categories-page">
                <Typography
                  variant="subtitle2"
                  color="info.main"
                  sx={{
                    "&: hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {" "}
                  Category
                </Typography>
              </Link>
              <Link to="/location-page">
                <Typography
                  variant="subtitle2"
                  color="info.main"
                  sx={{
                    "&: hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {" "}
                  Location
                </Typography>
              </Link>
              <Link to="/faq">
                <Typography
                  variant="subtitle2"
                  color="info.main"
                  sx={{
                    "&: hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {" "}
                  FAQ
                </Typography>
              </Link>

              <Link to="/cart-page">
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="info.main"
                  sx={{
                    "&: hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  <ShoppingCart />
                </IconButton>
              </Link>

              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="info.main"
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{
                  "&: hover": {
                    color: "primary.main",
                  },
                }}
              >
                <AccountCircle />
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
                >
                  <ListItemIcon>
                    <Avatar sx={{ width: 30, height: 30, mr: 1 }} />
                  </ListItemIcon>
                  Order Hisory
                </MenuItem>
                <MenuItem color="secondary"  onClick={() => {
                    navigate("/wishList-page");
                    handleClose();
                  }}>
                  <ListItemIcon>
                    <Avatar sx={{ width: 30, height: 30, mr: 1 }} />
                  </ListItemIcon>
                 Wish List
                </MenuItem>
                <MenuItem color="secondary"  onClick={() => {
                    navigate("/membersip-page");
                    handleClose();
                  }}>
                  <ListItemIcon>
                    <Avatar sx={{ width: 30, height: 30, mr: 1 }} />
                  </ListItemIcon>
                Membership
                </MenuItem>
                <MenuItem color="secondary" onClick={handleClose}>
                  <ListItemIcon>
                    <Avatar sx={{ width: 30, height: 30, mr: 1 }} />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
