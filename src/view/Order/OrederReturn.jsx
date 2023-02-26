import React from "react";

import {
  Avatar,
  Container,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
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
          mt: 3,
        }}
      >
        <img src={logo} alt="." />
      </Box>
      <Container>
        <Typography
          variant="h5"
          component="h3"
          sx={{ display: "flex", fontSize: 20,  }}
        >
          Choose a reason for returning this order
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox color="info" />}
            label="got it somewhere else
          more cheaper."
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label=" Dosen’t fits me."
          />

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Not same as shown."
          />

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="  Got a wrong product.
      "
          />
        </FormGroup>
     

        <Button color="primary" variant="contained">
          Submit
        </Button>
      </Container> 
      <Box height={'10rem'} ></Box>
    </>
  );
};

export default OrederReturn;
