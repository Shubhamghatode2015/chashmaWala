import { Button, InputBase, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartCard from "../../Examples/CartCard";
import ResponsiveCartCard from "../../Examples/ResponsiveCartCard";
import WishCard from "../../Examples/WishCard";
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
            display: { xs: "none", md: "flex", xl: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ color: "white.main" }} flex={3}>
            Items
          </Typography>
          <Typography variant="h6" sx={{ color: "white.main" }} flex={1}>
            Quantity
          </Typography>
          <Typography variant="h6" sx={{ color: "white.main" }} flex={0}>
            Subtotal
          </Typography>
        </Container>

        <Container
          sx={{
            display: { xs: "flex", md: "none", xl: "none" },
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 1,
          mt: 5, mb: 5, 
          }}
        >
       
          {frameglass &&
            frameglass.length > 0 &&
            frameglass.map((value, index) => (
              <Box sx={{ height: 250, width: 185}}>
              <WishCard value={value?.data} key={value.id} rate={true} />
            </Box>
            ))}{" "}
        </Container>
        <Container sx={{ display: { xs: "none", md: "block", xl: "block" } }}>
          {frameglass &&
            frameglass.length > 0 &&
            frameglass
              .slice(0, 3)
              .map((value, index) => (
                <CartCard value={value?.data} key={index} />
              ))}

          <Box
            sx={{
              display: { xs: "none", md: "flex", xl: "flex" },
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
                gap: 1.2,
              }}
            >
              <Typography variant="h6" fontWeight={700} color="initial">
                DISCOUNT CODE
              </Typography>
              <InputBase
                placeholder="Coupon Code..."
                sx={{
                  outlineColor: "secondary.main",
                  outline: 1,
                  border: 1,
                  borderColor: "secondary.main",
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
                alignItems: "flex-end",
                width: "40%",
                gap: 1.2,
                p: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "75%",
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
                  width: "75%",
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
                  width: "75%",
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
                  width: "75%",
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
                color="secondary"
                sx={{
                  m: "0.3rem 0",
                  borderRadius: 5,
                  borderColor: "secondary.main",
                }}
                onClick={() => navigate("/checkout-page")}
              >
                <Typography
                  variant="subtitle"
                  sx={{ color: "primary.main", fontWeight: "700" }}
                >
                  Checkout
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              height: "20rem",
              width: "100%",
              display: { xs: "none", md: "block", xl: "block" },
            }}
          >
            {/* empty div for more space in page to footer */}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CartPage;
