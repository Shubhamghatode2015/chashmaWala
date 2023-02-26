import * as React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useDispatch, useSelector } from "react-redux";
import { handleDrawerDown } from "../../../redux/Drawer/LeftDrawerSlice";

const drawerBleeding = 56;

function DownDrawer({ children , state, setState  }) {
  // const state = useSelector((state) => state.drawerLeft.downValue);
  // const dispatch = useDispatch();

  // console.log(state)
  return (
    <>
      {/* <Button onClick={toggleDrawer(true)}>Open</Button> */}

      <SwipeableDrawer
        anchor="bottom"
        open={state}
        onClose={() => setState(false)}
        // swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box
          sx={{
            maxHeight: 350,
            width: "100%",
            p: 1,
          }}
        >
          {children} 
        </Box>
      </SwipeableDrawer>
    </>
  );
}

export default DownDrawer;
