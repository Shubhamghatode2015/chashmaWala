import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import http from "../../utils/api";

export const fatchFramekart = createAsyncThunk(
  "framekart/fatchFramekart",
  async () => {
    try {
      const response = await http.get(
        "v1/collection/home?offset=0&pagesize=40&personaId=ar_support_repeat_android"
      );
      // console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
);
export const fatchEyeglasses = createAsyncThunk(
  "framekart/fatchEyeglasses",
  async () => {
    try {
      const response = await http.get(
        "/v1/category/8657?arEnabled=false&colorOptionsCount=0&customFilters=false&limit=40&offset=10&tier=gold_original"
      );
      // console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
);
export const fatchFrameglasses = createAsyncThunk(
  "framekart/fatchFrameglasses",
  async () => {
    try {
      const response = await http.get(
        "/v1/category/8737?arEnabled=false&colorOptionsCount=0&customFilters=false&limit=40&offset=10&tier=gold_original"
      );
      // console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
);
export const fatchSunglasses = createAsyncThunk(
  "framekart/fatchSunglassess",
  async () => {
    try {
      const response = await http.get(
        "/v1/category/8640?arEnabled=false&colorOptionsCount=0&customFilters=false&limit=40&offset=10&tier=gold_original "
      );
      // console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
);
export const fetchSingleGlass = createAsyncThunk(
  "frameKart/fetchSingleGlass",
  async ( id ) => {
    try {
      const response = await http.get(
        `/v1/product/${id}`
      );
      // console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  
  }
);

const framekartSlice = createSlice({
  name: "frameKart",
  initialState: {
    loading: false,
    frameKart: [],
    sunglass: [],
    eyeglass: [],
    frameglass: [],
    singleGlass: [],
    productId: null,
    error: null,
  },
  reducers: {
    handleProductId:(state, action) =>{
      state.productId = action.payload.productId
    }
  },

  extraReducers: {
    [fatchFramekart.pending]: (state, action) => {
      state.loading = true;
    },
    [fatchFramekart.fulfilled]: (state, action) => {
      state.loading = false;
      state.frameKart = action.payload.data.result;
    },
    [fatchFramekart.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fatchSunglasses.pending]: (state, action) => {
      state.loading = true;
    },
    [fatchSunglasses.fulfilled]: (state, action) => {
      state.loading = false;
      state.sunglass = action.payload.data.result;
    },
    [fatchSunglasses.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fatchFrameglasses.pending]: (state, action) => {
      state.loading = true;
    },
    [fatchFrameglasses.fulfilled]: (state, action) => {
      state.loading = false;
      state.frameglass = action.payload.data.result;
    },
    [fatchFrameglasses.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fatchEyeglasses.pending]: (state, action) => {
      state.loading = true;
    },
    [fatchEyeglasses.fulfilled]: (state, action) => {
      state.loading = false;
      state.eyeglass = action.payload.data.result;
    },
    [fatchEyeglasses.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fetchSingleGlass.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSingleGlass.fulfilled]: (state, action) => {
      state.loading = false;
      state.singleGlass = action.payload.data.result;
    },
    [fetchSingleGlass.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { handleProductId} =  framekartSlice.actions
export default framekartSlice.reducer;
