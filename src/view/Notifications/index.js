import React from "react";
import {  Container, Typography } from "@mui/material";
import NotificationCard from "../../Examples/NotificationCard";

const Notifications = () => {
  return (
    <Container>
      <Typography variant="h6" component="h3" sx={{ pl: 2 }}>
        Today
      </Typography>
      <NotificationCard />
      <NotificationCard />

      <Typography variant="h6" component="h3" sx={{ pl: 2 }}>
        Yesterday
      </Typography>
      <NotificationCard />
      <NotificationCard />

      <Typography variant="h6" component="h3" sx={{ pl: 2 }}>
        22 Jan, 2023
      </Typography>
      <NotificationCard />
      <NotificationCard />
    </Container>
  );
};

export default Notifications;