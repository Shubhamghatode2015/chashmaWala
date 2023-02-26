import { Add, Remove } from '@mui/icons-material'
import { Box, Button, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const CartCard = ({value}) => {
  // console.log(value);
  return (<>
  
  <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              m: "0.6rem 0",
            }}
          >
            <Box
              flex={2}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <CardMedia
                image={value?.imageUrl}
                sx={{ width: 252, height: 100, objectFit: "contain" }}
                component="img"
              ></CardMedia>

              <CardContent sx={{ py: 1 }} component="div">
                <Typography variant="body1" color="initial"  sx={{ fontSize: 18, fontWeight: 600 }}> { value?.brandName} </Typography>
               
                <Typography
                  component="div"
                  sx={{ fontSize: 14, fontWeight: 500 }}
                >
                 ₹ { value?.prices[1].price}
                </Typography>
                <Button
                  variant="text"
                  color="primary"
                  sx={{ fontWeight: 300, fontSize: 14 }}
                >
                  Remove
                </Button>
              </CardContent>
            </Box>
            <Box sx={{ color: "secondary.main" }} flex={1}>
              <Button aria-label="remove" size="small" variant="text">
                <Remove
                  fontSize="inherit"
                  sx={{ fontSize: "1.5rem", color: "info.main" }}
                />
              </Button>
              <Button aria-label="add" size="small" color="info">
                0
              </Button>
              <Button aria-label="add" size="small" variant="text">
                <Add
                  fontSize="inherit"
                  sx={{ fontSize: "1.5rem", color: "info.main" }}
                />
              </Button>
            </Box>
            <Box sx={{ color: "secondary.main" }} >
              <Typography variant="subtitle" fontWeight={700} color="initial">
              ₹ { value?.prices[1].price}
              </Typography>
            </Box>
          </Box>
  
  </>
   
  )
}

export default CartCard