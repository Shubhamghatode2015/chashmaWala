import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";


import { Brightness1 } from "@mui/icons-material";
import { border, Box } from "@mui/system";

const ColorCard = ({ value }) => {
  // console.log(value);
  return (
    <>
      <Card
        sx={{
          width: 165,
          border: "1px solid #D3D3D3",
          boxShadow: "0px 7px 0px rgba(0, 0, 0, 0.25)",
          borderRadius: 3,
          height: 200,
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
        }}
      >
        <CardMedia
          sx={{ height: "60%", width: "100%", pt: 3 }}
          image={value?.imageUrl && value?.imageUrl.length> 0 ? value?.imageUrl[0] : value?.imageUrl}
          title="green iguana"
        />
        <CardContent align="center" sx={{ p: 0 }}>
          <Typography gutterBottom component="div" sx={{ fontSize: 11 }}>
          {value?.brandName}
       
          </Typography>
          <Typography gutterBottom component="div" sx={{ fontSize: 11 }}>
          {value?.modelName}
       
          </Typography>
        </CardContent>
        <CardContent
          sx={{
            p: 0,
            pb: "0!Important",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              fontSize: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Brightness1
              sx={{
                width: 21,
                height: 21,
                border: "1px solid #916A49",
                borderRadius: "50%",
                color: "#916A49",
                m: 1,
              }}
            />
            Brown
          </Box>

          <Box
            sx={{
              background: "#EBE7FF",
              borderRadius: "15px 0px 8px 0px",
              p: 1,
             
            }}
          >
            ₹128
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default ColorCard;
