import { createSlice } from "@reduxjs/toolkit";

export const leftDrawerSlice = createSlice({
  name: "leftDrawer",
  initialState: { value: false, downValue: false, valueLeft: false },
  reducers: {
    handleDrawerLeft: (state, action) => {
      state.value = action.payload;
    },
    handleDrawerDown: (state, action) => {
      state.downValue = action.payload;
    },
    handleDrawerfilter: (state, action) => {
      state.valueLeft = action.payload;
    },
  },
});

export const { handleDrawerLeft, handleDrawerDown, handleDrawerfilter } =
  leftDrawerSlice.actions;

export default leftDrawerSlice.reducer;
