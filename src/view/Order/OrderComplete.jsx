import React from "react";
import Container from "@mui/material/Container";
import { Box, Stack } from "@mui/system";
import StepperCard from "../../Examples/StepperCard";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import SelectInput from "@mui/material/Select/SelectInput";
import AddressCard from "../../Examples/AddressCard";
import Address2Card from "../../Examples/Address2Card";
import { EmojiEmotions } from "@mui/icons-material";
import { Link } from "react-router-dom";

const OrderComplete = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
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
          <Typography variant="body2" color="initial">
            Your order number 1021 is placed will be delivered by 29 November
            2022
          </Typography>
          <StepperCard />
          <Typography variant="caption" color="initial">
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
          <Typography
            variant="h3"
            sx={{ fontSize: "53px", LineHeight: "79.5px" }}
            color="initial"
            fontWeight={700}
          >
            ORDER COMPLETE ! <EmojiEmotions pl={2}  sx={{ fontSize: "53px", color: 'primary.main'}}/>
          </Typography>
          <Button
            variant="outlined"
            color="info"
            size="large"
            sx={{ borderRadius: 10 }}
          >
            <img
              src={require("../../assets/icons/text.png")}
              alt=".."
              style={{ height: "30px" }}
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
            }}
          >
            <Box
              style={{
                border: "0.3px solid  rgb(205 205 205)",
                borderRadius: "12px",
                padding: "1rem",
                width: "60%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div>
                <img
                  src={require("../../assets/icons/text.png")}
                  alt="..."
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "contain",
                  }}
                />
                <Typography variant="h5" color="initial">
                  vincent Chase Polaried
                </Typography>
              </div>
              <div>
                <Typography variant="body" color="initial" component={"div"}>
                  vincent Chase Polaried
                </Typography>

                <Typography variant="body" color="initial" component={"div"}>
                  vincent Chase Polaried
                </Typography>
              </div>
            </Box>
            <Box
              style={{
                border: "0.3px solid  rgb(205 205 205)",
                borderRadius: "12px",
                width: "38%",
                padding: "0.8rem",

                height: "100%",
              }}
            >
              <Stack direction={"column"} spacing={3}>
                <Stack direction={"row"} spacing={2}>
                  <Box flex={1}></Box>
                  <Typography variant="body1" color="initial">
                    Left Eye
                  </Typography>
                  <Typography variant="body1" color="initial">
                    Right Eye
                  </Typography>
                </Stack>

                <Stack direction={"row"} spacing={2}>
                  <Typography variant="body1" color="initial" flex={1}>
                    sperical
                  </Typography>
                  {/* <SelectInput value={age} handleChange={handleChange} /> */}

                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
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
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
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
                  <Typography variant="body1" color="initial" flex={1}>
                    Cylendrical
                  </Typography>

                  <OutlinedInput
                    inputProps={{
                      style: {
                        padding: 8,
                        width: "80px",
                        height: "15px",
                      },
                    }}
                  />

                  <OutlinedInput
                    inputProps={{
                      style: {
                        padding: 8,
                        width: "80px",
                        height: "15px",
                      },
                    }}
                  />
                </Stack>

                <Stack direction={"row"} spacing={2}>
                  <Typography variant="body1" color="initial" flex={1}>
                    Axis
                  </Typography>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
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
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
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
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
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
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
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

          <Stack direction={"row"} spacing={2} width={"100%"}>
            <Box flex={4}>
              <AddressCard />
            </Box>
            <Box>
              <Address2Card />
            </Box>
            <Link to='/orederReturn-page' >
              <Button> hiii</Button>
              </Link>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default OrderComplete;
