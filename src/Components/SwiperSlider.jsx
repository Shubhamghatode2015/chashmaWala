import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../assets/Css/Swiper.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import GlassCard from "../Examples/GlassCard";
import { Stack } from "@mui/material";

export default function SwiperSlider({ data, eyeglass, rate }) {
  return (
    <>
      <Swiper
        slidesPerView={rate ? 4 : 1}
        spaceBetween={30}
        loop={true}
    
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        {data &&
          data.length > 0 &&
          data.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                style={{ height: "30rem", width: "100%", objectFit: "contain" }}
              >
                <img
                  src={img}
                  alt="..."
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}

        {eyeglass &&
          eyeglass.length > 0 &&
          eyeglass.map((value) => {
            return (
              <SwiperSlide key={value.id}>
                <GlassCard value={value?.data} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
