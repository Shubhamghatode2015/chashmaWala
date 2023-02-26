import React from "react";
import {
  Box,
  Button,
  CardMedia,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { handleDrawerLeft } from "../../../redux/Drawer/LeftDrawerSlice";
import {
  Call,
  ExitToApp,
  FmdGood,
  Home,
  Info,
  LocalMall,
  PersonSharp,
  Phone,
  StorefrontOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const returnlist = [
  {
    id: 1,
    icone: require("../../../assets/icons/Iconly/Bold/bag.png"),
    name: "My orders",
    routes: "/orderHistory-page",
  },
  {
    id: 2,
    icone: require("../../../assets/icons/Iconly/Bold/Home.png"),
    name: "Address",
    routes: "/",
  },
  {
    id: 3,
    icone: require("../../../assets/icons/Iconly/Bold/shop.png"),
    name: "Nearby stores",
    routes: "/stores-page",
  },
  {
    id: 4,
    icone: require("../../../assets/icons/Iconly/Bold/call.png"),
    name: "contact us",
    routes: "/contactUs-page",
  },
  {
    id: 5,
    icone: require("../../../assets/icons/Iconly/Bold/info1.png"),
    name: "About",
    routes: "/about-page",
  },
  {
    id: 6,
    icone: require("../../../assets/icons/Iconly/Bold/info.png"),
    name: "Term & conditions",
    routes: "/",
  },
];

const MobileLeft = () => {
  const state = useSelector((state) => state.drawerLeft.value);
  const dispatch = useDispatch();
  //
  // console.log(state);
  const matches = useMediaQuery(" (max-width:870px)");

  return (
    <>
      <Drawer
        state={true}
        anchor="left"
        open={state}
        
        PaperProps={{
          sx: {
            backgroundColor: "white.main",
            width: "100%", minHeight: '10000',
            pt: 5,
            color: "secondary.main",
            // overflowX: "hidden",
            textAlign: "center",
          },
        }}
        onClose={() => dispatch(handleDrawerLeft(false))}
        onClick={() => dispatch(handleDrawerLeft(false))}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              aline: "center",
              justifyContent: "flex-start",
              position: "relative",
              width: "100%",
            }}
          >
            <ExitToApp
              sx={{
                position: "absolute",
                top: 0,
                right: "1%",
                transform: "scale(-1, 1)",
                fontSize: 30,
              }}
              onClick={() => dispatch(handleDrawerLeft(false))}
            />
            <Box
              sx={{
                width: "90%",
                height: "26vh",
                backgroundColor: "#353638",
                display: "flex",
                aline: "center",
                pt: 3,
                pl: 2,
                justifyContent: "space-between",
                borderRadius: "0 70px 70px 0",

                // position:"relative"
              }}
            >
              <Box
                sx={{ gap: 1, display: "flex", flexDirection: "column", P: 2 }}
              >
                <Typography
                  variant="h5"
                  fontWeight={600}
                  sx={{ color: "white.main" }}
                >
                  Anubha Gupta
                </Typography>
                <Typography
                  variant="Body1"
                  sx={{
                    color: "white.main",
                  }}
                >
                  <Call fontSize="small" sx={{ mr: 1 }} /> +91 987456320
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "white.main",
                  }}
                >
                  <FmdGood fontSize="small" sx={{ mr: 1 }} /> Bhopal, 458001
                </Typography>
              </Box>

              <Box
                sx={{
                  backgroundColor: "white",
                  width: "75%",
                  height: "3rem",
                  position: "absolute",
                  bottom: 20,
                  right: "0",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "flex-start",
                  pl: 1.5,
                  borderRadius: "28px 0 0 28px",
                }}
                component={Link}
                to={"/profile-page"}
              >
                <PersonSharp
                  sx={{ color: "primary.main", fontSize: 35, mr:1.5 }}
                />
                My account
              </Box>
              <CardMedia
                sx={{
                  height: 175,
                  width: 175,
                  position: "absolute",
                  display: "flex",
                  justifyContent: "",
                  alignItems: "",
                  bottom: -10,
                  right: -20,
                  border: "5px solid #0395AF",
                  borderRadius: "50%",
                }}
                image={require("../../../assets/images/shraddha.jpg")}
                title="fremkart"
              />
            </Box>
          </Box>

          <List
            sx={{ mt: 3, gap: 3, display: "flex", flexDirection: "column" }}
          >
            {returnlist.map((curElem, index) => (
              <ListItem
                component={Link}
                to={curElem.routes}
                key={index}
                disablePadding
                sx={{
                  boxShadow: "1px 1px 4px rgba(3, 149, 175, 0.1)",
                  borderRadius: "7px",
                  color: "secondary.main",
                }}
                onClick={() => dispatch(handleDrawerLeft(false))}
              >
                <ListItemButton>
                  <ListItemIcon sx={{ color: "primary.main" }}>
                    <img
                      src={curElem.icone}
                      style={{ width: "25px", height: "25px" }}
                      alt={curElem.name}
                    />
                  </ListItemIcon>

                  <ListItemText primary={curElem.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "primary.main",
              width: "96%",
              color: "white",
              p: 1.5, mt: 2
            }}
          >
            Logout
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileLeft;
