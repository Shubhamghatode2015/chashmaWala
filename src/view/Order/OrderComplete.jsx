import React from "react";
import Container from "@mui/material/Container";
import { Box, Stack } from "@mui/system";
import StepperCard from "../../Examples/StepperCard";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  FormControl,
  Hidden,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  useMediaQuery,
} from "@mui/material";
import SelectInput from "@mui/material/Select/SelectInput";
import AddressCard from "../../Examples/AddressCard";
import Address2Card from "../../Examples/Address2Card";
import { Brightness1, Email, EmojiEmotions, Phone } from "@mui/icons-material";
import { Link } from "react-router-dom";
import HistoryCard from "../../Examples/HistoryCard";

const OrderComplete = () => {
  const [age, setAge] = React.useState("");
  const matches = useMediaQuery("(max-width:870px)");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      {!matches ? (
        <Container maxWidth="lg">
          <Box
            sx={{
              p: 5,
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              height: "20rem",
            }}
            style={{ border: "0.5px solid rgb(205 205 205)" }}
          >
            <Typography variant="h6"  fontWeight={500}color="initial">
              Your order number 1021 is placed will be delivered by 29 November
              2022
            </Typography>
            <StepperCard />
            <Typography  color="initial" variant="body1"  fontWeight={500}>
              Any Concern help or feedback contact as :
              Framakartofficail@gmail.com +918485034538308
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              mt: 3,
              height: "10rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center'}} >

            <Typography
              variant="h3"
              sx={{ fontSize: "53px", LineHeight: "79.5px" }}
              color="initial"
              fontWeight={700}
            >
              ORDER COMPLETE !{" "}
            </Typography>
              <img src={require('../../assets/images/tick.png')}
               
                style={{ height: "53px", color: "primary.main" , marginLeft: '0.3rem'}} alt='.'
                
              />
            </Box>
            <Button
              variant="outlined"
              color="info"
              size="large" component={Link} to={'/home-page'}
              sx={{ borderRadius: 15, p: 2, height: "63px", width: "312px" }}
            >
              <img
                src={require("../../assets/icons/text.png")}
                alt=".."
                style={{ height: "20px" }}
              />
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 1,
                mt: 5,
                width: "100%",
                height: "100%",
              }}
            >
              <Box
                style={{
                  border: "0.3px solid  rgb(205 205 205)",
                  borderRadius: "12px",
                  padding: "1rem",
                  width: "55%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "20rem",
                  textAlign: "center",
                }}
              >
                <div>
                  <img
                    src={require("../../assets/images/chashma.jpg")}
                    alt="..."
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "contain",
                    }}
                  />
                  <Typography variant="h5" color="initial" fontWeight={600}>
                    vincent Chase Polaried
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Brightness1
                      sx={{
                        width: 21,
                        height: 21,
                        border: "1px solid red",
                        borderRadius: "50%",
                        color: "red",
                        m: 1,
                      }}
                    />
                    <Typography
                      variant="body1"
                      color="initial"
                      fontWeight={600}
                    >
                      Red
                    </Typography>
                  </div>
                </div>
                <div>
                  <Typography variant="body" color="initial" component={"div"}>
                    p98sdrbpua9ehf
                  </Typography>

                  <Typography variant="body" color="initial" component={"div"}>
                    With Brown Thin
                  </Typography>
                </div>
              </Box>
              <Box
                style={{
                  border: "0.3px solid  rgb(205 205 205)",
                  borderRadius: "12px",
                  width: "38%",
                  padding: "0.8rem",

                  height: "20rem",
                }}
              >
                <Stack direction={"column"} spacing={3}>
                  <Stack direction={"row"} spacing={2}>
                    <Box flex={1}></Box>
                    <Typography
                      variant="body1"
                      color="initial"
                      minWidth={102}
                      sx={{ textDecoration: "underline" }}
                    >
                      Left Eye
                    </Typography>
                    <Typography
                      variant="body1"
                      color="initial"
                      minWidth={102}
                      sx={{ textDecoration: "underline" }}
                    >
                      Right Eye
                    </Typography>
                  </Stack>

                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="body1"
                      color="initial"
                      flex={1}
                      fontWeight={700}
                    >
                      sperical
                    </Typography>

                    <FormControl sx={{ m: 1, minWidth: 102 }} size="small">
                      <InputLabel id="demo-select-small">Age</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 102 }} size="small">
                      <InputLabel id="demo-select-small">Age</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>

                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="body1"
                      color="initial"
                      flex={1}
                      fontWeight={700}
                    >
                      Cylendrical
                    </Typography>

                    <OutlinedInput
                      inputProps={{
                        style: {
                          padding: 8,
                          width: "85px",
                          height: "30px",
                        },
                      }}
                    />

                    <OutlinedInput
                      inputProps={{
                        style: {
                          padding: 8,
                          width: "85px",
                          height: "30px",
                        },
                      }}
                    />
                  </Stack>

                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="body1"
                      color="initial"
                      flex={1}
                      fontWeight={700}
                    >
                      Axis
                    </Typography>
                    <FormControl sx={{ m: 1, minWidth: 102 }} size="small">
                      <InputLabel id="demo-select-small">Age</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 102 }} size="small">
                      <InputLabel id="demo-select-small">Age</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Box flex={1}></Box>
                    <FormControl sx={{ m: 1, minWidth: 102 }} size="small">
                      <InputLabel id="demo-select-small">Age</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 102 }} size="small">
                      <InputLabel id="demo-select-small">Age</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>
                </Stack>
              </Box>
            </Box>

            <Stack direction={"row"} spacing={2} width={"100%"} marginTop={3}>
            
                <Box flex={4}
                  maxWidth="lg"
                  sx={{
                    border: "2px solid rgba(35, 35, 35, 0.3)",

                    borderRadius: 2,
                  }}
                  p={2}
                >
                  <Stack direction={"column"}>
                    <Typography
                      variant="h5"
                      
                     fontWeight={700}
                    >
                      Delivery Address
                    </Typography>
                    <Typography variant="h6" fontWeight={600}>Saurabh Singh</Typography>
                    <Typography variant="body2">
                      2/1 ICICI Bank in front of railway colony Near DRM office,
                    </Typography>
                    <Typography variant="body2">
                      {" "}
                      BHOPAL - 462024, Madhya Pradesh
                    </Typography>
                    <Stack direction={"row"} spacing={2} mt={2}>
                      <Typography
                        variant="boddy1"
                        sx={{ fontWeight: "600" }}
                      >
                        Phone number{" "}
                      </Typography>
                      <Typography variant="subtitle1"> 9341458995</Typography>
                    </Stack>
                  </Stack>
                </Box>
              
              <Box>
                <Box
                  sx={{
                    border: "1px solid rgba(35, 35, 35, 0.3)",
                    borderRadius: 2,
                    height: "12rem",
                  }}
                  p={2}
                >
                  <Stack direction={"column"} spacing={3}>
                    <Typography variant="h6" fontWeight={600}>Updates sent to</Typography>
                    <Stack  direction={"column"} spacing={2} >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Phone sx={{ mr: 1, color: "info.main" }} />
                        <Typography variant="body1">9890368440</Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Email sx={{ mr: 1, color: "info.main" }} />
                        <Typography variant="body1">
                          raviraut19@icloud.com
                        </Typography>
                      </Box>
                    </Stack>
                  </Stack>
                </Box>
              </Box>
              {/* <Link to="/orederReturn-page">
                <Button> hiii</Button>
              </Link> */}
            </Stack>
          </Box>
          <Box sx={{ height: '10rem', width: '100%'}}></Box>
        </Container>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap="2px"
        >
          <img
            src={require("../../assets/icons/ordermobi.png")}
            alt="..."
            style={{
              width: "200px",
              height: "200px",
              objectFit: "contain",
            }}
          />
          <Typography variant="h3" fontWeight={500}>
            Order Placed
          </Typography>
          <Typography variant="h6" textAlign="center">
            Your order number 1021 is placed will be delivered by 29 November
            2022
          </Typography>
          <Box gap="2%" display="flex" padding="2%">
            <HistoryCard />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="2px"
            p="3%"
          >
            <Button
              variant="container"
              sx={{
                color: "white.main",
                bgcolor: "#0395AF",
                "&:hover": { bgcolor: "#c2c2c2" },
              }}
            >
              submit Eye Power Later
            </Button>
            OR
            <Button
              variant="outlined"
              sx={{
                width: "100%",
                color: "#000",
                bgcolor: "#fff",

                "&:hover": { bgcolor: "#c2c2c2" },
              }}
            >
              submit Eye Power Later
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default OrderComplete;
