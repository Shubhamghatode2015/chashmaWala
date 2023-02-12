import React from "react";
import { Container } from "@mui/material";
import { Box, height } from "@mui/system";
import img1 from "../../assests/Ellipse.png";
import img2 from "../../assests/Vector 1.png";
import img3 from "../../assests/Ellipse (1).png";
import { Stack } from "@mui/material";
import Register from "../../components/Register";

const Loginp = () => {
  return (
    <>

      <Box container fullWidth sx={{ height: "100vh", bgcolor: "var(--background)", position:'relative' }}>
     
         <Box
          component="div"
          sx={{ width: "100%", height: "15rem" }}
          style={{
            backgroundImage: `url(${img1})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionx: "left",
            backgroundSize: "38.5vh",
          }}>
        </Box>
        <Register/>
        <Stack  direction={'row'} fullWidth  sx={{position:'absolute', left:0, right:0, bottom:0}}> 
         <Box
          component="div"
          sx={{ width: "100%", height: "22rem" }}
          style={{
            backgroundImage: `url(${img3})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: 'left bottom',
            backgroundSize: "38.5vh",
          }}>
        </Box>
         <Box
          component="div"
          align={'end'}
          sx={{ width: "100%", height: "22rem" }}
          style={{
            backgroundImage: `url(${img2})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right bottom",
            backgroundSize: "63.5vh",
          }}>
        </Box>
        </Stack>
        
      </Box>
      
    </>
  );
}
export default Loginp;
