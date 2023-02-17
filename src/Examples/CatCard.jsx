import { CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const CatCard = ({ value }) => {
  return (
    <Box
      sx={{
        height: { xs: 85, md: "16rem", xl: "16rem" },

        width: "100%",
        p: {xs: 0 , md: 2 , xl: 2 },
        justifyContent:{ xs:  "center", md:  "space-between", xl:  "space-between", },
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
      }}
    >
      <CardMedia
        sx={{
          height: { xs: 50, md: 180, xl: 180 },
          width: { xs: 50, md: 180, xl: 180 },
        }}
        image={value?.img}
        title={value?.id}
      />
      <Typography variant="body1" color="initial" sx={{ fontSize: {xs: '0.6rem', md: '20px', xl: '20px'}, mt: { xs: 0, md: 2, xl: 2}}}>
        
        {value?.id}
      </Typography>
    </Box>
  );
};

export default CatCard;
