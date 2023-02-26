import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  useMediaQuery,
  Typography,
} from "@mui/material";
import React from "react";

const Accordions = ({ name, details, rate , styless, padding}) => {
  const matches = useMediaQuery("max-width: 870px");
  return (
    <>
      <Accordion
        style={{
          width: `${matches ? "22rem" : "100%"}`,
          borderRadius: `${rate ? "0.3rem" : "0px"}`,
        }}
      >
        <AccordionSummary
          sx={{ 
            backgroundColor: `${rate ? "primary.main" : "white.main"}`,
            borderRadius: `${rate ? "0.3rem" : "0px"}`,
          }}
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         
            {name}
   
          {/* <Typography >{name}</Typography> */}
        </AccordionSummary>
        <AccordionDetails
          sx={{ backgroundColor:  "white.main", p: padding, }}
        >
          {details}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Accordions;
