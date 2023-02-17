import { configureStore } from "@reduxjs/toolkit";
import LeftDrawerSlice from "./Drawer/LeftDrawerSlice";
import framekartSlice from "./festures/framekartSlice";
import ModalSlice from "./Modal/ModalSlice";

export default configureStore({
    reducer: {
        framekartData: framekartSlice,
        drawerLeft: LeftDrawerSlice,
        modalOpen: ModalSlice,
    },
})