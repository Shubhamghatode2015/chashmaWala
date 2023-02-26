import {
    Circle,
    CircleOutlined,
    Delete,
    Favorite,
    FavoriteBorder,
    StarBorder,
    StarHalf,
  } from "@mui/icons-material";
  import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Checkbox,
    Stack,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import React from "react";
import { Link } from "react-router-dom";
  
  const ResponsiveCartCard = ({ value }) => {
      // console.log(value)
    return (
      <>
        <Card
        sx={{
          width: 230,
          boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.25)",
          height: 300,
          p: 1,
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid #E3E8EE",
        }}
      >
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <Checkbox
            icon={<FavoriteBorder sx={{ color: "primary.main" }} />}
            checkedIcon={<Favorite sx={{ color: "primary.main" }} />}
          />
        </Box>
        <Box
          sx={{
            height: 130,
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
              alignItems: "center",gap: 3
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
          sx={{ width: "100%", borderTop: "1px solid #E3E8EE" }}
          align={"start"}
        >
          <Stack direction={"row"} spacing={2}>
            <Typography
              gutterBottom
              variant="body1"
              sx={{ fontWeight: 600 }}
              noWrap
            >
              {value?.brandName}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "primary.main",
                fontWeight: "600",
              }}
            >
              ₹ {value?.prices[0]?.price}
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={1}>
            <Circle sx={{ color: "black", fontSize: 18 }} />
            <Circle sx={{ color: "blue", fontSize: 18 }} />
            <CircleOutlined sx={{ fontSize: 18 }} />
          </Stack>
        </CardContent>

        <Button
          sx={{ width: "100%" }}
          color="primary"
        endtIcon={<Checkbox
                           sx={{
                             bgcolor: "#c2c2c2",
                             "&:hover": { bgcolor: "#c2c2c2" },
                             borderRadius: 0,
                           }}
                           icon={<Delete sx={{ color: "primary.main" }} />}
                           checkedIcon={<Delete sx={{ color: "primary.main" }} />}
                         />}
          variant="contained"
          size="large"
        //   component={Link}
        //   to={`/cart-page/${value.id}`}
        >
         Buy now
        </Button>
      </Card>
      </>
    );
  };
  
  export default ResponsiveCartCard;
  
//   