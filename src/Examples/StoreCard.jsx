import React from "react";
import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import logo from "../img/nearbystorecard.png";
import { Box } from "@mui/system";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useNavigate } from "react-router-dom";

const StoreCard = () => {
  const navigate = useNavigate()
  return (
    <Box className="card" sx={{ p: "1rem", width: 400, height: 350 }}>
      <CardMedia
        sx={{ height: 130, width: "100%" }}
        image={require("../assets/images/shraddha.jpg")}
        title="ank"
      />
      {/* <CardContent sx={{p:".2rem"}}> */}
  
        <Box
          className="ratting"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "end",
            width: "100%",
            m: 0,
          
          }}
        >
          <Box
            sx={{
              // textAlign: "center",
              alignItems: "center",
              backgroundColor: "rgba(217, 217, 217, 0.75)",
              display: "flex",
              justifyContent: "center",
              borderRadius: "12px 0 0 12px",
              Px: 4
            }}
         
          >
            <StarBorderIcon sx={{ fontSize: "25px", mr: 1 }} />
            <Typography variant="h6" color="initial">
              4.2 I 8,234
            </Typography>
          </Box>
        </Box>
     
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ disply: "flex" }}
        >
          <h3 sx={{ m: 0 }}>Chatur Singh</h3>
          <p>9:00 AM - 8:00PM</p>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h3 sx={{ m: 0 }}> Framekarts stores</h3>
          <p>Civil lines, patna</p>
        </Typography>
      </Box>

      {/* </CardContent> */}
      <Button onClick={()=>navigate('/sellerDetails-page')}
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        sx={{ mt: 1 }}
      >
        Visit Gallery
      </Button>
    </Box>
  );
};

export default StoreCard;
