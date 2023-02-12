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

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "#fff", color: "#000" }}
        style={{
          display: `${
            location.pathname === "/register-page" ? "none" : "flex"
          }`,
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
                  image={require("../../assets/images/Asset 1.png")}
                  alt="Logo"
                  style={{ width: "100%", height: "100%" }}
                />
              </Link>
            </Box>

            <Box
              sx={{
                width: "62%",
                transitionDuration: "500ms",
                height: "2.5rem",
                marginLeft: { xs: "0", md: "5rem" },
                marginRight: { xs: "0", md: "5rem" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

                color: "#000",

                borderRadius: "12px",
              }}
            >
              <InputBase
                sx={{
                  width: "75%",
                  pl: 4,
                  height: "2.5rem",
                  borderRadius: "12px  0 0 12px",
                  border: "1px solid #0395AF",
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
              <Box sx={{ display: "flex", width: "25%" }}>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    height: "2.5rem",
                    fontSize: "0.7rem",
                    p: "0.1rem 0.3rem",
                    width: "70%",
                  }}
                  endIcon={<KeyboardArrowDown />}
                >
                  {" "}
                  All category{" "}
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  sx={{
                    bgcolor: "primary",
                    height: "2.5rem",
                    fontSize: "0.7rem",
                    width: "30%",
                    p: "0.1rem 0.6rem",
                    "&:hover": {
                      bgcolor: "primary",
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
                }}
              >
                <Person />
                <Typography variant="subtitle2"> User</Typography>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="info"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
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
                }}
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
                }}
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
