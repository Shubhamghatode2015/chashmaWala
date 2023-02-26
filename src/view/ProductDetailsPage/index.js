import React, { useEffect, Suspense, useState } from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  fatchEyeglasses,
  fatchFrameglasses,
  fatchSunglasses,
  fetchSingleGlass,
  handleProductId,
} from "../../redux/festures/framekartSlice";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { Box, Container } from "@mui/system";
import ImageSliderCarousel from "../../Components/Carousel/ImageSliderCarousel";
import Typography from "@mui/material/Typography";
import img from "../../assets/images/chashma.jpg";
import {
  Avatar,
  Checkbox,
  Divider,
  IconButton,
  ImageList,
  ImageListItem,
  InputBase,
  Stack,
  TextField,
  useMediaQuery,
} from "@mui/material";
import {
  Add,
  Favorite,
  FavoriteBorder,
  LocalMallRounded,
  LocationOn,
  Remove,
  ShoppingBagRounded,
  ShoppingCart,
} from "@mui/icons-material";
import GlassCard from "../../Examples/GlassCard";
import Cards from "../../Examples/Card";
import ColorCard from "../../Examples/ColorCard";

import BasicModal from "../../Components/Modal";
import TryOn from "../TryOn";
import Accordions from "../../Components/Accordions";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import DeepArAI from "../../Components/DeepAR";
import SelectGlass from "../SelectGlasses/SelectGlass";
import Index_360 from "../../Components/360 view/Component";
import Loader from "../../Components/Loader";
import DownDrawer from "../../Components/Drawer/MobileDown";

const ProductDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    loading,
    singleGlass,
    sunglass,
    eyeglass,
    frameglass,
    error,
    productId,
  } = useSelector((state) => ({
    ...state.framekartData,
  }));
  const [show, unShow] = useState(false);
  const [show1, unShow1] = useState(false);
  const [show2, unShow2] = useState(false);
  const [downDrawerOpen, setDownDrawerOpen] = useState(false);
  useEffect(() => {
    dispatch(fetchSingleGlass(id));
    dispatch(fatchSunglasses());
    dispatch(fatchFrameglasses());
    dispatch(fatchEyeglasses());
    dispatch(handleProductId({ productId: id }));
  }, [id, dispatch]);

  console.log(singleGlass, "singleGlass");
  const Gallery = singleGlass.find((value) => {
    return value.id === "gallery";
  });
  const summary = singleGlass.find((value) => {
    return value.id === "summary";
  });
  const details = singleGlass.find((value) => {
    return value.id === "color_options";
  });
  const air = singleGlass.filter((value) => {
    return value.id === "Air";
  });
  const plp1jj = singleGlass.filter((value) => {
    return value.id === "plp1-jj";
  });
  const plp2jj = singleGlass.filter((value) => {
    return value.id === "pdp2-jj";
  });
  const kiara = singleGlass.filter((value) => {
    return value.id === "kiara_aquacolor";
  });
  const floatpop = singleGlass.filter((value) => {
    return value.id === "floatpop";
  });
  const matches = useMediaQuery("(max-width:870px)");
  // console.log(air, "air");
  // console.log(plp1jj, "plp1jj");
  // console.log(plp2jj, "plp2jj");
  // console.log(details, "details");
  // console.log(summary, "summary");
  // console.log(Gallery, "Gallery");

  function Model(props) {
    const { scene } = useGLTF(
      `https://res.cloudinary.com/demo/${img}/c_scale,w_800/e_camera/DamagedHelmet3D.png`
    );
    return <primitive object={scene} />;
  }

  return (
    <>
      <Container
        sx={{
          mt: 3,
          display: { xs: "flex", md: "block", xl: "block" },
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* mobile view .......................................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
        <Box
          sx={{
            display: { xs: "flex", md: "none", xl: "none" },
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" color="initial" fontWeight={700}>
              {summary?.data?.brandName}
            </Typography>
            <Typography variant="h6" color="info" fontWeight={400}>
              {summary?.data?.type}
            </Typography>
          </Box>
          <IconButton aria-label="remove" size="small" sx={{ ml: "2rem" }}>
            <LocalMallRounded
              onClick={() => navigate(`/cart-page/${summary?.data?.id}`)}
              fontSize="inherit"
              sx={{ fontSize: "2.5rem", color: "secondary.main" }}
            />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            mt: { xs: 3, md: 0, xl: 0 },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "32%", xl: "32%" },
              minHeight: { xs: "100%", md: "20rem", xl: "20rem" },
            }}
          >
            <ImageSliderCarousel imageUrls={Gallery?.data} />
          </Box>
          {/* ....................................................................................mobile view */}
          <Box
            sx={{
              display: { xs: "flex", md: "none", xl: "none" },
              alignItems: "flex-start",
              justifyContent: "space-evenly",
              mt: 3,
            }}
          >
            <Button
              variant="outlined"
              color="secondary"
              sx={{
                borderRadius: " 15px 0 0 0",
                width: "6rem",
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "white.main",
                  borderColor: "primary.main",
                },
              }}
            >
              Photo
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              sx={{
                borderRadius: "0 0 0 0",
                width: "6rem",
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "white.main",
                  borderColor: "primary.main",
                },
              }}
              onClick={() => unShow(true)}
            >
              360
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              sx={{
                borderRadius: "0 15px 0 0",
                width: "6rem",
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "white.main",
                  borderColor: "primary.main",
                },
              }}
              onClick={() => unShow1(true)}
            >
              Try On
            </Button>

            <IconButton
              size="small"
              sx={{ ml: "2rem" }}
              onClick={() => setDownDrawerOpen(true)}
            >
              <Avatar
                alt="Remy Sharp"
                src={require("../../assets/icons/pantone.png")}
                sx={{ width: 24, height: 24 }}
              />
            </IconButton>
          </Box>

          <Box
            sx={{
              height: "100%",
              width: "100%",
              mt: 3,
              alignItems: "flex-start",
              justifyContent: "space-between",
              display: { xs: "flex", md: "none", xl: "none" },
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 3,
              }}
            >
              <Typography variant="h4" color="info" fontWeight={700}>
                ₹ {summary?.data?.prices[1].price}
              </Typography>

              <img
                alt="Remy Sharp"
                src={require("../../assets/icons/share.png")}
                style={{ width: "24px", height: "24px" }}
              />
            </Box>
            <Stack spacing={2} direction={"row"}>
              <Typography variant="body1" color="info">
                Available in stock
              </Typography>
            </Stack>

            <Typography variant="subtitle 1 " color="info" sx={{ mt: 2 }}>
              {summary?.data?.description} feel with subtly curved lenses. Made
              with lightweight TR90 plastic, these large square sunglasses have
              a striking layered design. The matte translucent front rim
              features a dark tortoiseshell overlay and dark tortoiseshell
              temple arms. A metal brow bar adds a modern touch. Please note,
              the actual pattern on
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xs: "block ", md: "none", sx: "none" },
              mt: 2,
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={"/cart-page"}
              sx={{ width: "100%", p: 2 }}
            >
              Add to cart
            </Button>
          </Box>
          {/* dextop view..........................<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
          <Box
            sx={{
              height: { xs: "100%", md: "100%", xl: "100%" },
              ml: { xs: 0, md: 3, xl: 3 },
              justifyContent: "space-between",
              display: { xs: "none", md: "flex", xl: "flex" },
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Typography variant="h3" color="initial" fontWeight={700}>
              {summary?.data?.brandName}
            </Typography>
            <Typography variant="h5" color="initial" fontWeight={400}>
              {summary?.data?.type}
            </Typography>

            <Typography variant="h6" color="initial" fontWeight={600}>
              ₹ {summary?.data?.prices[1].price}
            </Typography>

            <Stack spacing={2} direction={"row"}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: 400,
                  gap: 2,
                }}
              >
                <Checkbox
                  icon={
                    <FavoriteBorder
                      sx={{ fontSize: "1.5rem", color: "secondary.main" }}
                    />
                  }
                  checkedIcon={
                    <Favorite
                      sx={{ fontSize: "1.5rem", color: "primary.main" }}
                    />
                  }
                />
                <IconButton aria-label="remove" size="small">
                  <ShoppingCart
                    onClick={() => navigate(`/cart-page/${summary?.data?.id}`)}
                    fontSize="inherit"
                    sx={{
                      fontSize: "1.5rem",
                      color: "secondary.main",
                      "&: hover": {
                        color: "primary.main",
                      },
                    }}
                  />
                </IconButton>
                {/* <IconButton aria-label="remove" size="small">
                  <FavoriteBorder
                    onClick={() => navigate("/selectGlass-page")}
                    fontSize="inherit"
                    sx={{ fontSize: "1.5rem", color: "secondary.main" }}
                  />
                </IconButton> */}
                <Button
                  variant="contained"
                  size="small"
                  fullWidth
                  color="primary"
                  sx={{
                    color: "white.main",
                    "&: hover": {
                      color: "primary.main",
                      borderColor: "primary.main",
                      border: 0.5,
                      bgcolor: "transparent",
                      fontWight: "600",
                    },
                  }}
                  onClick={() => unShow2(true)}
                >
                  select lenses
                </Button>

                {/* <Favorite /> */}
              </Box>
            </Stack>

            <Typography variant="body1" color="initial" fontWeight={600}>
              Qty : {summary?.data?.qty}
            </Typography>
            <Typography variant="h5" color="initial">
              Description
            </Typography>
            <Typography variant="body1" color="initial">
              {summary?.data?.description} Using advanced edging technology and
              high-quality materials, our premium sunglasses have a luxurious
              feel with subtly curved lenses. Made with lightweight TR90
              plastic, these large square sunglasses have a striking layered
              design. The matte translucent front rim features a dark
              tortoiseshell overlay and dark tortoiseshell temple arms. A metal
              brow bar adds a modern touch. Please note, the actual pattern on
              eyeglasses may vary slightly from the one pictured.
            </Typography>
          </Box>
        </Box>{" "}
        <Box
          sx={{
            alignItems: "flex-end",
            m: 2,
            display: { xs: "none", md: "flex", xl: "flex" },
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Button
              variant="outlined"
              color="secondary"
              sx={{
                borderRadius: " 15px 0 0 0",
                fontWeight: "600",
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "white.main",
                  borderColor: "primary.main",
                },
              }}
            >
              Photo
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              sx={{
                borderRadius: "0 0 0 0",
                fontWeight: "600",
                width: "6rem",
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "white.main",
                  borderColor: "primary.main",
                },
              }}
              onClick={() => unShow(true)}
            >
              360
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              sx={{
                borderRadius: "0 15px 0 0",
                fontWeight: "600",
                width: "6rem",
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "white.main",
                  borderColor: "primary.main",
                },
              }}
              onClick={() => unShow1(true)}
            >
              Try On
            </Button>
          </Box>
          <Box
            width={300}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="subtitle1" color="initial">
              Available: Yes
            </Typography>
            <Typography variant="subtitle1" color="initial">
              Model No: {summary?.data?.modelName}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Typography variant="body1" color="initial">
              Check delivery in your city
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "white.main",
                boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.15)",
                borderRadius: "7px",
              }}
            >
              <LocationOn sx={{ color: "primary.main", mr: 1 }} />
              <InputBase
                placeholder="Enter Your pin"
                inputProps={{ "aria-label": "Enter your pin" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <Typography variant="body1" color="primary" fontWeight={500}>
                  Check
                </Typography>
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography
            variant="h6"
            color="initial"
            fontWeight={600}
            marginTop={matches ? 3 : 0}
          >
            More Info
          </Typography>
          <Stack
            direction={matches ? "column" : "row"}
            spacing={3}
            marginTop={matches ? 1 : 3}
          >
            <Box>
              <Accordions
                name={
                  <Typography variant="h6" color="initial" fontWeight={700}>
                    SPECIFICATIONS
                  </Typography>
                }
                details={
                  <Stack
                    direction={matches ? "column" : "row"}
                    spacing={2}
                    marginTop={1}
                  >
                    {summary?.data?.specifications &&
                      summary?.data?.specifications.length &&
                      summary?.data?.specifications.map((info, i) => (
                        <Box key={i}>
                          <Typography
                            variant="subtitle1"
                            color="initial"
                            textTransform={"uppercase"}
                            fontWeight={700}
                          >
                            {info?.name}
                          </Typography>
                          {info?.items &&
                            info?.items.length > 0 &&
                            info?.items.map((value, i) => (
                              <span style={{ display: "flex", gap: 2 }}>
                                <Typography
                                  variant="body1"
                                  color="initial"
                                  key={i}
                                  sx={{
                                    fontWeight: { xs: 400, md: 600, xl: 600 },
                                  }}
                                  whiteSpace={"noWrap"}
                                >
                                  {value?.name} :
                                </Typography>
                                <Typography
                                  variant="body1"
                                  color="initial"
                                  key={i}
                                  sx={{ color: "info.main" }}
                                  whiteSpace={"noWrap"}
                                >
                                  {value?.value}
                                </Typography>
                              </span>
                            ))}
                        </Box>
                      ))}
                  </Stack>
                }
              />
            </Box>
            <Box>
              <Accordions
                padding={5}
                name={
                  <Typography
                    variant="h6"
                    color="initial"
                    textTransform={"uppercase"}
                    fontWeight={700}
                  >
                    FRAME SIZE
                  </Typography>
                }
                details={
                  <Stack direction="row" spacing={2} marginTop={1}>
                    <Box>
                      {summary?.data?.frameDetails &&
                        summary?.data?.frameDetails.length &&
                        summary?.data?.frameDetails.map((info, i) => (
                          <span style={{ display: "flex", gap: 1.5 }}>
                            <Typography
                              variant="body1"
                              color="initial"
                              key={i}
                              sx={{ fontWeight: { xs: 400, md: 600, xl: 600 } }}
                              whiteSpace={"noWrap"}
                            >
                              {info.name} :
                            </Typography>
                            <Typography
                              variant="body1"
                              color="initial"
                              key={i}
                              sx={{ color: "info.main" }}
                              whiteSpace={"noWrap"}
                            >
                              {info.value}
                            </Typography>
                          </span>
                        ))}
                    </Box>
                    <Box>
                      {summary?.data?.frameDetails &&
                        summary?.data?.frameDetails.length &&
                        summary?.data?.frameDetails.map((info, i) => (
                          <span style={{ display: "flex", gap: 1.5 }}>
                            <Typography
                              variant="body1"
                              color="initial"
                              key={i}
                              sx={{ fontWeight: { xs: 400, md: 600, xl: 600 } }}
                              whiteSpace={"noWrap"}
                            >
                              {info.name} :
                            </Typography>
                            <Typography
                              variant="body1"
                              color="initial"
                              key={i}
                              sx={{ color: "info.main" }}
                              whiteSpace={"noWrap"}
                            >
                              {info.value}
                            </Typography>
                          </span>
                        ))}
                    </Box>
                  </Stack>
                }
              />
            </Box>
          </Stack>
        </Box>
        {/* mobile view...........................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <Box
          sx={{
            mt: 2,
            display: { xs: "flex", md: "none", xl: "none" },
            justifyContent: "space-between",
            flexDirection: "column",
            widht: "90%, ",
          }}
        >
          <Typography variant="body1" color="initial">
            Check delivery in your city
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "white.main",
              boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.15)",
              borderRadius: "7px",
              mt: 2,
              widht: "100%",
            }}
          >
            <LocationOn sx={{ color: "primary.main", mr: 2, fontSize: 25 }} />
            <InputBase
              placeholder="Enter Your pin"
              inputProps={{ "aria-label": "Enter your pin" }}
            />
            <IconButton type="button" sx={{ p: 2 }} aria-label="search">
              <Typography variant="body1" color="primary" fontWeight={500}>
                Check
              </Typography>
            </IconButton>
          </Box>
        </Box>
        {/* dextop view...........................>>>>>>>>>>>>> */}
        <Box
          marginTop={5}
          marginBottom={3}
          sx={{
            height: "100%",
            display: { xs: "none", md: "block", xl: "block" },
          }}
        >
          <Typography variant="h6" fontWeight={600}>
            9 Colors Available
          </Typography>
          <Box
            sx={{
              width: "100%",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "row",
              gap: 3,
              flexWrap: "wrap",
              mt: 2,
              mb: 3,
            }}
          >
            {details?.data &&
              details?.data.length > 0 &&
              details?.data.map((value, i) => {
                return <ColorCard value={value} key={i} />;
              })}
          </Box>
        </Box>
        <Box
          marginTop={5}
          width={"100%"}
          sx={{ display: { xs: "none", md: "flex", xl: "flex" } }}
        >
          {air &&
            air.length > 0 &&
            air.slice(0, 3).map((airs, i) => (
              <ImageList
                key={i}
                sx={{ width: "100%", height: 200 }}
                cols={3}
                rowHeight={164}
                variant="quilted"
              >
                {airs?.data && airs?.data.length > 0 ? (
                  airs?.data.map((item) => (
                    <ImageListItem key={item.img} cols={1} rows={1}>
                      <img
                        src={`${item?.imageUrl}?w=800&h=300&fit=contain&auto=format`}
                        srcSet={`${item?.imageUrl}?w=800&h=300&fit=contain&auto=format&dpr=2 2x`}
                        alt={"...."}
                        loading="lazy"
                        style={{ width: "20rem", objectFit: "contain" }}
                      />
                    </ImageListItem>
                  ))
                ) : (
                  <Loader />
                )}
              </ImageList>
            ))}
          {plp1jj &&
            plp1jj.length > 0 &&
            plp1jj.slice(0, 3).map((airs, i) => (
              <ImageList
                key={i}
                sx={{ width: 500, height: 450, margin: "auto" }}
                variant="woven"
                cols={3}
                gap={8}
              >
                {airs?.data &&
                  airs?.data.length > 0 &&
                  airs?.data.map((item) => (
                    <ImageListItem key={item.img} cols={1} rows={1}>
                      <img
                        src={`${item?.imageUrl}?w=800&h=300&fit=contain&auto=format`}
                        srcSet={`${item?.imageUrl}?w=800&h=300&fit=contain&auto=format&dpr=2 2x`}
                        alt={"...."}
                        loading="lazy"
                        style={{ width: "20rem", objectFit: "contain" }}
                      />
                    </ImageListItem>
                  ))}
              </ImageList>
            ))}
          {plp2jj &&
            plp2jj.length > 0 &&
            plp2jj.slice(0, 3).map((airs, i) => (
              <ImageList
                key={i}
                sx={{ width: 500, height: 450, margin: "auto" }}
                variant="woven"
                cols={3}
                gap={8}
              >
                {airs?.data &&
                  airs?.data.length > 0 &&
                  airs?.data.map((item) => (
                    <ImageListItem key={item.img} cols={1} rows={1}>
                      <img
                        src={`${item?.imageUrl}?w=800&h=300&fit=contain&auto=format`}
                        srcSet={`${item?.imageUrl}?w=800&h=300&fit=contain&auto=format&dpr=2 2x`}
                        alt={"...."}
                        loading="lazy"
                        style={{ width: "20rem", objectFit: "contain" }}
                      />
                    </ImageListItem>
                  ))}
              </ImageList>
            ))}
          {kiara &&
            kiara.length > 0 &&
            kiara.slice(0, 3).map((airs, i) => (
              <ImageList
                key={i}
                sx={{ width: 500, height: 450, margin: "auto" }}
                variant="woven"
                cols={3}
                gap={8}
              >
                {airs?.data &&
                  airs?.data.length > 0 &&
                  airs?.data.map((item) => (
                    <ImageListItem key={item.img} cols={1} rows={1}>
                      <img
                        src={`${item?.imageUrl}?w=800&h=300&fit=contain&auto=format`}
                        srcSet={`${item?.imageUrl}?w=800&h=300&fit=contain&auto=format&dpr=2 2x`}
                        alt={"...."}
                        loading="lazy"
                        style={{ width: "20rem", objectFit: "contain" }}
                      />
                    </ImageListItem>
                  ))}
              </ImageList>
            ))}
          {floatpop &&
            floatpop.length > 0 &&
            floatpop.slice(0, 3).map((airs, i) => (
              <ImageList
                key={i}
                sx={{ width: 500, height: 450, margin: "auto" }}
                variant="woven"
                cols={3}
                gap={8}
              >
                {airs?.data &&
                  airs?.data.length > 0 &&
                  airs?.data.map((item) => (
                    <ImageListItem key={item.img} cols={1} rows={1}>
                      <img
                        src={`${item?.imageUrl}?w=800&h=300&fit=contain&auto=format`}
                        srcSet={`${item?.imageUrl}?w=800&h=300&fit=contain&auto=format&dpr=2 2x`}
                        alt={"...."}
                        loading="lazy"
                        style={{ width: "20rem", objectFit: "contain" }}
                      />
                    </ImageListItem>
                  ))}
              </ImageList>
            ))}
        </Box>
        {/*  mbolile view banner..............................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <Box
          marginTop={5}
          width={"100%"}
          sx={{
            display: { xs: "block", md: "none", xl: "none" },
          }}
        >
          {air &&
            air.length > 0 &&
            air.slice(0, 4).map((airs, i) => (
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                key={i}
              >
                {airs?.data &&
                  airs?.data.length > 0 &&
                  airs?.data.map((item) => (
                    <img
                      key={item.img}
                      src={`${item?.imageUrl}?w=800&h=300&fit=contain&auto=format`}
                      srcSet={`${item?.imageUrl}?w=800&h=300&fit=contain&auto=format&dpr=2 2x`}
                      alt={"...."}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  ))}
              </Box>
            ))}
          {plp1jj &&
            plp1jj.length > 0 &&
            plp1jj.slice(0, 4).map((airs, i) => (
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {airs?.data &&
                  airs?.data.length > 0 &&
                  airs?.data.map((item) => (
                    <img
                      key={item.img}
                      src={`${item?.imageUrl}?w=800&h=300&fit=contain&auto=format`}
                      srcSet={`${item?.imageUrl}?w=800&h=300&fit=contain&auto=format&dpr=2 2x`}
                      alt={"...."}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  ))}
              </Box>
            ))}
          {plp2jj &&
            plp2jj.length > 0 &&
            plp2jj.slice(0, 4).map((airs, i) => (
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {airs?.data &&
                  airs?.data.length > 0 &&
                  airs?.data.map((item) => (
                    <img
                      key={item.img}
                      src={`${item?.imageUrl}?w=800&h=300&fit=contain&auto=format`}
                      srcSet={`${item?.imageUrl}?w=800&h=300&fit=contain&auto=format&dpr=2 2x`}
                      alt={"...."}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  ))}
              </Box>
            ))}
          {kiara &&
            kiara.length > 0 &&
            kiara.slice(0, 4).map((airs, i) => (
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {airs?.data &&
                  airs?.data.length > 0 &&
                  airs?.data.map((item) => (
                    <img
                      key={item.img}
                      src={`${item?.imageUrl}?w=800&h=300&fit=contain&auto=format`}
                      srcSet={`${item?.imageUrl}?w=800&h=300&fit=contain&auto=format&dpr=2 2x`}
                      alt={"...."}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  ))}
              </Box>
            ))}
        </Box>
        {/*  mobile view related..............................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <Box
          sx={{
            position: "relative",
            display: { xs: "block", md: "none", xl: "none" },
            alignItems: "flex-start",
            mt: 3,
          }}
        >
          <Typography variant="h5" fontWeight={700} sx={{ mt: 3, mb: 3 }}>
            More Products You Might Like
          </Typography>
          {summary?.data?.type === "Eyeglasses" ? (
            <Stack direction="row" spacing={2}>
              {frameglass &&
                frameglass.length > 0 &&
                frameglass.slice(0, 1).map((value) => {
                  return <GlassCard value={value?.data} key={value.id} />;
                })}
            </Stack>
          ) : null}
          {summary?.data?.type === "Sunglasses" ? (
            <Stack direction="row" spacing={2}>
              {sunglass &&
                sunglass.length > 0 &&
                sunglass.slice(0, 1).map((value) => {
                  return <GlassCard value={value?.data} key={value.id} />;
                })}
            </Stack>
          ) : null}
          {summary?.data?.type === "Contact Lens" ? (
            <Stack direction="row" spacing={2}>
              {eyeglass &&
                eyeglass.length > 0 &&
                eyeglass.slice(0, 1).map((value) => {
                  return <GlassCard value={value?.data} key={value.id} />;
                })}
            </Stack>
          ) : null}
        </Box>
        {/*  dextop view related..............................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <Box
          sx={{
            position: "relative",
            display: { xs: "none", md: "block", xl: "block" },
            alignItems: "flex-start",
            mt: 3,
          }}
        >
          <Typography variant="h5" fontWeight={700} sx={{ mt: 3, mb: 3 }}>
            Related products
          </Typography>
          {summary?.data?.type === "Eyeglasses" ? (
            <Stack direction="row" spacing={2}>
              {frameglass &&
                frameglass.length > 0 &&
                frameglass.slice(0, 4).map((value) => {
                  return <GlassCard value={value?.data} key={value.id} />;
                })}
            </Stack>
          ) : null}
          {summary?.data?.type === "Sunglasses" ? (
            <Stack direction="row" spacing={2}>
              {sunglass &&
                sunglass.length > 0 &&
                sunglass.slice(0, 4).map((value) => {
                  return <GlassCard value={value?.data} key={value.id} />;
                })}
            </Stack>
          ) : null}
          {summary?.data?.type === "Contact Lens" ? (
            <Stack direction="row" spacing={2}>
              {eyeglass &&
                eyeglass.length > 0 &&
                eyeglass.slice(0, 4).map((value) => {
                  return <GlassCard value={value?.data} key={value.id} />;
                })}
            </Stack>
          ) : null}
        </Box>
      </Container>
      <BasicModal show={show} width={"75%"} unShow={unShow}>
        {/* <Canvas
          pixelRatio={[1, 2]}
          camera={{ position: [-10, 15, 15], fov: 50 }}
        >
          <ambientLight intensity={1} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <OrbitControls />
        </Canvas> */}
        {/* <TryOn /> */}
        <Index_360 />
      </BasicModal>
      <BasicModal show={show1} unShow={unShow1} height={600} width={"75%"}>
         <DeepArAI />
      </BasicModal>
      <BasicModal
        show={show2}
        unShow={unShow2}
        height={"95%"}
        width={"90%"}
        overflowY={true}
      >
        <SelectGlass />
      </BasicModal>
      <DownDrawer state={downDrawerOpen} setState={setDownDrawerOpen}>
        <Box sx={{ height: 320, widht: "100%" }}></Box>
      </DownDrawer>
    </>
  );
};

export default ProductDetailsPage;
