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
      <Container sx={{ display: "flex", gap: 3, flexDirection: "column", alignItems: 'center' }}>
        <Box
          variant="contained"
          component="div"
          sx={{ mt: 3,
            display: "flex",
            alignItems: "flex-start",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box
          
            sx={{
              gap: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column", width: {xs: '100%', md: '50%', xl: '100%'}
            }}
          >
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

            <Typography variant="h3" fontWeight={700}>
              Get your eye <br />
              checked at home
            </Typography>
            <Typography sx={{ color: "info.main", p: 1 }} variant="body1">
              Note : we are check only this cities only
            </Typography>
            <Typography sx={{ color: "info.main", p: 1 }} variant="body1">
              Delhi NCR, Bangalore, Mumbai, Kolkata, Hyderabad, Pune, Ahmedabad,
              Durgapur, Mysore, Coimbatore, Hubli, Pondicherry, Visakhapatnam,
              Chennai, Patna, Madurai.
            </Typography>
            
              <Button
                sx={{
                  width: "90%",mb: 5,
                }}
                component={Link}
                to={"/bookingDetails-page"}
                variant="contained"
                color="primary"
              >
                Book Appointment
              </Button>
            
              {/* <Button
                sx={{
                  width: "90%",
                }}
                component={Link}
                to={"/bookingDetails-page"}
                variant="contained"
                color="primary"
              >
                Continue
              </Button> */}
          
          </Box>
          <Box
            sx={{
              width: "45%",
              height: "100%",
              display: { sm: "none", xs: "none", md: "flex", xl: "flex" },
            }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={require("../../assets/images/image 2402.png")}
              alt={"logo"}
            />
          </Box>
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
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "white.main",
                    color: "secondary.main",
                    borderRadius: "12px",
                  },
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
