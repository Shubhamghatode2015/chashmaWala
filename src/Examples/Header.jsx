import { BorderBottom } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import SwiperSlider from "../Components/SwiperSlider";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          height: "5rem",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container
 
          sx={{
            justifyContent: "space-evenly",
            display: "flex",
            alignItems: "center",
            height: "3.5rem ",
            padding: "0 3rem",
            borderBottomColor: "info.main",
            borderTop: 1,
            borderBottom: 1,
       
          }}
        >
          <Button
            color="info"
            component={Link}
            to={`/filter-page/${"value._id=Men"}`}
          >
            Men
          </Button>
          <Button
            color="info"
            component={Link}
            to={`/filter-page/${"value._id=Women"}`}
          >
            Women
          </Button>
          <Button
            color="info"
            component={Link}
            to={`/filter-page/${"value._id=Children"}`}
          >
            Children
          </Button>
          <Button color="info" component={Link} to={"/categories-page"}>
            All categories
          </Button>
          <Button color="info" component={Link} to={"/about-page"}>
            Contact us
          </Button>
          <Button color="info" component={Link} to={"/contactUs-page"}>
            About us
          </Button>
          <Button color="info" component={Link} to={"/stores-page"}>
            Stores
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default Header;
