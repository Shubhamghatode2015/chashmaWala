import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Loader from "../Loader";
import { useMediaQuery } from "@mui/material";
const ImageSliderCarousel = ({ imageUrls }) => {
  const matches = useMediaQuery("(max-width:870px)");
  return (
    <>
      <Carousel
        autoPlay
        interval="3000"
        transitionTime="2000"
        infiniteLoop
        emulateTouch={true}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={matches ? false : true}
        style={{ minHeight: "20rem" }}
      >
        {imageUrls && imageUrls.length > 0 ? (
          imageUrls.map((value, index) => (
            <div key={index}>
              <img src={value} alt="" />
            </div>
          ))
        ) : (
          <Loader />
        )}
      </Carousel>
    </>
  );
};

export default ImageSliderCarousel;
