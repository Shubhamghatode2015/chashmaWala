import {
  CardMedia,
  Container,
  Stack,
  Typography,
  Button,
  useMediaQuery,
  Avatar,
  InputBase,
  ButtonGroup,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
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
  categoriesArray,
  categoriesIconSlideData,
  customerReviewSlideData,
  drawerItems,
  promoSlideData,
  supportStym,
} from "../../CreatedData";
import SwiperSlider from "../../Components/SwiperSlider";
import Loader from "../../Components/Loader";
import ResponsiveAppBar from "../../Components/NavBaar/Appbar";
import { handleDrawerLeft } from "../../redux/Drawer/LeftDrawerSlice";

import { LocationOn, Storefront, TouchApp } from "@mui/icons-material";
import { useState } from "react";
import BasicModal from "../../Components/Modal";
// import View360 from "../../Components/360 view";
import { Link, useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";

const HomePage = () => {
  const matches = useMediaQuery("(max-width:870px)");
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

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#FFFFFF",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.2)",
    marginLeft: 0,
    width: "100%", height : '41px',
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));
  const [show, unShow] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {!matches ? (
        <>
          <Box sx={{ mt: 3 }}>
            <SwiperSlider data={arr_imgs} />
          </Box>
          <Container sx={{ mt: 3 }}>
            <Stack direction="column" spacing={4}>
              <Box>
                <Typography variant="h5" fontWeight={700}>
                  SUNGLASSES
                </Typography>
                <Stack direction="row" spacing={2} marginTop={3}>
                  {sunglass && sunglass.length > 0 ? (
                    sunglass.slice(0, 4).map((value) => {
                      return <GlassCard value={value?.data} key={value.id} />;
                    })
                  ) : (
                    <Loader />
                  )}
                </Stack>
              </Box>
              <Box>
                <Typography variant="h5" fontWeight={700}>
                  PRESCRIPTION FRAMES
                </Typography>
                <Stack direction="row" spacing={2} marginTop={3}>
                  {frameglass && frameglass.length > 0 ? (
                    frameglass.slice(0, 4).map((value) => {
                      return <GlassCard value={value?.data} key={value.id} />;
                    })
                  ) : (
                    <Loader />
                  )}
                </Stack>
              </Box>
              <Box>
                <Typography variant="h5" fontWeight={700}>
                  PROTECTIVE EYEWARE
                </Typography>
                <Stack direction="row" spacing={2} marginTop={3}>
                  {eyeglass && eyeglass.length > 0 ? (
                    eyeglass.slice(0, 4).map((value) => {
                      return <GlassCard value={value?.data} key={value.id} />;
                    })
                  ) : (
                    <Loader />
                  )}
                </Stack>
              </Box>

              {/* <Button
                variant="outlined"
                color="primary"
                onClick={() => dispatch(handleDrawerLeft(true))}
              >
                hii there
              </Button> */}
            </Stack>
          </Container>
          <Box sx={{ mt: 3, height: 265, width: "100%" }}> 
            <img
              src={require("../../assets/images/banners/3di.png")} 
              alt=".."
              style={{ height: "100%", width: "100%", objectFit: "Contain" }}
            />
          </Box>
          <Container>
            <Stack spacing={4} direction="row" sx={{ mt: 5 }}>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                sx={{
                  "&: hover": {
                    color: "white.main",
                    bgcolor: "primary.main",
                  },
                }}
                onClick={() => navigate(`/filter-page/${"value._id=men"}`)}
              >
                Men
              </Button>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                sx={{
                  "&: hover": {
                    color: "white.main",
                    bgcolor: "primary.main",
                  },
                }}
                onClick={() => navigate(`/filter-page/${"value._id=women"}`)}
              >
                Women
              </Button>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                sx={{
                  "&: hover": {
                    color: "white.main",
                    bgcolor: "primary.main",
                  },
                }}
                onClick={() => navigate(`/filter-page/${"value._id=Children"}`)}
              >
                Kid
              </Button>
            </Stack>

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
              <Stack direction="row" spacing={3}>
                {banner && banner.length > 0 ? (
                  banner.map((value) => {
                    return <CatCard key={value.id} value={value}  />;
                  })
                ) : (
                  <Loader />
                )}
              </Stack>
            </Box>
          </Container>
          <Box
            sx={{
              mt: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Typography variant="h5" fontWeight={700}>
              Enjoy our premium brands
            </Typography>
            <Box sx={{ mt: 3, height: 265, width: "100%" }}>
              <img
                src={require("../../assets/images/img/VC-Banner.webp")}
                alt=".."
                style={{ height: "100%", width: "100%", objectFit: "Contain" }}
              />
            </Box>
          </Box>
          <Container>
            <Box
              sx={{
                mt: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Stack direction="row" spacing={4}>
                {brandImgs && brandImgs.length > 0 ? (
                  brandImgs.map((img, i) => (
                    <img
                      src={img}
                      alt={"..."}
                      key={i}
                      style={{ width: "10rem", height: "5rem" }}
                    />
                  ))
                ) : (
                  <Loader />
                )}
              </Stack>
            </Box>
          </Container>
          <Box
            sx={{
              mt: 5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Typography variant="h5" fontWeight={700}>
              Enjoy our premium brands
            </Typography>
            <Box sx={{ mt: 2, height: 265, width: "100%" }}>
              <img
                src={require("../../assets/images/img/Updated brand banner jj .webp")}
                alt=".."
                style={{ height: "100%", width: "100%", objectFit: "Contain" }}
              />
            </Box>
          </Box>
          <Container>
            <Box
              sx={{
                mt: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Stack direction="row" spacing={3}>
                {supportStym && supportStym.length > 0 ? (
                  supportStym.map((value, i) => (
                    <CatCard key={value.id} value={value} rate={true} />
                  ))
                ) : (
                  <Loader />
                )}
              </Stack>
            </Box>
          </Container>
          <Container
            sx={{
              mt: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box
              sx={{
                p: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "column",
                height: "20rem",
                width: "100%",
                position: "relative",
                mb: 2,
                border: 0.3,
                borderColor: "info.main",
                borderRadius: 6,
                mt: 5,
              }}
            >
              <Typography variant="h5" color="secondary" fontWeight={700}>
                3D tryOn
              </Typography>
              <Box
                sx={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  position: "absolute",
                  left: "5%",
                  top: "25%",
                }}
              >
                <Typography variant="h6" color="initial" fontWeight={700}>
                  scan your face with our state-of-the-art <br /> AI to see what
                  suits you best.
                </Typography>
                <Typography variant="body1" color="secondary">
                  scan your face with our state-of-the-art <br /> AI to see what
                  suits you best.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => unShow(true)}
                >
                  Get Started
                </Button>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  width: 430,
                  height: 430,
                  right: "10%",
                  top: "-35%",
                }}
              >
                <img
                  src={require("../../assets/images/shraddha2.png")}
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Box>
          </Container>

          <Box sx={{ mt: 2, height: 265, width: "100%" }}>
            <img
              src={require("../../assets/images/img/LK-Readers-Banner.png")}
              alt=".."
              style={{ height: "100%", width: "100%", objectFit: "Contain" }}
            />
          </Box>
          <Container
            sx={{
              height: "30rem",
              mt: 3,
            }}
          >
            <Box
              sx={{
                mt: 3,
              }}
            >
              <Typography
                color="secondary"
                variant="h5"
                fontWeight={700}
                sx={{
                  mt: 3,
                  mb: 3,
                }}
              >
                EYGLASSES
              </Typography>
              <SwiperSlider eyeglass={frameglass} play={true} />
            </Box>
          </Container>
          <CardMedia
            sx={{ height: 80, width: "100%", object: "content", mt: 3 }}
            image={require("../../assets/images/img/callFooter.png")}
            title="fremkart"
          />
        </>
      ) : (
        <>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                marginBottom: "10px",
              }}
            >
              <Box sx={{ width: { xs: "23%", sm: "15%" }, padding: 0 }}>
                <Box
                  sx={{
                    width: { sm: "100%", xs: "100%" },
                    backgroundColor: "#0395AF",
                    height: "8vh",
                    borderTopRightRadius: "50px",
                    borderBottomRightRadius: "50px",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "50% 50%",
                      display: "flex",
                      justifyContent: "center",
                      width: "83%",
                      alignItems: "center",
                      height: "8vh",
                    }}
                  >
                    {/* <img src={user} width="80" alt="" /> */}
                    <Avatar
                      alt="Remy Sharp"
                      sx={{
                        width: { xs: "60px", sm: "85px" },
                        height: { xs: "60px", sm: "85px" },
                      }}
                      src={require("../../assets/images/shraddha.jpg")}
                      onClick={() => dispatch(handleDrawerLeft(true))}
                    />
                  </Box>
                </Box>

                {/* <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer> */}
              </Box>

              <Box sx={{ width: "49%" }}>
                <Box sx={{ paddingLeft: "9px" }}>
                  <Typography
                    color="#353638"
                    variant="h6"
                    fontFamily="inherit"
                    sx={{ fontSize: { xs: "17px", sm: "25px" } }}
                  >
                    Anubha Gupta
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LocationOn
                    sx={{ color: "#D04141", width: "25px", height: "20px" }}
                  />
                  <Typography
                    variant="h6"
                    fontFamily="inherit"
                    sx={{
                      color: "#979797",
                      fontSize: { xs: "12px", sm: "25px" },
                    }}
                  >
                    Bhopal, 458001
                  </Typography>
                </Box>
              </Box>
              <Box
                width="30%"
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  paddingRight: "15px",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                  <img
                    width="30"
                    src={require("../../assets/icons/bell.png")}
                    alt=""
                  />
                  <img
                    width="30"
                    src={require("../../assets/icons/c1.png")}
                    alt=""
                  />
                </Box>
              </Box>
            </Box>
            {/* ....search box.....................................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <Box sx={{ marginBottom: "10px", padding: "10px" }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: "#ADA4A5" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
            {/* ...resonsive slider ......................................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <Box sx={{ width: "100%", p: 1, height: "12rem" }}>
              <SwiperSlider data={arr_imgs} />
            </Box>

            {/* ....button naar|By.....................................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

            <Box sx={{ padding: "10px" }}>
              <Box
                sx={{
                  background: "#FFFFFF",
                  border: "0.2px solid #0395AF",
                  boxShadow: " 4px 5px 3px rgba(3, 149, 175, 0.1)",
                  borderRadius: "7px",
                  display: "flex",
                  padding: "5px",
                  height:  "4rem",
                  alignItems: "center",'&: hover':{
                    bgcolor: 'primary.main'
                  }
                }}
              >
                <Box sx={{ width: "13%" }}>
                  <Storefront />
                  {/* <img src={vec} width="40" alt="" /> */}
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", width: "75%" }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#0395AF",
                     
                    }}
                   
                  >
                    {" "}
                    Nearby Store
                  </Typography>
                 
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: " 14%",
                    justifyContent: "center", 
                  }} 
                >
                  <Link  to={ '/stores-page'} >
                    <img src={require('../../assets/images/down-arrow.png')} style={{ widht: '25px', height: '25px'}} alt='.'  />
                    </Link> 
                  {/* <img src={arow} width="20" alt="" /> */}
                </Box>
              </Box>
            </Box>
            {/* .......shop more..................................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <Box sx={{ padding: "4px", mt: 1 }}>
              <Box
                sx={{
                  backgroundColor: "#0395AF",
                  width: "30%",
                  color: "#ffff",
                  fontSize: { xs: "14px", sm: "25px" },
                  fontWeight: "700",
                  borderRadius: "4px",
                  boxShadow: "1px 3px 3px rgba(3, 149, 175, 0.22)",
                  padding: "4px",
                  height: '2rem',
                  marginLeft: { xs: "10px", sm: "10px" },
                  display: "flex",
                  alignItems: "center",
                }}
                fontFamily="inherit"
              >
                Shop for
              </Box>
            </Box>
            {/* ....catergorienksdjnfkjasdfgbia.....................................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

            <Box
              sx={{ mt: 3,
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
              }}
              fontFamily="inherit"
            >
              <Button
                sx={{
                  border: "0.3px solid #353638",
                  width: "32%",
                  height: { xs: "4vh", sm: "5vh" },
                  color: "black",
                  fontFamily: "inherit",
                  fontWeight: "400",
                  fontSize: { xs: "14px", sm: "25px" },
                  ":hover": {
                    bgcolor: "#0395AF", // theme.palette.primary.main
                    color: "#ffff",
                  },
                }}
                onClick={() => navigate(`/filter-page/${"value._id=Children"}`)}
                variant="outlined"
              >
                Men
              </Button>
              <Button
                sx={{
                  border: "0.3px solid #353638",
                  width: "32%",
                  height: { xs: "4vh", sm: "5vh" },
                  color: "black",
                  fontFamily: "inherit",
                  fontWeight: "400",
                  fontSize: { xs: "14px", sm: "25px" },
                  ":hover": {
                    bgcolor: "#0395AF", // theme.palette.primary.main
                    color: "#ffff",
                  },
                }}
                onClick={() => navigate(`/filter-page/${"value._id=Children"}`)}
                variant="outlined"
              >
                Women
              </Button>
              <Button
                sx={{
                  border: "0.3px solid #353638",
                  width: "32%",
                  height: { xs: "4vh", sm: "5vh" },
                  color: "black",
                  fontFamily: "inherit",
                  fontWeight: "400",
                  fontSize: { xs: "14px", sm: "25px" },
                  ":hover": {
                    bgcolor: "#0395AF", // theme.palette.primary.main
                    color: "#ffff",
                  },
                }}
                onClick={() => navigate(`/filter-page/${"value._id=Children"}`)}
                variant="outlined"
              >
                Kids
              </Button>
            </Box>
            {/* ..cateriojhoigjnlkangk;asjdhnkjsdfb........ourCategiorewrkasduhf...............................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

            <Box
              sx={{ mt: 2,
                display: "flex",
                justifyContent: "space-evenly",
                padding: 1,
              }}
            >
              {banner && banner.length > 0 ? (
                banner.map((value) => {
                  return  <Link to={`/filter-page/${"value._id=Children"}`}>
                    <CatCard key={value.id} value={value} />
                    </Link>
                    ;
                })
              ) : (
                <Loader />
              )}
            </Box>

            {/* ...cattttkjadkjkjajkdhkjasdfgvasdgasfgag......................................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <Box>
              <Box>
                <Box>
                  <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                    <Typography
                      sx={{ color: "#0395AF", textShadow: "1px 8px 10px grey" }}
                      fontFamily="inherit"
                    >
                      Categories
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src={require("../../assets/images/bland.png")}
                      width="100"
                      alt=""
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    p: 1, mt: 2,
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    gap: 3,
                    height: "100%",
                  }}
                >
                  {categoriesArray && categoriesArray.length > 0 ? (
                    categoriesArray.map((value) => (
                      <Box
                        sx={{ mt: 1,
                          width: "170px",
                          height: "110px",
                          textAlign: "center",
                        }}
                        key={value.id} component={Link} to={`/filter-page/${"value._id=Children"}`}
                      >
                        <CardMedia
                          sx={{ height: "96px", width: "170px", borderRadius: 2 }}
                          // image={require("../../assets/images/shraddha.jpg")}

                          image={value.img}
                          title="fremkart"
                        />
                        <Typography
                          variant="body1"
                          color="initial"
                          fontWeight={600} sx={{ mt: 1}}
                        >
                          {value.id}
                        </Typography>
                      </Box>
                    ))
                  ) : (
                    <Loader />
                  )}
                </Box>
              </Box>
            </Box>

            {/* ..brands.......................................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <Box>
              <Box>
                <Box>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography
                      sx={{ color: "#0395AF", textShadow: "1px 8px 10px grey" , mt: 2}}
                      fontFamily="inherit"
                    >
                      Brands
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "center" ,borderRadius: 2 ,mt: 1 }}>
                    <img
                      src={require("../../assets/images/bland.png")}
                      width="100"
                      alt="." 
                     
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    padding: "10px",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",alignItems: 'flex-start',
                    gap: 4,
                  }}
                >
                  {brandImgs.map((value, i) => (
                    <Box key={i}  component={Link} to={`/filter-page/${"value._id=Children"}`}>
                      <CardMedia
                        sx={{
                          height: { xs: "96px", sm: "100px" },
                          width: { xs: "170px", sm: "220px" }, borderRadius: 2
                        }} 
                        image={value}
                        // image={require("../../assets/images/shraddha.jpg")}
                        title="fremkart"
                      />
                    </Box>
                  ))}
                  {brandImgs.slice(0, 2).map((value, i) => (
                    <Box key={i}  component={Link} to={`/filter-page/${"value._id=Children"}`}>
                      <CardMedia
                        sx={{
                          height: { xs: "96px", sm: "100px" },
                          width: { xs: "170px", sm: "220px" },borderRadius: 2
                        }}
                        image={value}
                        // image={require("../../assets/images/shraddha.jpg")}
                        title="fremkart"
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* .........What Makes Us Stand Apart?................................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

            <Box sx={{ padding: "10px", mt: 2 }}>
              <Box
                sx={{
                  backgroundColor: "#0395AF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#ffff",
                  padding: 1,
                  borderRadius: "10px",
                  height: '3rem', mt: 1
                }}
              >
                <Typography
                  fontFamily="inherit"
                  variant="h6"
                  sx={{
                    fontWeight: "600",
                   
                  }}
                >
                  What Makes Us Stand Apart?
                </Typography>
               
              </Box>
            </Box>
            {/* .........What Makes Us Stand Apart?................................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

            <Box sx={{ width: "100%", display: "flex", mt: 3 }}>
              {supportStym?.map((value, i) => (
                <CatCard key={value.id} value={value} />
              ))}
            </Box>
            {/*  home try........................................................................<<<<<<<<<<<<<<<<<<< */}

            <Box
              sx={{
                padding: "10px",
                display: "flex",
                p: 1,
                justifyContent: "space-around",
                gap: 1, mt: 3
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  p: 1,
                  borderRadius: 2,
                  border: "0.5px solid #232323",
                  cursor: "pointer",
                }}  component={Link} to={`/stores-page`}
              >
                <Typography variant="h6" color="secondary">
                  Stores Near You
                </Typography>
                <Typography variant="body" color="info">
                  Check Location
                </Typography>
                <CardMedia
                  sx={{
                    height: { xs: "180px", sm: "100px" },
                    width: { xs: "170px", sm: "220px" },
                    borderRadius: "10px",
                  }}
                  image={require("../../assets/images/home.png")}
                  title="fremkart"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 1,
                  borderRadius: 2,
                  border: "0.5px solid #232323",
                  cursor: "pointer",
                }}  component={Link} to={`/addPrescriptions-page`}
              >
                <Typography variant="h6" color="secondary">
                  Home Try On
                </Typography>
                <Typography variant="body" color="info">
                  Test Your Eye on Home
                </Typography>
                <CardMedia
                  sx={{
                    height: { xs: "180px", sm: "100px" },
                    width: { xs: "170px", sm: "220px" },
                    borderRadius: "10px",
                  }}
                  image={require("../../assets/images/image 2402.png")}
                  title="fremkart"
                />
              </Box>
            </Box>

            {/* ..........Wide Variety
Reasonable Price
100% Genuine
Premium Eyewear
...............................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

            <Box
              sx={{
                padding: "10px",
                display: "flex",

                flexDirection: "column",
                justifyContent: "space-around",
                gap: 2,mt: 3
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  gap: 3,
                }}
              >
                {customerReviewSlideData.slice(0, 4).map((value) => (
                  <Box
                    key={value.image}
                    sx={{
                      borderRadius: 2,mt: 1,
                      border: "0.5px solid #232323",
                      cursor: "pointer",  height: { xs: "256px", },
                      width: { xs: "180px", sm: "230px" },
                      borderRadius: "10px", 
                    }}
                  >
                    <CardMedia
                      component="video"
                      sx={{
                        height: '100%',
                        width: '100%',
                        // height: { xs: "180px", sm: "100px" },
                        // width: { xs: "170px", sm: "220px" },
                        borderRadius: "10px", objectFit: 'fill',
                      }}
                      image={value.url}
                      title="fremkart"
                      autoPlay={false}
                      controls
                      poster={value.image}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </>
      )}

      <BasicModal show={show} width={"75%"} unShow={unShow}>
        {/* <Container /> */}
      </BasicModal>
    </>
  );
};

export default HomePage;
