import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const AppBaar2 = () => {
  return (
    <Box sx={{ width: "100%", height: "5rem", p: 2 }}>
      <Link to={"/home-page"}>
        <img
          src={require("../../assets/images/logo.png")}
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
        />
      </Link>
    </Box>
  );
}

export default AppBaar2