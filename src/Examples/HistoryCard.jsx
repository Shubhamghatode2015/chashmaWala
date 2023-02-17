import React from "react";
import { Card,  CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";

// import img1 from '../assests/image 2371 (1).png';

const HistoryCard=()=>{
    return(
        <>
        <Card fullwidth sx={{height:130,display:'flex',alignItems:'center'}}>
      <Box sx={{ height: 80 , width: 153, display:'contents'}}>
      <CardMedia 
     
      image={require("../assets/images/shraddha.jpg")}
      sx={{width:152, height:79, objectFit:'contain'}}
      component='img'
      >
      </CardMedia>
      </Box>
      <CardContent gutterBottom sx={{width:'100%'}} component='div'>

      <Typography component='div' sx={{fontSize: 18, fontWeight:500}}>Product Name Product</Typography>
      <Typography variant="subtitle2" sx={{fontSize: 14, fontWeight:400}}>Brand  Name</Typography>
      <Typography  component="div" sx={{fontSize: 18, fontWeight:600, py:1}}>  
      ₹2490
          </Typography>
        
          <Typography variant="subtitle2" component={'div'} sx={{fontSize: 12, fontWeight:400}}>Size - XS</Typography>
          <Typography variant="subtitle2" component={'div'} sx={{fontSize: 12, fontWeight:400}}>Quantity</Typography>

      </CardContent>
     

    </Card>

        </>
    )
}

export default HistoryCard;