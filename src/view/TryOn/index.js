import { Container } from "@mui/system";
import React from "react";
// import logo from "../../img/vartualtryimg.png";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import img from "./RealD_glasses.png";
import ColorCard from "../../Examples/ColorCard";

const TryOn = () => {
  return (
    <>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sm={12}
            xs={12}
            sx={{
              border: "1px solid black",
              borderRadius: ".8rem",
              p: "1%",
            }}
          >
        
            
              <iframe
                title="Plastic Sunglasses"
                frameBorder={0}
                allowFullScreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share
                width={440}
                height={280}
                src="https://sketchfab.com/models/d5417dcb97fb41b39f57fc8772a7ecab/embed?autospin=1&autostart=1&preload=1"
              >
              
              </iframe>
            
         
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Recomended</Typography>
          <Typography>
            <SendIcon />
          </Typography>

        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, alignItems: 'center'}}>
       <ColorCard />
       <ColorCard />
       <ColorCard />
       <ColorCard />
      
          </Box> 
      </Container>
    </>
  );
};

export default TryOn;
