import { Edit, KeyboardReturn, Widgets } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  InputAdornment,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import PaymentCard from "../../Examples/HistoryCard";
import Address2Card from "../../Examples/Address2Card";
import AddressCard from "../../Examples/AddressCard";
import HistoryCard from "../../Examples/HistoryCard";
import { Link } from "react-router-dom";

const OrderHistory = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexDirection: { xs: "column", md: "row", xl: "row" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "39%", xl: "39%" },
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 2,
          }}
        >
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "59%", xl: "59%" },
            display: "flex",
            flexDirection: "column",
            mt: 2,
            gap: 2, p: 1
          }}
        >
          <Card
            sx={{
              height: "35rem",
              width: "100%",
              bgcolor: " #F7F7F7",
              p: 2,
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box fullWidth sx={{ height: 250, width: 500 }}>
              <img
                src={require("../../assets/images/shraddha.jpg")}
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                alt="..."
              />
            </Box>
            <CardContent
              gutterBottom
              sx={{ width: "100%" }}
              component="div"
              align={"center"}
            >
              <Typography
                variant="subtitle2"
                sx={{ fontSize: 14, fontWeight: 400 }}
              >
                Brand Name
              </Typography>

              <Typography
                component="div"
                sx={{ fontSize: 18, fontWeight: 400 }}
              >
                Product Name Product
              </Typography>
              <Typography
                variant="subtitle2"
                component={"div"}
                sx={{ fontSize: 12, fontWeight: 400, py: 1 }}
              >
                Size - XS
              </Typography>
              <Box
                fullWidth
                sx={{
                  fontSize: 15,
                  color: "white.main",
                  bgcolor: "rgba(3, 149, 175, 0.57)",
                  textAlign: "start",
                  borderRadius: 2,
                  p: 1,
                  "&:hover": { bgcolor: "rgba(3, 149, 175, 0.57)" },
                }}
              >
                <Widgets sx={{ mr: 2, fontSize: 15 }} />
                Delivered
                <br />
                On Wed, 19 Oct
              </Box>
            </CardContent>
            <CardActions fullWidth>
              <Stack direction="row" spacing={4}>
                <Button
                  variant="container"
                  sx={{
                    color: "white.main",
                    bgcolor: "#0395AF",
                    "&:hover": { bgcolor: "#c2c2c2" },
                  }}
                  component={Link}
                  to={"/addPrescriptions-page"}
                >
                  Add presecption
                </Button>
                <Button
                  variant="container"
                  sx={{
                    width: "10rem",
                    color: "#000",
                    bgcolor: "#fff",

                    "&:hover": { bgcolor: "#c2c2c2" },
                  }}
                  startIcon={<KeyboardReturn />}
                >
                  Cancel
                </Button>
              </Stack>
            </CardActions>
          </Card>
          <AddressCard/>
          <Address2Card/>
          <Box fullWidth sx={{bgcolor:'rgba(3, 149, 175, 0.11)'}} p={1}>
     <TextField  fullWidth 
     label='Write Review'
     sx={{"& .MuiFilledInput-root": {
      background: "rgba(3, 149, 175, 0.11)"
    }}}
     InputProps={{
            endAdornment: <InputAdornment position="end"><Edit/></InputAdornment>,
            // startAdornment: <InputAdornment position="start">Write Review</InputAdornment>
            
          }}
          variant="standard"/>
          <br/>
          <Box>
      <Box sx={{display:"flex", justifyContent:"space-between", mt:2}}>
      <Rating name="no-value" value={null}/>
        <Button variant="contained" sx={{bgcolor:"rgba(3, 149, 175, 1)"}}>Post</Button>
      </Box>
      

          </Box>

    </Box>

        </Box>
      </Container>
    </>
  );
};

export default OrderHistory;
