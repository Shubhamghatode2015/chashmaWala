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

import { FavoriteBorder, ShoppingCart } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { Link,  useNavigate } from "react-router-dom";

const GlassCard = ({value, details}) => {
  const navigate = useNavigate();
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
        component={Link}
        to={`/product-page/${value.id}`}
          sx={{ height: 90, width: "100%" }}
          image={value?.imageUrl}
          title="green iguana"
        />
        <CardContent align="center">
          <Typography
            gutterBottom
            component="div"
            sx={{ fontSize: 16, fontWeight: 600 }}
          >
           {!details? value?.classification : value?.brandName}
          </Typography>
          <Typography
            gutterBottom
            component="div"
            sx={{ fontSize: 16, fontWeight: 600 }}
          >
           frameSize : {!details? value?.frameSize : value?.frameSizeUrl?.label}
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
              onClick={()=>navigate(`/cart-page/${value?.id}`)}
            >
              ADD TO CART
            </Button>
          </Stack>
        </CardActions>
      </Card>
    </>
  );
};

export default GlassCard;
