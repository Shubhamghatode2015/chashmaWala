import React from "react";

import { Box } from "@mui/system";
import img1 from "../../assets/images/Background.png";

const Index = ({ children }) => {
  return (
    <>
      <Box
        fullWidth
        sx={{
          height: "100vh",
          // bgcolor: " #0395AF",
          backgroundImage: `url(${img1})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100%",
          backgroundColor: "gray",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
        
      </Box>
    </>
  );
};

export default Index;
