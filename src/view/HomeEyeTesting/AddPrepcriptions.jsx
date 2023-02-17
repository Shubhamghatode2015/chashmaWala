import { Box, width } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
// import logo from "../../img/desktop2.png";
import { Avatar, Grid, Hidden, InputAdornment, Paper } from "@mui/material";
import { ImportantDevices } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import InputBase from "@mui/material/InputBase";
import Input from "@mui/material/Input";
import { Link } from "react-router-dom";

const AddPrepcriptions = () => {
  return (
    <>
      <Container sx={{ display: "flex", gap: 3, flexDirection: "column" }}>
        <Box
          variant="contained"
          component="div"
          sx={{ display: "flex", alignItems: "center", width: "100%" }}
        >
          <Box sm={12}>
            <Typography variant="body1" fontWeight={600}>
              Now at just ₹99
            </Typography>
            <Hidden
              only={["md", "lg"]}
              variant="contained"
              component="div"
              sx={{ width: "50%" }}
            >
              <img
                style={{ width: "100%" }}
                src={require("../../assets/images/image 2402.png")}
                alt={"logo"}
              />
            </Hidden>

            <Typography sx={{ fontSize: "3rem" }} variant="h1" component="h1">
              Get your eye <br />
              checked at home
            </Typography>
            <Typography
              sx={{ fontSize: "1.5rem", color: "#A7A7A7", p: 1 }}
              variant="h5"
              component="h5"
            >
              Note : we are check only this cities only
            </Typography>
            <Typography
              sx={{
                fontSize: "1.2rem",
                color: "#A7A7A7",
                p: 1,
                textAlign: "left",
              }}
              variant="h5"
              component="h5"
            >
              Delhi NCR, Bangalore, Mumbai, Kolkata, Hyderabad, Pune, Ahmedabad,
              Durgapur, Mysore, Coimbatore, Hubli, Pondicherry, Visakhapatnam,
              Chennai, Patna, Madurai.
            </Typography>
            <Hidden only={["xs", "sm"]}>
              <Button
                sx={{
                  width: "90%",
                }}
                component={Link}
                to={"/bookingDetails-page"}
                variant="contained"
                color="primary"
              >
                Book Appointment
              </Button>
            </Hidden>

            <Hidden only={["md", "lg"]}>
              <Button
                sx={{
                  width: "90%",
                }}
                component={Link}
                to={"/bookingDetails-page"}
                variant="contained"
                color="primary"
              >
                Continue
              </Button>
            </Hidden>
          </Box>
          <Hidden
            only={["xs", "sm"]}
            variant="contained"
            component="div"
            sx={{ width: "50%" }}
          >
            <img
              style={{ width: "100%" }}
              src={require("../../assets/images/image 2402.png")}
              alt={"logo"}
            />
          </Hidden>
        </Box>
        <Hidden only={["xs", "sm"]}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid white",
              borderRadius: 5,
              backgroundColor: "#BEE9EA",
              width: "90%",
              height: "100%",
              p: 2,
              gap: 3,
            }}
          >
            <Typography variant="h5" color="initial" fontWeight={600}>
              {" "}
              Book Your appointment
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "center", width: "100%" }}
            >
              <TextField
                id="outlined-start-adornment"
                sx={{
                  m: 1,
                  width: "50%",
                  color: "white",
                  backgroundColor: "white",
                }}
                placeholder="Enter you number"
                type="number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+91</InputAdornment>
                  ),
                }}
              />
            </Box>
            <Button
              sx={{
                width: "40%",
              }}
              component={Link}
              to={"/bookingDetails-page"}
              variant="contained"
              color="primary"
            >
              Continue
            </Button>
          </Box>
        </Hidden>
      </Container>
    </>
  );
};

export default AddPrepcriptions;
