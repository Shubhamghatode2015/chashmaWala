import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { AccountCircle, ShoppingCart } from "@mui/icons-material";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { CardMedia, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";

export default function NavBaar() {
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  const navigate = useNavigate();
  const matches = useMediaQuery("(max-width:870px)");
  const location = useLocation();
  const { id } = useParams();
  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{
        display: `${
          location.pathname === "/register-page" ||
          location.pathname === "/home-page" ||
          location.pathname === "/signup-page" ||
          location.pathname === `/product-page/${id}` ||
          location.pathname === "/verify-page" ||
          matches
            ? "none"
            : "flex"
        }`,
        transitionDuration: "800ms",
        // opacity: `${visible ? "1" : "0"}`,
        top: `${visible ? "0" : "-15%"}`,
      }}
    >
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "white.main",
          color: "secondary.main",
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
                  src={require("../../assets/images/Asset 2.png")}
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
                <Typography variant="subtitle2" color="info.main">
                  {" "}
                  Home
                </Typography>
              </Link>
              <Link to="/">
                <Typography variant="subtitle2" color="info.main">
                  {" "}
                  Category
                </Typography>
              </Link>
              <Link to="/">
                <Typography variant="subtitle2" color="info.main">
                  {" "}
                  Location
                </Typography>
              </Link>
              <Link to="/">
                <Typography variant="subtitle2" color="info.main">
                  {" "}
                  FAQ
                </Typography>
              </Link>

              <Link to="/">
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="info.main"
                >
                  <ShoppingCart />
                </IconButton>
              </Link>
              <Link to="/">
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="info.main"
                >
                  <AccountCircle />
                </IconButton>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
