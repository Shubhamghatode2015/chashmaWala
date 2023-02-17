import React from "react";
// import MyCouponsCard from "../../Components/MyCouponsCard";
import { Box, Container } from "@mui/system";
import { Typography } from "@mui/material";
import MyCouponsCard from "../../Examples/MyCouponsCard";
const MyCoupons = () => {
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            width: "5rem",
            height: "1rem",
            backgroundColor: "#EDD054",
            m: "1rem",
          }}
        ></Box>
        <Typography variant="h4" color="initial">
          {" "}
          My Coupons
        </Typography>

        <Box
          sx={{
            width: "5rem",
            height: "1rem",
            backgroundColor: " #0395AF",
            m: "1rem",
          }}
        ></Box>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <MyCouponsCard />
        <MyCouponsCard />
        <MyCouponsCard />
        <MyCouponsCard />
      </Box>
    </>
  );
};

export default MyCoupons;
