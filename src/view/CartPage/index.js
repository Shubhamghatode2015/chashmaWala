import { BorderAll } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const CartPage = () => {
  const commonStyles = {
    bgcolor: "primary.main",
    borderColor: "primary.main",
    mt: "1%",
    height: "3rem",
    width: "100%",
    p: 2,
  };

  return (
    <>
      <Box>
        <Container
          sx={{
            ...commonStyles,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ color: "white.main" }} flex={4}>
            Items
          </Typography>
          <Typography variant="h6" sx={{ color: "white.main" }} flex={1}>
            Quantity
          </Typography>
          <Typography variant="h6" sx={{ color: "white.main" }} flex={0}>
            Subtotal
          </Typography>
        </Container>
        <Container>
<Box></Box>
<Box>


  
</Box>


        </Container>
      </Box>
    </>
  );
};

export default CartPage;
