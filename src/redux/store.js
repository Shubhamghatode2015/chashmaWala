import { configureStore } from "@reduxjs/toolkit";
import LeftDrawerSlice from "./Drawer/LeftDrawerSlice";
import framekartSlice from "./festures/framekartSlice";
import userSlice from "./festures/userSlice";
import ModalSlice from "./Modal/ModalSlice";

export default configureStore({
    reducer: {
        framekartData: framekartSlice,
        drawerLeft: LeftDrawerSlice,
        modalOpen: ModalSlice,
        user : userSlice,
    },  
} ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())