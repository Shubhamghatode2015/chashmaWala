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
import { Card, CardContent, Stack, Typography } from "@mui/material";

export default function SwiperSlider({ play, data, eyeglass, rate, value }) {
  return (
    <>
      <Swiper
        slidesPerView={rate || play ? 4 : 1}
        spaceBetween={30}
        loop={rate ? false : true}
        navigation={rate ? false : true}
        modules={[Navigation]}
        className="mySwiper"

      >
        {data &&
          data.length > 0 &&
          data.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                style={{ height: "30rem", width: "100%",  }}
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

        {value &&
          value.length > 0 &&
          value.map((items) => (
            <SwiperSlide
              key={items.id}
              style={{ backgroundColor: "transparent" }}
            >
              <Card
                sx={{
                  maxWidth: 150,
                  border: "1px solid #7C6363",
                  borderRadius: ".7rem",
                  height: "3rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  P: 2,
                  cursor: 'pointer'
                }}
                style={{ padding: '0.6rem'}}
              >
                <Typography gutterBottom variant="body1" component="div">
                  {items.time}
                </Typography>
              </Card>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
