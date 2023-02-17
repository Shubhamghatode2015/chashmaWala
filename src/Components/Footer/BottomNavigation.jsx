import React, { useState, useEffect } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import {
  AccountCircle,
  Home,
  LocalMall,
  ShoppingCart,
  Widgets,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

export default function BottomNavigationBar() {
  const [value, setValue] = React.useState("Home");
  //   console.log(value, 'mmmmmmmm')

  const handleChange = (event, newValue) => {
    setValue(newValue);
    //   console.log(newValue, 'iiiiiiii')
  };
  const navigate = useNavigate();

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  const location = useLocation();
  return (
    <BottomNavigation
      style={{
        transitionDuration: "200ms",
        overflow: "hidden",
        bottom: `${visible ? "0px" : "-120px"}`,
        display: `${location.pathname === "/register-page" ? "none" : "flex"}`,
      }}
      sx={{
        width: "100%",
        bgcolor: "white.main ",
        zIndex: "999999",
        position: "fixed",
        bottom: 0,
        borderTop: 0.5,
        borderColor: "primary.main",
        "& .MuiBottomNavigationAction-root": {
          color: "secondary.main",
        },
        "& .Mui-selected": {
          color: "primary.main",
        },
        // "& .MuiSvgIcon-root": {
        //   color: "#fa5d29",
        // },
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Home"
        value="Home"
        onClick={() => navigate("/")}
        sx={{
          color: `${value === "Home" ? "#fa5d29" : "secondary.main"}`,
          minWidth: "25px",
        }}
        icon={<Home />}
      />
      <BottomNavigationAction
        label="Profile"
        value="Profile"
        onClick={() => navigate("/profile-page")}
        sx={{
          color: `${value === "Profile" ? "#fa5d29" : "secondary.main"}`,
          minWidth: "25px",
        }}
        icon={<AccountCircle />}
      />
      <BottomNavigationAction
        label="Order "
        value="Order History"
        onClick={() => navigate("/orderHistory-page")}
        sx={{
          color: `${value === "Order History" ? "#fa5d29" : "secondary.main"}`,
          minWidth: "25px",
        }}
        icon={<LocalMall />}
      />
      <BottomNavigationAction
        label="Category"
        value="Category"
        onClick={() => navigate("/Categories-page")}
        sx={{
          color: `${value === "Category" ? "#fa5d29" : "secondary.main"}`,
          minWidth: "25px",
        }}
        icon={<Widgets />}
      />
      <BottomNavigationAction
        label="Cart"
        onClick={() => " setState(true)"}
        value="Cart"
        sx={{
          color: `${value === "Cart" ? "#fa5d29" : "secondary.main"}`,
          minWidth: "25px",
        }}
        icon={<ShoppingCart />}
      />
    </BottomNavigation>
  );
}
