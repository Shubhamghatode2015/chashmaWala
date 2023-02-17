import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
// import img1 from "../assests/sun1 1.png";

const PurchaseCard = ({value}) => {

  return (
    <>
      <Card
        sx={{
          width: '100%',
          height: 89,
          display: "flex",
          alignItems: "center",
          boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Box sx={{ height: 79, width: 153, display: "contents" }}>
          <CardMedia
            image={value?.imageUrl}
            sx={{  width: 152, height: 79, objectFit: "contain" }}
            component="img"
          ></CardMedia>
        </Box>
        <CardContent gutterBottom sx={{ width: "100%" }} component="div">
          <Typography component="div" sx={{ fontSize: 18, fontWeight: 600 }}>
           
            { value?.brandName}  { value?.classification} 
          </Typography>
          <Typography component="div" sx={{ fontSize: 14, fontWeight: 600 }}>
           ₹ {value?.prices[1].price}
          </Typography>
          <Typography component="div" sx={{ fontSize: 14 }}>
            14th February 2022
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default PurchaseCard;
