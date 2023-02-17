import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import CartCard from "../../Examples/CartCard";

const OrderDetails = () => {
  const navigate = useNavigate();
  const commonStyles = {
    bgcolor: "primary.main",
    borderColor: "primary.main",
    mt: "1%",
    height: "3rem",
    width: "100%",
    p: 2,
  };
  return (
    <Box
      sx={{
        p: 5,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <Box
        sx={{
          alignItems: "flex-end",
          display: "flex",
          flexDirection: "column",
          width: "69%",
        }}
        style={{ borderRight: "1px solid #000" }}
      >
        <Typography variant="h4" fontWeight={700} color="initial">
          YOUR ORDERS
        </Typography>
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
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              width: "100%",
              mt: 5,
            }}
          >
            <Box
              style={{ borderTop: "3px solid", borderColor: "#57A2F9" }}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "flex-end",
                width: "45%",
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
              <Box width={"100%"}>
                <Typography
                  color="secondary"
                  sx={{
                    fontWeight: "700",
                    padding: "0",
                    margin: "0",
                  }}
                >
                  PAYMENT METHOD
                </Typography>
                <FormControl
                  style={{
                    display: "flex",
                    padding: "0",
                    margin: "0",
                    width: "100%",
                    flexDirection: "row",
                  }}
                >
                  <RadioGroup
                    row
                    style={{ display: "flex", flexDirection: "row" }}
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Digital Payment"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Cash On Delivery"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Button
                variant="outlined"
                color="primary"
                sx={{ m: "0.3rem 0" }}
                onClick={() => navigate("/orderDetails-page")}
              >
                PLACE ORDER
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "30%" }}>
        <Typography variant="h4" fontWeight={700} color="initial">
          BILLING DETAILS
        </Typography>
        <Typography
          variant="subtitle2"
          fontWeight={400}
          color="info"
          textTransform={"capitalize"}
        >
          Please fill the details carefully.
        </Typography>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "15ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="standard-required"
              label="FIRST NAME"
              type="text"
              variant="standard"
            />
            <TextField
              required
              id="standard-required"
              label="MIDDLE NAME"
              type="text"
              variant="standard"
            />
            <TextField
              required
              id="standard-required"
              label="LAST NAME"
              type="text"
              variant="standard"
            />
            <br />
            <TextField
              required
              id="standard-required"
              label="COUNTRY/REGION"
              variant="standard"
              type="text"
            />
            <TextField
              required
              id="standard-required"
              label="STATE/ZONE"
              variant="standard"
              type="text"
            />
            <TextField
              required
              id="standard-required"
              label="TOWN/CITY"
              variant="standard"
              type="text"
            />
            <TextField
              id="standard-number"
              label="CONTACT"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
            />
            <TextField
              required
              fullWidth
              width={" 25vw"}
              id="standard-required"
              label="STREET ADDRESS"
              type="text"
              variant="standard"
            />
            <br />
            <TextField
              required
              fullWidth
              width={" 25vw"}
              id="standard-required"
              variant="standard"
              label="EMAIL"
              type="email"
            />
            <br />
            <FormControlLabel
              value="male"
              control={<Checkbox />}
              label="Terms  and Condition"
            />
            <Typography variant="body1" color="initial">
              Please go through our company policy in FAQ. Our company
              thoroughly check sand is strict on claims regarding returns and
              exchange. Goods cannot be resold. If you agree these conditions
              please tick out the checkbox.
            </Typography>
            <Button variant="text" fontWight={700} color="primary">
              Our Policy
            </Button>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderDetails;
