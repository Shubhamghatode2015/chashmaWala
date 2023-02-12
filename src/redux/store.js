import { configureStore } from "@reduxjs/toolkit";
import framekartSlice from "./festures/framekartSlice";

export default configureStore({
    reducer: {
        framekartData: framekartSlice,
    },
})