import { Box } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
import StoreCard from "../../Examples/StoreCard";
import { Container } from "@mui/system";

const StoresPage = () => {
  return (
 

      <Box
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </Box>

    
  );
};

export default StoresPage;
