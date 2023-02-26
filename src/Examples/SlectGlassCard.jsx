import { CheckCircle, CheckCircleOutline, Info } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Stack } from "@mui/material";
// import img from "../assests/image 2386.png"
import { bgcolor, Box,  } from "@mui/system";

const SlectGlassCard = ({setIsClick}) => {
  return (
    <>
      <Card
        sx={{
          maxWidth: 300,
          height: 500,
          gap: 2,
          p: 3,
          background: "white.main",
          boxShadow: "0px 42px 34px rgba(82, 67, 194, 0.295755)",
          borderRadius: "26px",
          "&: hover": {
            bgcolor: " #BEE9EA",
            boxShadow: "0px 42px 34px rgba(82, 67, 194, 0.295755)",
          },
        }}
      >
        <Box sx={{ height: "2rem" }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#D4D0F4",  color: "secondary.main",
              borderRadius: 4,
              float: "right",
              fontSize: 10,
              fontWeight: 900,
              fontFamily: "inherit",
              "&: hover": {
                bgcolor: "#D4D0F4",
                color: "secondary.main",
              },
            }}
          >
            MOST POPULAR
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: 200, height: "6rem" }}>
            <img
              src={require("../assets/images/chashma.jpg")}
              alt=".."
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Box>

        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1.5,}}>
          <Stack direction={"row"} spacing={4}>
            <Typography
              variant="h3"
              fontFamily={"inherit"}
              sx={{ fontWeight: 900, fontSize: 28, color: "#444242" }}
              component="div"
            >
              Pro
            </Typography>
            <Stack direction={"row"}>
              <Typography
                variant="h3"
                fontFamily={"inherit"}
                sx={{ fontWeight: 900, fontSize: 36, color: "#444242" }}
                component="div"
              >
                $100
              </Typography>
              <Typography
                variant="h3"
                fontFamily={"inherit"}
                sx={{ fontWeight: 500, fontSize: 18, color: "#444242", mt: 1 }}
                component="div"
              >
                /month
              </Typography>
            </Stack>
          </Stack>
      
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <img
                src={require("../assets/images/CheckIcons.png")}
                style={{ widht: "20px ", height: "20px", marginRight: "1rem" }}
              />
              <Typography variant="body1" color="initial">
                {" "}
                All limited links
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <img
                src={require("../assets/images/CheckIcons.png")}
                style={{ widht: "20px ", height: "20px", marginRight: "1rem" }}
              />
              <Typography variant="body1" color="initial">
                {" "}
                All limited links
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <img
                src={require("../assets/images/CheckIcons.png")}
                style={{ widht: "20px ", height: "20px", marginRight: "1rem" }}
              />
              <Typography variant="body1" color="initial">
                {" "}
                All limited links
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <img
                src={require("../assets/images/CheckIcons.png")}
                style={{ widht: "20px ", height: "20px", marginRight: "1rem" }}
              />
              <Typography variant="body1" color="initial">
                {" "}
                All limited links
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <img
                src={require("../assets/images/CheckIcons.png")}
                style={{ widht: "20px ", height: "20px", marginRight: "1rem" }}
              />
              <Typography variant="body1" color="initial">
                {" "}
                All limited links
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <img
                src={require("../assets/images/CheckIcons.png")}
                style={{ widht: "20px ", height: "20px", marginRight: "1rem" }}
              />
              <Typography variant="body1" color="initial">
                All limited links
              </Typography>
            </Box>

        </CardContent>
        <CardActionArea>
          <Button
            fullWidth
            variant="contained"
            sx={{ fontSize: "h6", color: "white.main", borderRadius: "24px" }}  onClick={() => setIsClick(true)}
          >
            Choose plan
          </Button>
        </CardActionArea>
      </Card>
    </>
  );
};

export default SlectGlassCard;
