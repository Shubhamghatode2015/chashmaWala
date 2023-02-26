import React from "react";
import { Avatar, Card, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import CardContent from "@mui/material/CardContent";
// import logo from "../img/notification.png";
import CallIcon from "@mui/icons-material/Call";
import Button from "@mui/material/Button";

const NotificationCard = () => {
  return (
    <Container sx={{ p: "1%" }}>
    <Card
      sx={{
        display: "flex",
        height: "5rem",
        width: "100%",
        p: 1,
        justifyContent: "space-between",
      }}
    >
      <Box
        sm={12}
        lg={6}
        sx={{ display: "flex", width: "%", height: "100%", alignItems: 'center' }}
      >
      <Avatar
            alt="Remy Sharp"
            sx={{ widht: 50, height: 50 }}
            src="/static/images/avatar/1.jpg"
          />
        <CardContent
          sx={{
            alignItems: "left",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontWeight: 600 }}>
            New collection alert
          </Typography>
          <Typography sx={{ fontSize: ".9rem" }}>
            New collection has been added
          </Typography>
        </CardContent>
      </Box>
    </Card>
  </Container>
  )
}

export default NotificationCard