import { CheckCircle, CheckCircleOutline, Info } from "@mui/icons-material";
import {
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
import { bgcolor, Box } from "@mui/system";

const SlectGlassCard = () => {
  return (
    <>
      <Card
        sx={{
          maxWidth: 300,
          height: 500,
          p: 2,
          "&: hover": {
            bgcolor: " #BEE9EA",
            boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
          },
        }}
      >
        <Box sx={{ height: "2rem" }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#D4D0F4",
              borderRadius: 4,
              float: "right",
              fontSize: 10,
              fontWeight: 900,
              fontFamily: "inherit",
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
            <CardMedia
              sx={{ height: 90, objectFit: "contain" }}
              image={require("../assets/images/chashma.jpg")}
              title="fremkart"
            />
          </Box>
        </Box>

        <CardContent>
          <Stack direction={"row"} spacing={4}>
            <Typography
              gutterBottom
              variant="h3"
              fontFamily={"inherit"}
              sx={{ fontWeight: 900, fontSize: 28, color: "#444242" }}
              component="div"
            >
              Pro
            </Typography>
            <Stack direction={"row"}>
              <Typography
                gutterBottom
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

          <Button
            variant="text"
            sx={{ color: "#444242" }}
            startIcon={<CheckCircleOutline />}
          >
            All limited links
          </Button>
          <Button
            variant="text"
            sx={{ color: "#444242" }}
            startIcon={<CheckCircleOutline />}
          >
            All limited links
          </Button>
          <Button
            variant="text"
            sx={{ color: "#444242" }}
            startIcon={<CheckCircleOutline />}
          >
            All limited links
          </Button>
          <Button
            variant="text"
            sx={{ color: "#444242" }}
            startIcon={<CheckCircleOutline />}
          >
            All limited links
          </Button>
          <Button
            variant="text"
            sx={{ color: "#444242" }}
            startIcon={<CheckCircleOutline />}
          >
            All limited links
          </Button>
        </CardContent>
        <CardActionArea>
          <Button
            fullWidth
            variant="contained"
            sx={{ fontSize: "h6", color: "white.main" }}
          >
            Choose plan
          </Button>
        </CardActionArea>
      </Card>
    </>
  );
};

export default SlectGlassCard;
