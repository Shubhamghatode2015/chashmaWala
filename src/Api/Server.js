// import React, { useEffect, useState } from "react";

// import axios from "axios";
// import Cards from "../Examples/Card";
// import {
//   categoriesIconSlideData,
//   customerReviewSlideData,
//   drawerItems,
//   iconSlideData,
//   mapVideoUrl,
//   promoSlideData,
// } from "../Utils";
// const Server = () => {
//   const [glassess, setGlassess] = useState([]);
//   //   const options = {
//   //     method: "GET",
// https://area51.lenskart.io/api/v1/category/8737?arEnabled=false&colorOptionsCount=0&customFilters=false&limit=40&offset=10&tier=gold_original
// https://area51.lenskart.io/api/v1/category/8740?arEnabled=false&colorOptionsCount=0&customFilters=false&limit=40&offset=10&tier=gold_original "classification": "contetlence",
//    https://area51.lenskart.io/api/v1/category/8640?arEnabled=false&colorOptionsCount=0&customFilters=false&limit=40&offset=10&tier=gold_original "classification": "eyglasses"
//   //     url: "https://area51.lenskart.io/api/v1/collection/home?offset=0&pagesize=40&personaId=ar_support_repeat_android",
// https://area51.lenskart.io/api/v1/category/8840?arEnabled=false&colorOptionsCount=0&customFilters=false&limit=40&offset=10&tier=gold_original   "classification": "eyeframe",
//   //     params: { query: "Eyeglasses", country: "IN" },
//   //     headers: {
//   //       "X-RapidAPI-Key": "22c5f4623bmsh044f1b172e3216ap1103cdjsnaa647100ad25",
//   //       "X-RapidAPI-Host": "amazon23.p.rapidapi.com",
//   //     },
//   //   };

//   //   axios
//   //     .request(options)
//   //     .then(function (response) {
//   //       console.log(response);

//   //     })
//   //     .catch(function (error) {
//   //       console.error(error);
//   //     });

//   const getData = async (url) => {
//     try {
//       const response = await axios.get(url);
//       console.log(response);
//       setGlassess(response.data.result);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     getData(`${process.env.REACT_APP_API}/v1/collection/home?offset=0&pagesize=40&personaId=ar_support_repeat_android`);
//   }, []);
//   console.log(iconSlideData, "iconSlideData");
//   console.log(promoSlideData, "promoSlideData");
//   console.log(customerReviewSlideData, "customerReviewSlideData");
//   console.log(categoriesIconSlideData, "categoriesIconSlideData");
//   console.log(drawerItems, "drawerItems");
//   console.log(mapVideoUrl, "mapVideoUrl");
//   return (
//     <>
//       {glassess &&
//         glassess.length > 0 &&
//         glassess.map((value, index) => <Cards value={value} key={index} />)}
//     </>
//   );
// };

// export default Server;


// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fatchFramekart = createAsyncThunk(
//   "framekart/fatchFramekart",
//   async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_API}/v1/collection/home?offset=0&pagesize=40&personaId=ar_support_repeat_android`
//       );
//       console.log(response);
//       return response;
//     } catch (error) {
//       console.error(error);
//     }
//   }
// );

// const framekartSlice = createSlice({
//   name: "frameKart",
//   initialState: {
    
//     frameKart: [],
  
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fatchFramekart.fulfilled, (state, action) => {
//       state.frameKart = action.payload.data;
      
//     });
    
//   },
// });
// export default framekartSlice.reducer;
