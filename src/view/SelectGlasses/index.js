import {
  Step,
  StepLabel,
  Stepper,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BasicModal from "../../Components/Modal";
import SlectGlassCard from "../../Examples/SlectGlassCard";

const Index = () => {
  const steps = ["lens type", "eye power"];
  const [isClick, setIsClick] = useState(false);
  const [p1, setP1] = useState(false);
  const [p2, setP2] = useState(false);
  const [p3, setP3] = useState(false);
  const [p4, setP4] = useState(false);

  return (
    <>
      {!isClick ? (
        <Container
          sx={{ display: "flex", p: 3, gap: 3, flexDirection: "column" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              rowGap: 2,
            }}
          >
            <Box sx={{ width: "20rem" }}>
              <Stepper activeStep={1} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>

            <Box
              sx={{
                width: 215,
                height: "12rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: " 1px solid #928080",
                flexDirection: "column",
                borderRadius: 10,
                textAlign: "center",
              }}
            >
              <img
                src={require("../../assets/images/shraddha.jpg")}
                style={{ height: "4rem" }}
              />

              <Typography variant="h6" component={"div"} mt={1}>
                vincent Chase Polaried
              </Typography>
            </Box>

            <Stack direction={"row"} spacing={3}>
              <SlectGlassCard setIsClick={setIsClick} />
              <SlectGlassCard setIsClick={setIsClick} />
              <SlectGlassCard setIsClick={setIsClick} />
            </Stack>
          </Box>
        </Container>
      ) : (
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              rowGap: 5,
              p: 2,
            }}
          >
            <Box sx={{ width: "20rem" }}>
              <Stepper activeStep={1} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
            <Typography variant="h5" component={"div"} sx={{ fontWeight: 600 }}>
              Does it matter if I have eye power ?
            </Typography>
            <Box
              fullWidth
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Box
                sx={{
                  width: 220,
                  p: 1,
                  gap: 1,
                  height: "15rem",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                  border: " 1px solid #928080",
                  flexDirection: "column",
                  borderRadius: 5,
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  cursor: "pointer",
                  "&: hover": {
                    boxShadow:
                      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                  },
                }}
              >
                <img
                  src={require("../../assets/images/chashma.jpg")}
                  style={{ width: "100%", height: 120, objectFit: "contain" }}
                />

                <Typography variant="body1" fontWight={600} mt={1}>
                  vincent Chase Polaried
                </Typography>
              </Box>
              <Stack direction={"column"} spacing={3}>
                <Stack direction={"row"} spacing={2}>
                  {/* <Multi4 /> */}{" "}
                  <Box
                    sx={{
                      width: 210,
                      p: 1,
                      gap: 1,
                      height: "13rem",
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                      alignItems: "center",
                      border: " 1px solid #928080",
                      flexDirection: "column",
                      borderRadius: 5,
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      cursor: "pointer",
                      "&: hover": {
                        boxShadow:
                          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                      },
                    }}
                    onClick={() => setP1(true)}
                  >
                    <Box>
                      <img
                        src={require("../../assets/icons/1.png")}
                        alt="."
                        style={{ height: "2rem" }}
                      />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600 }} mt={1}>
                      Enter Manually
                    </Typography>
                    <Typography variant="body2" textAlign={"center"}>
                      Enter Your power details yourself
                    </Typography>
                  </Box>
                  {/* <Multi4 /> */}{" "}
                  <Box
                    sx={{
                      width: 210,
                      p: 1,
                      gap: 1,
                      height: "13rem",
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                      alignItems: "center",
                      border: " 1px solid #928080",
                      flexDirection: "column",
                      borderRadius: 5,
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      cursor: "pointer",
                      "&: hover": {
                        boxShadow:
                          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                      },
                    }}
                    onClick={() => setP2(true)}
                  >
                    <Box>
                      <img
                        src={require("../../assets/icons/2.png")}
                        alt="."
                        style={{ height: "2rem" }}
                      />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600 }} mt={1}>
                      Upload Photo
                    </Typography>
                    <Typography variant="body2" textAlign={"center"}>
                      Upload prescription from your phone
                    </Typography>
                  </Box>
                </Stack>
                <Stack direction={"row"} spacing={2}>
                  {/* <Multi4 /> */}
                  <Box
                    sx={{
                      width: 210,
                      p: 1,
                      gap: 1,
                      height: "13rem",
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                      alignItems: "center",
                      border: " 1px solid #928080",
                      flexDirection: "column",
                      borderRadius: 5,
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      cursor: "pointer",
                      "&: hover": {
                        boxShadow:
                          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                      },
                    }}
                    onClick={() => setP3(true)}
                  >
                    <Box>
                      <img
                        src={require("../../assets/icons/3.png")}
                        alt="."
                        style={{ height: "2rem" }}
                      />
                    </Box>
                    <Typography variant="body1" sx={{ fontWeight: 600 }} mt={1}>
                      I don’t know my power
                    </Typography>
                    <Typography variant="body2" textAlign={"center"}>
                      we will call you to take power after the order is placed
                    </Typography>
                  </Box>
                  {/* <Multi4 /> */}
                  <Box
                    sx={{
                      width: 210,
                      p: 1,
                      gap: 1,
                      height: "13rem",
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                      alignItems: "center",
                      border: " 1px solid #928080",
                      flexDirection: "column",
                      borderRadius: 5,
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      cursor: "pointer",
                      "&: hover": {
                        boxShadow:
                          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                      },
                    }}
                    onClick={() => setP4(true)}
                  >
                    <Box>
                      <img
                        src={require("../../assets/icons/4.png")}
                        alt="."
                        style={{ height: "2rem" }}
                      />
                    </Box>
                    <Typography variant="body1" fontWeight={600} mt={1}>
                      Home Eye Checkup
                    </Typography>
                    <Typography variant="body2" textAlign={"center"}>
                      Our team comes to your home and take your eye power
                    </Typography>
                  </Box>
                </Stack>
                <Stack direction={"column"}>
                  <FormControlLabel
                    label="Power can be submitted within 10 days of order placement"
                    control={
                      <Checkbox
                        icon={
                          <img
                            src={require("../../assets/images/done.png")}
                            alt="."
                            style={{ width: 25, height: 25 }}
                          />
                        }
                        checkedIcon={
                          <img
                            src={require("../../assets/images/unDone.png")}
                            alt="."
                            style={{ width: 25, height: 25 }}
                          />
                        }
                      />
                    }
                  />
                  <FormControlLabel
                    label="No additional charges for high /complex power"
                    control={
                      <Checkbox
                        icon={
                          <img
                            src={require("../../assets/images/done.png")}
                            alt="."
                            style={{ width: 25, height: 25 }}
                          />
                        }
                        checkedIcon={
                          <img
                            src={require("../../assets/images/unDone.png")}
                            alt="."
                            style={{ width: 25, height: 25 }}
                          />
                        }
                      />
                    }
                  />
                </Stack>
              </Stack>
            </Box>

            <Box sx={{ width: "55%", borderBottom: "2px solid #D9DBE9", p: 1 }}>
              <FormControlLabel
                label="I have read and understood terms of power submission"
                sx={{
                  color: "#0395AF",
                  textDecoration: "underline",
                  marginLeft: 10,
                }}
                control={
                  <Checkbox
                    icon={
                      <img
                        src={require("../../assets/images/done.png")}
                        alt="."
                        style={{ width: 30, height: 30 }}
                      />
                    }
                    checkedIcon={
                      <img
                        src={require("../../assets/images/unDone.png")}
                        alt="."
                        style={{ width: 30, height: 30 }}
                      />
                    }
                  />
                }
              />
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
              >
                <Typography variant="subtitle1">
                  <strong> SubTotal </strong> (Frame + Lens) :-
                  <Typography
                    component="span"
                    sx={{ color: "primary.main", fontWeight: "700" }}
                  >
                    {" "}
                    $789
                  </Typography>
                </Typography>
                <Button
                  component={Link}
                  to={"/cart-page"}
                  variant="contained"
                  sx={{ borderRadius: 5, bgcolor: "#0395AF", px: 3 }}
                >
                  I Agree
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      )}

      <BasicModal show={p1} unShow={setP1}>
        Enter Manually
      </BasicModal>
      <BasicModal show={p2} unShow={setP2}>
        Upload Photo
      </BasicModal>
      <BasicModal show={p3} unShow={setP3}>
        I don’t know my power
      </BasicModal>
      <BasicModal show={p4} unShow={setP4}>
        Home Eye Checkup
      </BasicModal>
    </>
  );
};

export default Index;
