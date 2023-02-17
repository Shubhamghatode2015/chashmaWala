import React from "react";

import { Avatar, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import logo from "../../assets/images/banners/image 2411.png";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const OrederReturn = () => {
  return (
    <>
      <Box
        variant=" contained"
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: 300,
        }}
      >
        <img src={logo} alt='.' />
      </Box>
      <Container >
        <Typography
          variant="h5"
          component="h3"
          sx={{ display: "flex", fontSize: 20, pl: 2 }}
        >
          Choose a reason for returning this order
        </Typography>
        <Typography variant="h6" component="h5" sx={{ fontSize: 16 }}>
          <Checkbox {...label} Checked color="info" />I got it somewhere else
          more cheaper.
        </Typography>
        <Typography variant="h6" component="h5" sx={{ fontSize: 16 }}>
          <Checkbox {...label} Checked />
          Dosen’t fits me.
        </Typography>
        <Typography variant="h6" component="h5" sx={{ fontSize: 16 }}>
          <Checkbox {...label} Checked color="primary" />
          Not same as shown.
        </Typography>
        <Typography variant="h6" component="h5" sx={{ fontSize: 16 }}>
          <Checkbox {...label} Checked color="primary" />
          Got a wrong product.
        </Typography>
        <Typography sx={{ display: "flex", p: 2 }}>
          <Button
            sx={{ backgroundColor: "var(--color-text)" }}
            variant="contained"
          >
            Submit
          </Button>
        </Typography>
      </Container>
    </>
  );
};

export default OrederReturn;
