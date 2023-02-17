import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
// import { Grid } from "@mui/material";
import { Box, width } from "@mui/system";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import TextField from "@mui/material/TextField";
import { Avatar, Grid, Hidden, InputAdornment, Paper } from "@mui/material";
// import Owlcorosel from './Owlcorosel'
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import { FmdGoodOutlined, GroupAddOutlined } from "@mui/icons-material";
import SwiperSlider from "../SwiperSlider";
import Accordions from "../Accordions";

const LocationAccordian = ({ value }) => {
  return (
    <>
    <Box sx={{ display: 'flex', flexDirection: 'column',mt: 1, gap: 2}}>

      <Accordions
        rate={true}
        name={
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CalendarMonthOutlinedIcon sx={{ mr: 2, color: "white.main" }} />
            <Typography variant="h6" color="white.main">
              Select Date & Time
            </Typography>
          </Box>
        }
        details={
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h6" color="initial">
                {" "}
                Select Date
              </Typography>
              <TextField
                id="outlined-start-adornment"
                sx={{
                  m: 1,
                  width: "60%",
                  color: "white",
                  backgroundColor: "white",
                  outlineColor: "white",
                }}
                //   placeholder="Enter you number"
                type="date"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarMonthOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <Typography variant="h6" color="initial">
                Select Time
              </Typography>
              <SwiperSlider value={value} rate={true} />
            </Box>
          </Box>
        }
      />

      <Accordions
        rate={true}
        name={
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FmdGoodOutlined sx={{ mr: 2, color: "white.main" }} />
            <Typography variant="h6" color="white.main">
              Address Details
            </Typography>
          </Box>
        }
        details={
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <FmdGoodOutlined sx={{ mr: 2 }} />
              <TextField
                id="outlined-start-adornment"
                sx={{
                  m: 1,
                  width: "50%",
                  color: "white",
                  backgroundColor: "white",
                  outlineColor: "white",
                }}
                placeholder="Enter House No. / Flat No."
                type="address"
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <GroupAddOutlined sx={{ mr: 2 }} />
              <TextField
                id="outlined-start-adornment"
                sx={{
                  m: 1,
                  width: "50%",
                  color: "white",
                  backgroundColor: "white",
                  outlineColor: "white",
                }}
                placeholder="Enter Full Name"
                type="Name"
              />
            </Box>
          </Box>
        }
      />
      {/* <Accordion sx={{ width: "100%", m: 1 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "primary.main",
            borderRadius: "0.5rem",
            fontSize: "2rem",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            {" "}
            <CalendarMonthOutlinedIcon />
            Select Date & Time
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Select Date
            <TextField
              id="outlined-start-adornment"
              sx={{
                m: 1,
                width: "60%",
                color: "white",
                backgroundColor: "white",
                outlineColor: "white",
              }}
              //   placeholder="Enter you number"
              type="date"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarMonthOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Typography>
          <Typography>
            Select Time
            <Box>
              <SwiperSlider value={value} rate={true} />
            </Box>
          </Typography>
        </AccordionDetails>
      </Accordion> */}

      {/* <Accordion sx={{ m: 1, width: "100%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "primary.main",
            borderRadius: "0.5rem",
            fontSize: "2rem",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            {" "}
            <FmdGoodOutlined />
            Address Details{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <FmdGoodOutlined />
            <TextField
              id="outlined-start-adornment"
              sx={{
                m: 1,
                width: "50%",
                color: "white",
                backgroundColor: "white",
                outlineColor: "white",
              }}
              placeholder="Enter House No. / Flat No."
              type="address"
              // InputProps={{
              //   startAdornment: (
              //     <InputAdornment position="start"><CalendarMonthOutlinedIcon/></InputAdornment>
              //   ),
              // }}
            />
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <GroupAddOutlined />
            <TextField
              id="outlined-start-adornment"
              sx={{
                m: 1,
                width: "50%",
                color: "white",
                backgroundColor: "white",
                outlineColor: "white",
              }}
              placeholder="Enter Full Name"
              type="Name"
              // InputProps={{
              //   startAdornment: (
              //     <InputAdornment position="start"><CalendarMonthOutlinedIcon/></InputAdornment>
              //   ),
              // }}
            />
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </Box>
    </>
  );
};

export default LocationAccordian;
