import { Brightness1 } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
  Button,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { useState } from "react";
import Index from ".";
// import Multistep from "../../components/Multistep";

const SelectGlass = () => {
  const [isClick, setIsClick] = useState(false);
  const steps = ["", "lens type", "eye power"];
  return (
    <>
      {isClick ? (
        <Index />
      ) : (
        <Container>
          <Box
            sx={{
              gap: 3,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography gutterbottom variant="h5" component={"div"} p={2}>
              Select Glasses
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              sx={{ color: "info.main" }}
            >
              Please fill the form below to receive a quote for your <br />{" "}
              project. Feel free to add as much detail as needed.
            </Typography>
            <Box sx={{ width: "40rem" }}>
              <Stepper activeStep={1} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Box>
          {/* <Multistecfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfp /> */}

          <Container sx={{ mt: 5 }}>
            <Stack
              direction={"row"}
              spacing={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card
                sx={{
                  width: 400,
                  height: 500,
                  border: "1px solid #EFF0F7",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.32)",
                  borderRadius: "34px",
                }}
              >
                <Box
                  sx={{
                    width: 300,
                    border: "1px solid #D3D3D3",
                    borderRadius: 3,
                    height: "16rem",
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    sx={{ height: 200, width: "100%", pt: 5 }}
                    image={require("../../assets/images/chashma.jpg")}
                    title="fremkart"
                  />

                  <CardContent align="center">
                    <Typography component="div" variant="subtitle1">
                      vincent Chase Polaried
                    </Typography>
                    <Box
                      sx={{
                        fontSize: 14,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Brightness1
                        sx={{
                          width: 30,
                          height: 30,
                          border: "1px solid #916A49",
                          borderRadius: "50%",
                          color: "#916A49",
                          m: 1,
                        }}
                      />
                      Brown
                    </Box>
                  </CardContent>
                </Box>
              </Card>

              {/* --------------------------2------------------------ */}
              <Card
                sx={{
                  width: 400,
                  height: 500,
                  p: 1,
                  border: "1px solid #EFF0F7",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.32)",
                  borderRadius: "34px",
                }}
              >
                <Stack direction={"column"} spacing={2} sx={{ p: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      borderRadius: 5,
                      height: "8rem",
                      "&: hover": {
                        bgcolor: "#0395AF",
                      },
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "8rem",
                        width: "100%",
                      }}
                    >
                      <CardMedia
                        sx={{
                          width: "75%",
                          height: "5rem",
                          objectFit: "contain",
                        }}
                        image={require("../../assets/images/p1.png")}
                      />
                    </Box>

                    <CardContent sx={{ pb: 0, p: 0 }}>
                      <Box
                        sx={{
                          background: "#EBE7FF",
                          borderRadius: "0px 15px",
                          float: "right",
                          p: 1,
                        }}
                      >
                        ₹128
                      </Box>

                      <Typography variant="body" p={"5px"}>
                        Single Vision
                      </Typography>
                      <Typography variant="subtitle2" sx={{ fontSize: 11 }}>
                        with a single prescription across the whole lens
                        surface, for near or distance vision correction.
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      borderRadius: 5,
                      height: "8rem",
                      "&: hover": {
                        bgcolor: "#0395AF",
                      },
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "8rem",
                        width: "100%",
                      }}
                    >
                      <CardMedia
                        sx={{
                          width: "75%",
                          height: "5rem",
                          objectFit: "contain",
                        }}
                        image={require("../../assets/images/p2.png")}
                      />
                    </Box>

                    <CardContent sx={{ pb: 0, p: 0 }}>
                      <Box
                        sx={{
                          background: "#4C4B4E",
                          color: "white.main",
                          borderRadius: "0px 15px",
                          float: "right",
                          p: 1,
                        }}
                      >
                        ₹128
                      </Box>
                      <Typography variant="body1" p={"5px"}>
                        Progressive
                      </Typography>
                      <Typography variant="subtitle2" sx={{ fontSize: 11 }}>
                        with a single prescription across the whole lens
                        surface, for near or distance vision correction.
                      </Typography>
                    </CardContent>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      borderRadius: 5,
                      height: "8rem",
                      "&: hover": {
                        bgcolor: "#0395AF",
                      },
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "8rem",
                        width: "100%",
                      }}
                    >
                      <CardMedia
                        sx={{
                          width: "75%",
                          height: "5rem",
                          objectFit: "contain",
                        }}
                        image={require("../../assets/images/p3.png")}
                      />
                    </Box>

                    <CardContent sx={{ pb: 0, p: 0 }}>
                      <Box
                        sx={{
                          background: "#EBE7FF",
                          borderRadius: "0px 15px",
                          float: "right",
                          p: 1,
                        }}
                      >
                        ₹128
                      </Box>

                      <Typography variant="body1" p={"5px"}>
                        Screen glasses
                      </Typography>
                      <Typography variant="subtitle2" sx={{ fontSize: 11 }}>
                        with a single prescription across the whole lens
                        surface, for near or distance vision correction.
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      height: "1rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Typography variant="body1" color="initial">
                      subtotal :
                    </Typography>
                    <Typography
                      variant="body1"
                      color="initial"
                      fontWeight={600}
                    >
                      2345
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => setIsClick(true)}
                    >
                      Next
                    </Button>
                  </Box>
                </Stack>
              </Card>
            </Stack>
          </Container>
        </Container>
      )}
    </>
  );
};

export default SelectGlass;
