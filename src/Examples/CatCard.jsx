import { CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const CatCard = ({value}) => {
 
  return (
    <Box   sx={{ height: '16rem', width: '100%', p: 2 , justifyContent:'space-between', flexDirection: 'column' , alignItems: 'center', display: 'flex'}} >
      <CardMedia
     
          sx={{ height: 180, width: 180 }}
          image={value?.img}
          title={value?.id}
        />
        <Typography variant="body1" color="initial"> {value?.id}</Typography>
    </Box>
  )
}

export default CatCard
