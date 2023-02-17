import { createSlice } from "@reduxjs/toolkit";

export const initialStateValue = false;

export const ModalSlice = createSlice({
    name: "Modal",
    initialState: { value: initialStateValue },
    reducers: {
      handleModalOpen: (state, action) => {
        state.value = action.payload;
      },
      
    },
  });

  
export const { handleModalOpen } = ModalSlice.actions;


export default ModalSlice.reducer;