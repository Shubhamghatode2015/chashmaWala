import React from "react";
import {
  CardActions,
  CardContent,
  Card,
  Box,
  Stack,
  Button,
  Typography,
  Checkbox,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  Circle,
  CircleOutlined,
  Favorite,
  FavoriteBorder,
  ShoppingCart,
  StarHalf,
} from "@mui/icons-material";
import { Container } from "@mui/system";

const WishCard = ({ value, rate, }) => {
  return (
    <>
      <Card
        sx={{
          width: "100%",
          boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.25)",
          height: "100%",

          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          alignItems: "center",
          // border: "1px solid #E3E8EE",
          border: 0.5, borderColor: 'gainsboro',
          position: "relative",
          pb: 0,
          pl: 1,
          pt: 1,
          pr: 1,
        }}
      >
        <Checkbox
          sx={{ position: "absolute", top: 0, right: 0, zIndex: 2 }}
          icon={<FavoriteBorder sx={{ color: "primary.main" }} />}
          checkedIcon={<Favorite sx={{ color: "primary.main" }} />}
        />

        <Box
          sx={{
            height: 100,
            width: "100%",
            p: 1,
            objectFit: "contain",
            position: "relative",
          }}
        >
          <Link to={`/product-page/${value.id}`}>
            <img
              src={value?.imageUrl}
              alt="......"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Link>
          <div
            style={{
              position: "absolute",
              backgroundColor: "rgba(217, 217, 217, 0.75)",
              bottom: "-10px",
              right: "-15px",
              width: " 70%",
              borderRadius: " 10px",
              height: "1.5rem",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 3,
            }}
          >
            <StarHalf sx={{ color: "#FFD708" }} />{" "}
            <Typography variant="body2" color="primary" fontWeight={600}>
              {" "}
              {value.review.rating} /5
            </Typography>
          </div>
        </Box>

        <CardContent
          sx={{ width: "100%", borderTop: "1px solid #E3E8EE", p: 0, mt: 1 }}
          align={"start"}
        >
          <Stack direction={"row"} spacing={2} justifyContent={'space-between'}>
            <Typography variant="body1" sx={{ fontWeight: 600 }} noWrap>
              {value?.brandName}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "primary.main",
                fontWeight: "600",
              }}
              whiteSpace={"noWrap"}
            >
              ₹ {value?.prices[0]?.price}
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={1}>
            <Circle sx={{ color: "black", fontSize: 15 }} />
            <Circle sx={{ color: "blue", fontSize: 15 }} />
            <CircleOutlined sx={{ fontSize: 15 }} />
          </Stack>
        </CardContent>
        {rate ? (
          <Button
            sx={{ width: "100%", m: 0 }}
            color="primary"
            variant="contained"
            size="large"
            component={Link}
            to={`/cart-page/${value.id}`}
          >
            Add to Card
          </Button>
        ) : (
          <Button
            sx={{ width: "100%", m: 0 }}
            color="primary"
            variant="contained"
            size="large"
            component={Link}
            to={`/cart-page/${value.id}`}
          >
            Add to Card
          </Button>
        )}
      </Card>
    </>
  );
};

export default WishCard;
