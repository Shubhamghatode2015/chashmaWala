import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { Stack } from "@mui/system";
import { Link, useLocation, useParams } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"© Copyright 2023 English Chashma-Wala by Shubham Ghatode "}
      {new Date().getFullYear()}
      <br />
      <hr />
      {"@ Shubham as a FrontEnd & ritesh as a BackEnd , developer's"}

      {"."}
    </Typography>
  );
}

export default function Footer() {
  const location = useLocation();
  // console.log(location.pathname);
  const id = useParams();
  const matches = useMediaQuery("(max-width:870px)");
  // console.log(id);
  return (
    <Box
      sx={{
        display: `${
          location.pathname === "/register-page" ||
          location.pathname === "/verify-page" ||
          matches
            ? "none"
            : "flex"
        }`,
        flexDirection: "column",
        minHeight: "50vh",
      }}
    >
      {/* {location.pathname === `/product-page/${id}`
        ? console.log(location.pathname, `/product-page/${id}`, "yws")
        : console.log(location.pathname, `/product-page/${id}`, "o")} */}
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }}>
        <Stack direction="row" spacing={3}>
          <Box flex={2}>
            <Link to="/">
              <img
                src={require("../../assets/images/logo.png")}
                alt="logo"
                height={100}
              />
            </Link>
            <Typography variant="body1" color="info.main">
              Best information about the company gies here but now lorem ipsum
              is
            </Typography>
            <Stack direction="row" spacing={1} marginTop={2}>
              <Link to="/">
                <img
                  src={require("../../assets/icons/footer/g1.png")}
                  alt=".."
                  height={20}
                />
              </Link>
              <Link to="/">
                {" "}
                <img
                  src={require("../../assets/icons/footer/g2.png")}
                  alt=".."
                  height={20}
                />
              </Link>
              <Link to="/">
                {" "}
                <img
                  src={require("../../assets/icons/footer/g3.png")}
                  alt=".."
                  height={20}
                />
              </Link>
              <Link to="/">
                {" "}
                <img
                  src={require("../../assets/icons/footer/g4.png")}
                  alt=".."
                  height={20}
                />
              </Link>
              <Link to="/">
                {" "}
                <img
                  src={require("../../assets/icons/footer/g5.png")}
                  alt=".."
                  height={20}
                />
              </Link>
            </Stack>
          </Box>
          <Box flex={1}>
            <Typography variant="h6" color="secondary">
              About
            </Typography>
            <Link to="/">
              <Typography variant="body1" color="info.main">
                About Us
              </Typography>
            </Link>
            <Link to="/">
              <Typography variant="body1" color="info.main">
                Find store
              </Typography>
            </Link>
            <Link to="/">
              <Typography variant="body1" color="info.main">
                Categories
              </Typography>
            </Link>
            <Link to="/">
              {" "}
              <Typography variant="body1" color="info.main">
                Blogs
              </Typography>
            </Link>
          </Box>
          <Box flex={1}>
            <Typography variant="h6" color="secondary">
              Partnership
            </Typography>

            <Link to="/">
              {" "}
              <Typography variant="body1" color="info.main">
                About Us
              </Typography>
            </Link>
            <Link to="/">
              {" "}
              <Typography variant="body1" color="info.main">
                Find store
              </Typography>
            </Link>
            <Link to="/">
              {" "}
              <Typography variant="body1" color="info.main">
                Categories
              </Typography>
            </Link>
            <Link to="/">
              <Typography variant="body1" color="info.main">
                Blogs
              </Typography>
            </Link>
          </Box>
          <Box flex={1}>
            <Typography variant="h6" color="secondary">
              Information
            </Typography>
            <Link to="/">
              <Typography variant="body1" color="info.main">
                Help Center
              </Typography>
            </Link>
            <Link to="/">
              {" "}
              <Typography variant="body1" color="info.main">
                Money Refund
              </Typography>
            </Link>
            <Link to="/">
              <Typography variant="body1" color="info.main">
                Shipping
              </Typography>
            </Link>
            <Link to="/">
              {" "}
              <Typography variant="body1" color="info.main">
                Contact us
              </Typography>
            </Link>
          </Box>
          <Box flex={1}>
            <Typography variant="h6" color="secondary">
              For users
            </Typography>

            <Link to="/">
              {" "}
              <Typography variant="body1" color="info.main">
                Login
              </Typography>
            </Link>
            <Link to="/">
              {" "}
              <Typography variant="body1" color="info.main">
                Register
              </Typography>
            </Link>
            <Link to="/">
              {" "}
              <Typography variant="body1" color="info.main">
                Settings
              </Typography>
            </Link>
            <Link to="/orderHistory-page">
              {" "}
              <Typography variant="body1" color="info.main">
                My Orders
              </Typography>
            </Link>
          </Box>
          <Box flex={1} sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h6" color="secondary">
              Get app
            </Typography>

            <Link to="/">
              {" "}
              <img
                src={require("../../assets/icons/footer/Property 1.png")}
                alt=".."
                width={100}
                height={40}
                style={{ margin: "1rem 0" }}
              />
            </Link>
            <Link to="/">
              {" "}
              <img
                src={require("../../assets/icons/footer/Property 2.png")}
                alt=".."
                width={100}
                height={40}
              />
            </Link>
          </Box>
        </Stack>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
