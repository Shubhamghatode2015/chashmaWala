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
          height: "8rem",
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
            sx={{ widht: 50, height: 50 }}
            src="/static/images/avatar/1.jpg"
          />
          {/* <img src={'logo'} sx={{ p: 1, m: 1 }} /> */}
          <CardContent>
            <Typography variant="h6" component="h5">
              On minimum purchase of Rs. 1000
            </Typography>
            <Typography>Code: LEVISB2G30</Typography>
            <Typography>Expiry: NOV 30 2022 I 11:59:00 P.M</Typography>
          </CardContent>
        </Box>

        <CardContent sx={{ alignItems: "center", display: "flex" }}>
          <Button
            variant="outlined"
            sx={{ outlineColor: "black", color: "black" }}
          >
            Select
          </Button>
        </CardContent>
      </Card>
      {/* <Typography variant='h4' component='h1' >
    Gallery
    </Typography> */}
    </Container>
  );
};

export default MyCouponsCard;
