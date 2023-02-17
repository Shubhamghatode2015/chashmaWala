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
  FmdGood,
  Home,
  Info,
  LocalMall,
  PersonSharp,
  Phone,
  StorefrontOutlined,
} from "@mui/icons-material";

const returnlist = [
  {
    id: 1,
    icone: <LocalMall />,
    name: "My orders",
  },
  {
    id: 2,
    icone: <Home />,
    name: "Address",
  },
  {
    id: 3,
    icone: <StorefrontOutlined />,
    name: "Nearby stores",
  },
  {
    id: 4,
    icone: <Phone />,
    name: "Contant us",
  },
  {
    id: 5,
    icone: <Info />,
    name: "About",
  },
  {
    id: 6,
    icone: <Info />,
    name: "Term & conditions",
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

            color: "secondary.main",
          },
        }}
        sx={{ zIndex: "99999" }}
        onClose={() => dispatch(handleDrawerLeft(false))}
      >
        <Box
          style={{
            minWidth: 330,
            maxWidth: "90%",
            // padding: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              aline: "center",
              justifyContent: "flex-start",
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: "90%",
                height: "26vh",
                backgroundColor: "#353638",
                display: "flex",
                aline: "center",
                justifyContent: "space-between",
                borderRadius: "0 70px 70px 0",
                // position:"relative"
              }}
            >
              <div>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ color: "white", fontSize: 16, p: 1 }}
                >
                  Anubha Gupta
                </Typography>
                <Box
                  variant="h6"
                  component="h2"
                  sx={{
                    color: "white",
                    fontSize: 12,
                    m: 0.1,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Call fontSize="small" /> +91 987456320
                </Box>
                <Box
                  variant="h6"
                  component="h6"
                  sx={{
                    color: "white",
                    fontSize: 12,
                    m: 0.1,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FmdGood fontSize="small" /> Bhopal, 458001
                </Box>
              </div>

              <Box
                sx={{
                  backgroundColor: "white",
                  width: "40%",
                  height: "4vh",
                  position: "absolute",
                  bottom: 20,
                  right: "38%",
                  alignItems: "center",
                  display: "flex",
                  p: 0.4,
                  borderRadius: "12px 0 0 12px",
                  fontSize: 12,
                }}
              >
                <PersonSharp sx={{ color: "var(--color-text)" }} />
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

          <List sx={{ mt: 4, gap: 2, display: 'flex', flexDirection: 'column'}}>
            {returnlist.map((curElem) => (
              <ListItem
                key={curElem.id}
                disablePadding
                sx={{
                  boxShadow: "1px 1px 4px rgba(3, 149, 175, 0.1)",
                  borderRadius: "7px",
                }}
              >
                <ListItemButton>
                  <ListItemIcon sx={{ color: 'primary.main' }}>
                    {curElem.icone}
                  </ListItemIcon>

                  <ListItemText primary={curElem.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Button variant="contained" sx={{backgroundColor:'primary.main',width:"90%",color:"white" ,m:1}}>Logout</Button>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileLeft;
