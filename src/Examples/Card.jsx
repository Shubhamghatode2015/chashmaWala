import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import React from "react";

const Cards = ({ value }) => {
  
  // console.log(value);
  return (
    <Card
            sx={{ maxWidth: 245,  }}
            key={value?.id}
          >
            <CardMedia
            container='img'
              sx={{ height: 140 }}
              image={value?.imageUrl}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="body"  color="secondary">
                {value?.brandName}
              </Typography>
              <Typography variant="body2" color="secondary">
                {value?.frameSizeUrl?.label}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
  );
};

export default Cards;
