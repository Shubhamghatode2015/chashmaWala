import { Button, InputBase, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartCard from "../../Examples/CartCard";
import { fatchFrameglasses } from "../../redux/festures/framekartSlice";

const CartPage = () => {
  const commonStyles = {
    bgcolor: "primary.main",
    borderColor: "primary.main",
    mt: "1%",
    height: "3rem",
    width: "100%",
    p: 2,
  };
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { frameglass } = useSelector((state) => ({
    ...state.framekartData,
  }));

  useEffect(() => {
    dispatch(fatchFrameglasses());
  }, [dispatch]);
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

          {
            frameglass && frameglass.length> 0 && 
            frameglass.slice(0 ,3 ).map((value, index)=>(
              <CartCard value={value} key={index} />

            ))
          }
        

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mt: 5,
             
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h6" fontWeight={700} color="initial">
                DISCOUNT CODE
              </Typography>
              <InputBase
                placeholder="Coupon Code..."
                sx={{
                  outlineColor: "primary.main",
                  outline: 1,
                  border: 1,
                  borderColor: "primary.main",
                  pl: 1,
                  m: "0.3rem 0",
                }}
              />
              <Button variant="contained" color="primary">
                <Typography variant="subtitle" sx={{ color: "white.main" }}>
                  APPLY CODE
                </Typography>
              </Button>
            </Box>

            <Box
              style={{ borderTop: "3px solid", borderColor: "#57A2F9" }}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "flex-start",
                width: "30%",
                p: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Typography variant="subtitle" fontWeight={700} color="initial">
                  Subtotal
                </Typography>
                <Typography variant="subtitle" fontWeight={700} color="initial">
                  $282.65
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Typography variant="subtitle" fontWeight={700} color="initial">
                  Shipping
                </Typography>
                <Typography variant="subtitle" fontWeight={700} color="initial">
                  $6
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Typography variant="subtitle" fontWeight={700} color="initial">
                  Discount
                </Typography>
                <Typography variant="subtitle" fontWeight={700} color="initial">
                  $10
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Typography variant="subtitle" fontWeight={700} color="initial">
                  Total
                </Typography>
                <Typography variant="subtitle" fontWeight={700} color="initial">
                  $6
                </Typography>
              </Box>

              <Button
                variant="outlined"
                color="primary"
                sx={{ m: "0.3rem 0" }}
                onClick={() => navigate("/checkout-page")}
              >
                <Typography variant="subtitle" sx={{ color: "primary.main" }}>
                  Checkout
                </Typography>
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CartPage;
