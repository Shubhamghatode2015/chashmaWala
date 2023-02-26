import {
    Circle,
    CircleOutlined,
    Favorite,
    FavoriteBorder,
    StarBorder,
  } from "@mui/icons-material";
  import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Checkbox,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import { Add, Remove } from "@mui/icons-material";
  import React from "react";
  import Delete from "@mui/icons-material/Delete";
  
  const MobiWishlistcard = ({ value }) => {
    //   console.log(value)
    return (
      <>
        <Card
          sx={{
            width: 180,
            borderRadius: 1.5,
            border: "1px solid",
            borderColor: "info.main",
            bgcolor: "transparent",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "right",
            }}
          >
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "black" }} />}
            />
          </Box>
  
          <CardMedia
            sx={{ height: 80, m: 0 }}
            image={value?.imageUrl}
            title="Ank"
          />
          <CardContent sx={{ p: 0.4 }}>
            <Box
              className="ratting"
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "end",
                width: "100%",
                m: 0,
                p: 0,
              }}
            >
              <Typography
                sx={{
                  fontSize: 8,
                  textAlign: "center",
                  alignItems: "center",
                  backgroundColor: "#e0e0e0",
                  display: "flex",
                  width: "50%",
                  pr: 0,
                  borderRadius: "12px 0 0 12px",
                }}
                gutterBottom
                variant="h5"
                component="div"
              >
                <StarBorder fontSize="small" />
                {value.review.rating}/5
              </Typography>
            </Box>
  
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 3,
              }}
            >
              <Typography
                sx={{ color: "secondary.main", fontSize: 18 }}
                noWrap="true"
              >
                {value.brandName}
              </Typography>
  
              <Typography sx={{ color: "primary.main", fontSize: 18 }}>
                {value.prices[1].price}
              </Typography>
            </Box>
            <Box>
              <Circle sx={{ color: "black", fontSize: 18 }} />
              <Circle sx={{ color: "blue", fontSize: 18 }} />
              <CircleOutlined sx={{ fontSize: 18 }} />
            </Box>
          </CardContent>
          <Button
            sx={{
              width: "100%",
              color: "white.main",
              "&: hover": {
                bgcolor: "primary.main",
                color: "white.main",
              },
              bgcolor: "primary.main",
            }}
            size="large"
          >
            Add to cart
          </Button>
  
          {/* <Box display="flex" width="80%" sx={{ color: "secondary.main" }} flex={1}>
                <Button aria-label="remove" size="small" variant="text">
                  <Remove
                    fontSize="inherit"
                    sx={{ fontSize: "1.5rem", color: "info.main" }}
                  />
                </Button>
                <Button aria-label="add" size="small" color="info">
                  0
                </Button>
                <Button aria-label="add" size="small" variant="text">
                  <Add
                    fontSize="inherit"
                    sx={{ fontSize: "1.5rem", color: "info.main" }}
                  />
                </Button>
              
              </Box>
                  <Button
                  sx={{
                      width: "100%",
                      color: "black",
                      "&: hover": {
                        bgcolor: "primary.main",
                        color: "black",
                      },
                      bgcolor: "primary.main",
                    }}  size="large"   >
                  <Delete /> Delete
                  </Button> */}
        </Card>
      </>
    );
  };
  
  export default MobiWishlistcard;