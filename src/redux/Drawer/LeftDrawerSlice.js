import { createSlice } from "@reduxjs/toolkit";

export const initialStateValue = false;

export const leftDrawerSlice = createSlice({
    name: "leftDrawer",
    initialState: { value: initialStateValue },
    reducers: {
      handleDrawerLeft: (state, action) => {
        state.value = action.payload;
      },
      
    },
  });

  
export const { handleDrawerLeft } = leftDrawerSlice.actions;


export default leftDrawerSlice.reducer;