import { Avatar, Card, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import CardContent from "@mui/material/CardContent";

import CallIcon from "@mui/icons-material/Call";
import Button from "@mui/material/Button";

const MyCouponsCard = () => {
  return (
    <Container sx={{ m: "1%" }}>
      <Card
        sx={{
          display: "flex",
          height: {xs:"auto",md:"8rem"},
          width: "100%",
          p: 1,
          justifyContent: "space-between",
        }}
      >
        <Box
          sm={12}
          lg={6}
          sx={{ display: "flex", height: "100%", alignItems: "center" }}
        >
          <Avatar
            alt="Remy Sharp"
            sx={{ width: {sm:50,md:80}, height: {sm:50,md:80} }}
            src="/static/images/avatar/1.jpg"
          />
          {/* <img src={'logo'} sx={{ p: 1, m: 1 }} /> */}
          <CardContent>
            <Typography
              variant="h6"
              component="h5"
              sx={{
                fontSize: {
                  lg: 30,
                  md: 22,
                  sm: 18,
                  xs: 15,
                },
              }}
            >
              On minimum purchase of Rs. 1000
            </Typography>
            <Typography
            sx={{
              fontSize: {
                lg: 28,
                md: 20,
                sm: 15,
                xs: 12,
              },
            }}
          >Code: LEVISB2G30</Typography>
            <Typography 
            sx={{
              fontSize: {
                lg: 28,
                md: 20,
                sm: 15,
                xs: 12,
              },
            }}
          >
            Expiry: NOV 30 2022 I 11:59:00 P.M</Typography>
          </CardContent>
        </Box>

        <CardContent sx={{ alignItems: "center", display: "flex" }}>
          <Button
            variant="outlined"
            sx={{ outlineColor: "black", color: "black",
          fontSize:{xs:10,
          sm:15,
        md:20,
      lg:25}}}
          >
            Select
          </Button>
        </CardContent>
      </Card>
    
    </Container>
  );
};

export default MyCouponsCard;