import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import http from "../../utils/api";
const initialState = {
  loading: false,
  user: "",
  msg: "",
  token: "",
  error: "",
};
export const postRegisterUser = createAsyncThunk(
  "postRegisterUser",
  async (url, body) => {
    axios({
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: {
        body,
      },
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.error(error);
      });
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {},
  extraReducers: {

    [postRegisterUser.pending]: (state, action) => {
      state.loading = true;
    },
    [postRegisterUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.frameKart = action.payload.data.result;
    },
    [postRegisterUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
