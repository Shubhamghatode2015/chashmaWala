import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CategoryCard = ({ value , rate}) => {
  return (
    <>
      <Card
        sx={{
          width: 563,
          height: 150,
          display: "flex",
          alignItems: "center",
          boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Box sx={{ height: 170, width: 270, display: "contents" }}>
          <CardMedia
            image={value.img}
            sx={{ height: 100, width: 270 }}
            component="img"
          ></CardMedia>
        </Box>
        <CardContent sx={{ width: "100%" , fontWeight: `${rate? '600 ' : '400'}` }} component="div">
          <Typography variant="h5" align="center" >
            {value.id}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CategoryCard;
