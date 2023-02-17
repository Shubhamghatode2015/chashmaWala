import React, { useState } from "react";
import { OutlinedInput, Slider, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

const RangeSlider = () => {
  const [range, setRange] = useState([10, 20]);
  const changeValue = (event, value) => {
    setRange(value);
  };

  const getText = (valu) => `${range}`;
  const customMarks = [
    {
      value: 1000,
      label: "₹1k",
    },
    {
      value: 3000,
      label: "₹3k",
    },
    {
      value: 5000,
      label: "₹5k",
    },
    {
      value: 7500,
      label: "₹7.5k",
    },
    {
      value: 10000,
      label: "₹10k",
    },
  ];
  return (
    <>
      
      <Slider
        style={{ width: 250 }}
        min={1000}
        max={10000}
        step={1000}
        value={range}
        // marks={customMarks}
        onChange={changeValue}
        valueLabelDisplay="auto"
        getAriaValueText={getText}
      />
      <Stack direction='row' spacing={2}>

      <Box>
        <Typography variant="body1" color="initial">Min</Typography>
        <OutlinedInput value={range[0]} /> 
      </Box>
      <Box>
        <Typography variant="body1" color="initial">Max</Typography>
        <OutlinedInput value={range[1]} /> 

      </Box>
      </Stack>
    </>
  );
};

export default RangeSlider;
