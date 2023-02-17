import {
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { Card } from "@mui/material";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
// import img from '../assests/Ellipse 230.png';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import Rate from "./Rate";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
const FilterCard = ({ value, details }) => {
  // console.log(value);
  return (
    <>
      <Card
        sx={{
          width: 270,
          boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.25)",
          height: 350,
          p: 1,
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid #E3E8EE",
        }}
      >
        <Box sx={{ height: 150, width: "100%", p: 1, objectFit: "contain" }}>
          <Link to={`/product-page/${value.id}`}>
            <img
              src={value?.imageUrl}
              alt="......"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Link>
        </Box>

        <CardContent
          sx={{ width: "100%", borderTop: "1px solid #E3E8EE" }}
          align={"start"}
        >
          <Stack direction={"row"} spacing={2}>
            <Typography gutterBottom variant="body" sx={{ fontWeight: 600 }}>
              ₹{value?.prices[1]?.price}
            </Typography>
            <Typography
              gutterBottom
              variant="body"
              sx={{
                color: "rgba(139, 150, 165, 1)",
                textDecoration: "line-through",
              }}
            >
              ₹ {value?.prices[0]?.price}
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              size="small"
              sx={{ borderColor: "info.main" }}
            >
              <FavoriteBorderIcon sx={{ color: "primary.main" }} />
            </Button>
          </Stack>
          <Stack direction={"row"} spacing={1}>
            <Rating
              name="half-rating-read"
              defaultValue={value?.review?.rating?.ratingCount}
              precision={value?.review?.rating?.ratingCount}
              readOnly
            />

            <Typography variant="h6" sx={{ color: "rgba(255, 144, 23, 1)" }}>
              {value?.review.rating}
            </Typography>
          </Stack>

          <Typography variant="p" sx={{ color: "info.main" }}>
            {value?.classification} <br />
            {value?.brandName}
            <br />
            {value?.frameSize} <br />
            {value?.frameSizeUrl?.label}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default FilterCard;
