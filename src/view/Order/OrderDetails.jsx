import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Hidden,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartCard from "../../Examples/CartCard";
import { fatchFrameglasses } from "../../redux/festures/framekartSlice";

const OrderDetails = () => {


  const dispatch = useDispatch();
  const { frameglass } = useSelector((state) => ({
    ...state.framekartData,
  }));

  useEffect(() => {
    dispatch(fatchFrameglasses());
  }, [dispatch]);
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
        flexDirection:{xs:"column",sm:"column" ,md:"row"}
      }}
    >
      <Box
        sx={{
          alignItems: "flex-end",
          display: "flex",
          flexDirection: "column",
          width: {sm:"100",md:"62%"}, pr: 2,
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
          
        {
            frameglass && frameglass.length> 0 && 
            frameglass.slice(0 ,3 ).map((value, index)=>(
              <CartCard value={value?.data} key={index} />

            ))
          }
      
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              width: "100%",
              mt: 5,
            }}
          >
            <Hidden only={['xs','sm']}>
            <Box 
              style={{ borderTop: "3px solid", borderColor: "#57A2F9" }}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "flex-end",
                width: "65%", gap: 1.2,
                p: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: " 55%",
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
                  width: " 55%",
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
                  width: " 55%",
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
                  width: " 55%",
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
              <Box width={" 55%" } >
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
                    width: "auto",
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
                color="secondary"
                sx={{ m: "0.3rem 0"  , borderRadius: 5, borderColor: 'secondary.main'}}
                onClick={() => navigate("/orderDetails-page")}
              >
                <Typography variant="subtitle" sx={{ color: "primary.main" , fontWeight: '700'}}>
                PLACE ORDER
                </Typography>
              </Button>
             
            </Box>
            </Hidden>
            
          </Box>
        </Container>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width:{sm:"100%",md:"35%" }}}>
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


      <Hidden only={['md', 'lg']}>
            <Box 
              style={{ borderTop: "3px solid", borderColor: "#57A2F9" }}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "flex-end",
                width: "100%",
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
            </Hidden>
    </Box>
  );
};

export default OrderDetails;