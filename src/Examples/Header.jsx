import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          height: "5rem",
          justifyContent: "center",
          display: "flex",
          alignItems: "center", mt: 2
         
        }}
        style={{ borderTop: '0.5px solid rgb(183 183 183)',borderBottom: '0.5px solid rgb(183 183 183)'}}
      >
        <Container
          sx={{
            justifyContent: "space-evenly",
            display: "flex",
            alignItems: "center",
            height: "3.5rem ",
            padding: "0 3rem",

         
          }}
        >
          <Button
            color="secondary"
            component={Link}
            to={`/filter-page/${"value._id=Men"}`}
          >
            <Typography
              sx={{
                "&: hover": {
                  color: "primary.main",
                },
              }}
              variant="body1"
              color="initial"
              fontWeight={600}
              textTransform={"capitalize"}
            >
              Men
            </Typography>
          </Button>
          <Button
            color="secondary"
            component={Link}
            to={`/filter-page/${"value._id=Women"}`}
          >
            <Typography
              sx={{
                "&: hover": {
                  color: "primary.main",
                },
              }}
              variant="body1"
              color="initial"
              fontWeight={600}
              textTransform={"capitalize"}
            >
              Women
            </Typography>
          </Button>
          <Button
            color="secondary"
            component={Link}
            to={`/filter-page/${"value._id=Children"}`}
          >
            <Typography
              sx={{
                "&: hover": {
                  color: "primary.main",
                },
              }}
              variant="body1"
              color="initial"
              fontWeight={600}
              textTransform={"capitalize"}
            >
              Children
            </Typography>
          </Button>
          <Button color="secondary" component={Link} to={"/categories-page"}>
            <Typography
              sx={{
                "&: hover": {
                  color: "primary.main",
                },
              }}
              variant="body1"
              color="initial"
              fontWeight={600}
              textTransform={"capitalize"}
            >
              All categories
            </Typography>
          </Button>
          <Button color="secondary" component={Link} to={"/contactUs-page"}>
            <Typography
              sx={{
                "&: hover": {
                  color: "primary.main",
                },
              }}
              variant="body1"
              color="initial"
              fontWeight={600}
              textTransform={"capitalize"}
            >
              Contact us
            </Typography>
          </Button>
          <Button color="secondary" component={Link} to={"/about-page"}>
            <Typography
              sx={{
                "&: hover": {
                  color: "primary.main",
                },
              }}
              variant="body1"
              color="initial"
              fontWeight={600}
              textTransform={"capitalize"}
            >
              {" "}
              About us
            </Typography>
          </Button>
          <Button color="secondary" component={Link} to={"/stores-page"}>
            <Typography
              sx={{
                "&: hover": {
                  color: "primary.main",
                },
              }}
              variant="body1"
              color="initial"
              fontWeight={600}
              textTransform={"capitalize"}
            >
              {" "}
              Stores
            </Typography>
          </Button>
          <Button color="secondary" component={Link} to={"/addPrescriptions-page"}>
            <Typography
              sx={{
                "&: hover": {
                  color: "primary.main",
                },
              }}
              variant="body1"
              color="initial"
              fontWeight={600}
              textTransform={"capitalize"}
            >
              Book Appointment
            </Typography>
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default Header;
