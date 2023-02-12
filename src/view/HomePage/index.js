import { CardMedia, Container, Stack, Typography } from "@mui/material";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GlassCard from "../../Examples/GlassCard";
import CatCard from "../../Examples/CatCard";

import {
  fatchEyeglasses,
  fatchFrameglasses,
  fatchFramekart,
  fatchSunglasses,
} from "../../redux/festures/framekartSlice";

import {
  arr_imgs,
  banner,
  brandImgs,
  categoriesIconSlideData,
  customerReviewSlideData,
  drawerItems,
  promoSlideData,
  supportStym,
} from "../../CreatedData";
import SwiperSlider from "../../Components/SwiperSlider";
import Loader from "../../Components/Loader";
import ResponsiveAppBar from "../../Components/NavBaar/Appbar";

const HomePage = () => {
  const dispatch = useDispatch();
  const { loading, frameKart, error, sunglass, frameglass, eyeglass } =
    useSelector((state) => ({
      ...state.framekartData,
    }));
  // console.log(frameKart , 'framekart');
  // console.log(sunglass , 'sunglass');
  // console.log(frameglass , 'framegglass');
  // console.log(eyeglass , 'eyegalass');

  useEffect(() => {
    dispatch(fatchFramekart());
    dispatch(fatchSunglasses());
    dispatch(fatchFrameglasses());
    dispatch(fatchEyeglasses());
  }, [dispatch]);
  
  return (
    <>
       <ResponsiveAppBar />
      <SwiperSlider data={arr_imgs} />
      <Container>
        <Stack direction="column" spacing={4}>
          <Box >
            <Typography variant="h5" fontWeight={700}>
              SUNGLASSES
            </Typography>
            <Stack direction="row" spacing={2}>
              {sunglass &&
                sunglass.length > 0 &&
                sunglass.slice(0, 4).map((value) => {
                  return <GlassCard value={value?.data} key={value.id} />;
                })}
            </Stack>
          </Box>
          <Box>
           
            <Typography variant="h5" fontWeight={700}>
              PRESCRIPTION FRAMES
            </Typography>
            <Stack direction="row" spacing={2}>
              {frameglass &&
                frameglass.length > 0 &&
                frameglass.slice(0, 4).map((value) => {
                  return <GlassCard value={value?.data} key={value.id} />;
                })}
            </Stack>
          </Box>
          <Box>
            <Typography variant="h5" fontWeight={700}>
              PROTECTIVE EYEWARE
            </Typography>
            <Stack direction="row" spacing={2}>
              {eyeglass &&
                eyeglass.length > 0 &&
                eyeglass.slice(0, 4).map((value) => {
                  return <GlassCard value={value?.data} key={value.id} />;
                })}
            </Stack>
          </Box>
        </Stack>
      </Container>
      <Box sx={{ mt: 2 }}>
        <CardMedia
          sx={{ height: 140, width: "100%" }}
          image={require("../../assets/images/banners/banner54.webp")}
          title="green iguana"
        />
      </Box>
      <Container>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "30rem",
          }}
        >
          <Typography variant="h5" fontWeight={700}>
            Our Categories
          </Typography>
          <Stack direction="row" spacing={2}>
            {banner &&
              banner.length > 0 &&
              banner.map((value) => {
                return <CatCard key={value.id} value={value} />;
              })}
          </Stack>
        </Box>
      </Container>
      <Box
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "20rem",
        }}
      >
        <Typography variant="h5" fontWeight={700}>
          Enjoy our premium brands
        </Typography>
        <CardMedia
          sx={{ height: 160, width: "100%" }}
          image={require("../../assets/images/img/VC-Banner.webp")}
          title="green iguana"
        />
      </Box>
      <Container>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Stack direction="row" spacing={2}>
            {brandImgs?.map((img, i) => (
              <img
                src={img}
                alt={"..."}
                key={i}
                style={{ width: "10rem", height: "5rem" }}
              />
            ))}
          </Stack>
        </Box>
      </Container>
      <Box
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "20rem",
        }}
      >
        <Typography variant="h5" fontWeight={700}>
          Enjoy our premium brands
        </Typography>
        <CardMedia
          sx={{ height: 160, width: "100%" }}
          image={require("../../assets/images/img/Updated brand banner jj .webp")}
          title="green iguana"
        />
      </Box>
      <Container>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Stack direction="row" spacing={2}>
            {supportStym?.map((value, i) => (
              <CatCard key={value.id} value={value} />
            ))}
          </Stack>
        </Box>
      </Container>
      <Container
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography variant="h5" fontWeight={700}>
          Enjoy our premium brands
        </Typography>
        <CardMedia
          sx={{ height: 500, width: "100%" }}
          image={require("../../assets/images/img/Rectangle 5189.png")}
          title="green iguana"
        />
      </Container>
      <CardMedia
        sx={{ height: 160, width: "100%" }}
        image={require("../../assets/images/img/LK-Readers-Banner.webp")}
        title="green iguana"
      />
      <Container
        sx={{
          height: "30rem",
        }}
      >
        <Box>
          <Typography color="secondary" variant="h5" fontWeight={700}>
            EYGLASSES
          </Typography>
          <SwiperSlider eyeglass={frameglass} rate={true} />
        </Box>
      </Container>
      <CardMedia
        sx={{ height: 80, width: "100%", object: "content" }}
        image={require("../../assets/images/img/callFooter.png")}
        title="green iguana"
      />
    </>
  );
};

export default HomePage;
