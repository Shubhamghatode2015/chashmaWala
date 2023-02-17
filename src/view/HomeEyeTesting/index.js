import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Box, width } from "@mui/system";
import TextField from "@mui/material/TextField";
import { Avatar, InputAdornment, Paper, Typography } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
// import GoogleMapReact from "google-map-react";
import GoogleMap, { Marker } from "react-maps-google";
// import Locationaccordian from "../../Components/Locationaccordian";
import Button from "@mui/material/Button";
import LocationAccordian from "../../Components/Accordians/LocationAccordian";
import { Link } from "react-router-dom";
import { PushPin } from "@mui/icons-material";

const BookingDetails = (props) => {
  const TimeArray = [
    {
      id: 1,
      time: " 9 AM - 11 AM",
    },
    {
      id: 2,
      time: " 11 AM - 1 PM",
    },
    {
      id: 11,
      time: " 1 PM - 3 PM",
    },
    {
      id: 21,
      time: " 3 PM - 5 PM",
    },
    {
      id: 31,
      time: " 5 PM - 7 PM",
    },
    {
      id: 41,
      time: " 7 PM - 9 PM",
    },
    {
      id: 51,
      time: " 9 PM - 10 PM",
    },
    {
      id: 61,
      time: " 10 PM - 11 PM",
    },
  ];

  // const zoom = 3;
  // // const { location } = useLocationContext();
  // // console.log(location, "aya");
  // const defaultC = {
  //   lat: 23.2454418,
  //   lng: 77.4587127,
  // };
  // const Marker = ({ text }) => (
  //   <div className="pin">
  //     <PushPin size={30} />
  //     <p className="pin-text">{text}</p>
  //   </div>
  // );
  // console.log(location);

  return (
    <div>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row", xl: "row" },
            width: "100%",
            gap: 3,
          }}
        >
          <Box sm={12} sx={{ width: { xs: "100%", md: "50%", xl: "50%" } }}>
            {/* ------------------input ------------------------ */}
            <TextField
              id="outlined-start-adornment"
              sx={{
                p: 2,
                width: "96%",
                color: "white",
                backgroundColor: "white",
              }}
              placeholder="Search location "
              type="location"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRoundedIcon />
                  </InputAdornment>
                ),
              }}
            />

            {/* -------------------map---------------------------- */}
            <Box style={{ height: "30rem", width: "100%" }}>
              <GoogleMap apiKey="AIzaSyDDOhWEH6qIYmon2vqRrbsOmSdS4w-LoAQ">
                <Marker position={{ lat: 23.203645, lng: 77.44508 }} />
              </GoogleMap>
            </Box>

            <Typography
              variant="h4"
              component="h1"
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 1,
                fontSize: "1.2rem",
              }}
            >
              Select location for eye Power Checkup{" "}
            </Typography>
          </Box>
          <Box sx={{ width: { xs: "100%", md: "50%", xl: "50%" }, m: 1 }}>
            <LocationAccordian value={TimeArray} />
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            m: 2,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: { xs: "100%", md: "50%", xl: "50%" },
              m: 2,
            }}
            component={Link}
            to={"/cart-page"}
          >
            Continue For Payment
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default BookingDetails;
