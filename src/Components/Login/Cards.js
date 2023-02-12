import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Button } from "@mui/material";
// import img1 from "../assests/sun1 1.png";
import { FavoriteBorder, ShoppingCart } from "@mui/icons-material";
import { Stack } from "@mui/material";

const Cards = () => {
  return (
    <>
      <Card
        sx={{
          width: 270,
          boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.25)",
          height: 300,
          p: 2,
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardMedia
          sx={{ height: 90, width: "100%" }}
          image={'img1'}
          title="green iguana"
        />
        <CardContent align="center">
          <Typography
            gutterBottom
            component="div"
            sx={{ fontSize: 16, fontWeight: 600 }}
          >
            Premium Square Sunglasses
          </Typography>
          <Typography
            gutterBottom
            component="div"
            sx={{ fontSize: 16, fontWeight: 600 }}
          >
            $32.95
          </Typography>
        </CardContent>
        <CardActions align="center">
          <Stack direction="row" align="center">
            <Button
              variant="container"
              sx={{
                color: "#fff",
                bgcolor: "#c2c2c2",
                "&:hover": { bgcolor: "#c2c2c2" },
                borderRadius: 0,
              }}
            >
              <FavoriteBorder sx={{ color: "#000" }} />
            </Button>
            <Button
              variant="container"
              sx={{
                color: "#fff",
                bgcolor: "#000",
                p: "auto",
                "&:hover": {
                  bgcolor: "#000",
                },
                borderRadius: 0,
              }}
              startIcon={<ShoppingCart />}
            >
              ADD TO CART
            </Button>
          </Stack>
        </CardActions>
      </Card>
    </>
  );
};

export default Cards;
