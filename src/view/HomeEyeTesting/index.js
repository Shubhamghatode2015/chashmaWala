import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Box, width } from "@mui/system";
import TextField from "@mui/material/TextField";
import {
  Avatar,
  InputAdornment,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import GoogleMapReact from "google-map-react";
// import GoogleMap, { Marker } from "react-maps-google";
// import Locationaccordian from "../../Components/Locationaccordian";
// import GoogleMapReact from "google-map-react";
import Button from "@mui/material/Button";
import LocationAccordian from "../../Components/Accordians/LocationAccordian";
import { Link } from "react-router-dom";
import { LocationOn, PushPin } from "@mui/icons-material";
import axios from "axios";
import "./map.css";
const BookingDetails = (props) => {
  const [isSearch, setIsSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [searchItems, setSearchItems] = useState("");

  // console.log(searchRsults);
  // console.log(isShow);
  // console.log(searchItems);
  // console.log(
  //   searchItems && searchItems.length > 0 && searchItems?.coordinate[0]
  // );

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

  const url = "https://server.onlinevedic.com/api/getSearch/";

  const handleChangeToSearch = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/getSearch/${isSearch}`)
      .then((res) => {
        // console.log(res);
        setSearchResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleChangeToSearch();
  }, [isSearch]);

  // console.log(searchItems, "searchItems");
  // const zoom = 3;
  // // const { location } = useLocationContext();
  // // console.log(location, "aya");
  // const defaultC = {
  //   lat: 23.2454418,
  //   lng: 77.4587127,
  // };
  const Marker = ({ text }) => (
    <div className="pin">
      <PushPin size={30} />
      <p className="pin-text">{text}</p>
    </div>
  );

  const location = {
    lat: 23.250199,
    lng: 77.467009,
  };
  // console.log( searchItems.lat, 'lat');
  // console.log( searchItems.lng, 'lng');
  // console.log( searchResults, 'res');
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
            <Box sx={{ position: "relative", width: "100%" }}>
              <TextField
                fullWidth
                id="outlined-start-adornment"
                sx={{
                  mt: 2,

                  color: "white",
                  backgroundColor: "white",
                }}
                placeholder="Search location "
                type="text"
                value={isSearch}
                onChange={(e) => setIsSearch(e.target.value)}
                onFocus={() => setIsShow(true)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchRoundedIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Container
                sx={{
                  position: "absolute",
                  width: "100%",
                  top: 70,
                  p: `${searchResults.length > 0 && isShow ? 1 : 0}`,
                  border: 0.2,
                  borderColor: "primary.main",
                  zIndex: 1,

                  borderRadius: 2,
                  borderTop: "none",
                }}
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.93) 100%, rgba(255,255,255,0) 100%)",
                  display: `${
                    searchResults.length > 0 && isShow ? "block" : "none"
                  }`,
                }}
              >
                {searchResults &&
                  searchResults.length > 0 &&
                  searchResults.map((value, index) => (
                    <ListItemButton
                      component="a"
                      href="#simple-list"
                      key={index}
                      onClick={() => {
                        setSearchItems({
                          lat: value?.coordinate[1],
                          lng: value?.coordinate[0],
                        });
                        setIsShow(false);
                      }}
                    >
                      <ListItemText primary={value.Place} />
                    </ListItemButton>
                  ))}
              </Container>
            </Box>

            {/* -------------------map---------------------------- */}
            <Box
              style={{
                height: "100vh",
                width: "100%",
                mt: 5,
                border: 1,
                display: "flex",
              }}
            >
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyDDOhWEH6qIYmon2vqRrbsOmSdS4w-LoAQ",
                }}
                center={searchItems ? searchItems : location}
                zoom={13}
              >
                <Marker
                  lat={searchItems.lat}
                  lng={searchItems.lng}
                  text={searchResults.Place}
                />
              </GoogleMapReact>
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
