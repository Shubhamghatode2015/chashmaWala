import { useMediaQuery } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import BottomNavigationBar from "../Footer/BottomNavigation";
import Footer from "../Footer/Footer";
import AppBaar2 from "../NavBaar/AppBaar2";
import ResponsiveAppBar from "../NavBaar/Appbar";
import NavBaar from "../NavBaar/NavBaar";


const LayOut = ({ children }) => {
  const { productId } = useSelector((state) => state.framekartData);
  const location = useLocation();
  const { id } = useParams();
  // console.log(location.pathname);
  // console.log(id);
  const matches = useMediaQuery("(max-width:870px)");
  return (
    <>
   
      {matches? <AppBaar2/> : location.pathname === `/home-page` ?  <ResponsiveAppBar /> : <NavBaar /> }
      {children}
      {matches ? <BottomNavigationBar /> : null }
      {location.pathname !== `/product-page/${productId}` ? <Footer /> : null}
    </>
  );
};

export default LayOut;
