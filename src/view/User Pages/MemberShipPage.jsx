import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { brandImgs } from "../../CreatedData";
import Loader from "../../Components/Loader";
// import Membertable from "../../Examples/Membertable";
import { Check } from "@mui/icons-material";
import { fatchFrameglasses } from "../../redux/festures/framekartSlice";
import { useDispatch } from "react-redux";
import Membertable from "../../Components/Table";
import { Link } from "react-router-dom";

const Membershippage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fatchFrameglasses());
  }, [dispatch]);
  return (
    <>
      <Box>
        <Box sx={{ height: 190, width: "100%" }}>
          <img
            src={require("../../assets/images/img/VC-Banner.webp")}
            height="100%"
            width={"100%"}  style={{ objectFit: 'fill'}}
          />
        </Box>
        <Box bgcolor={'white'}
          sx={{
            mt: { md: 2, xs: 0 },
            p: { xs: 2 },
            textAlign: "center",
            background: {
              xs: "linear-gradient(115.79deg, #A4A1CB -2.11%, rgba(217, 217, 217, 0) 110.6%)",
              sm: "linear-gradient(115.79deg, #A4A1CB -2.11%, rgba(217, 217, 217, 0) 110.6%)",
              md: "white.main",
            },
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            fontWeight={{ md: 500, xs: 700 }}
          >
            Welcome to Framekarts Premium club
          </Typography>

          <Typography
            variant="subtitle1"
            fontWeight={500}
            sx={{ display: { xs: "none" } }}
          >
            In Gold membership get a VIP treatment everytime, when you want
            <br />
            Framekarts members will be provided loyality plan and most exclusive
            offer such as <br /> Buy 1 get 1 Free and 50% off so on...
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight={500}
            sx={{ display: { md: "none", sm: "none", xs: "block" } }}
          >
            In Gold membership get a VIP treatment <br />
            everytime, when you want!
          </Typography>

          <Button
            variant="contained"
            sx={{
              bgcolor: "primary.main",
              mt: 3,
              color: "white.main",
              fonntWeight: 500,
            }} component={Link} to={`/membersip-page/${'Gold'}`}
          >
            Add Gold Membership
          </Button>
        </Box>
        <Box sx={{ height: 160, width: "100%", mt: { md: 5, xs: 0 } }}>
          <img
            src={require("../../assets/images/img/LK-Readers-Banner.png")}
            height="100%"
            width={"100%"}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            mt: 4,
            mb: 5,
          }}
        >
          <Typography variant="h5" gutterBottom>
            GET GOLD MEMBERSHIP
          </Typography>
          <Stack direction={"column"} spacing={4} mt={3}>
            <Stack direction={"row"} spacing={4}>
              {/* <Multi4 /> */}{" "}
              <Box
                sx={{
                  width: {xs:172, sm:180, md:200},
                  p: 1,
                  gap: 1,
                  height: "10rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  borderRadius: 5,
                  boxShadow: "0px 0px 4px 5px rgba(0, 0, 0, 0.25)",
                  cursor: "pointer",
                  "&: hover": {
                    boxShadow:
                      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                  },
                }}
              >
                <Box>
                  {/* <img
                        src={require("../../assets/icons/1.png")}
                        alt="."
                        style={{ height: "2rem" }}
                      /> */}
                  <Avatar alt="Remy Sharp" />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }} mt={1}>
                  Buy 1 Get 1
                </Typography>
                <Typography variant="body2" textAlign={"center"}>
                  Experience this offer to get an Extra pair of Eyewears
                </Typography>
              </Box>
              <Box
                sx={{
                  width: {xs:172, sm:180, md:200},
                  p: 1,
                  gap: 1,
                  height: "10rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                  flexDirection: "column",
                  borderRadius: 5,
                  boxShadow: "0px 0px 4px 5px rgba(0, 0, 0, 0.25)",
                  cursor: "pointer",
                  "&: hover": {
                    boxShadow:
                      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                  },
                }}
              >
                <Box>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }} mt={1}>
                  Get Early Offers
                </Typography>
                <Typography variant="body2" textAlign={"center"}>
                  Experience this offer to get an Extra pair of Eyewears
                </Typography>
              </Box>
            </Stack>
            <Stack direction={"row"} spacing={4}>
              {/* <Multi4 /> */}
              <Box
                sx={{
                  width: {xs:172, sm:180, md:200},
                  p: 1,
                  gap: 1,
                  height: "10rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                  flexDirection: "column",
                  borderRadius: 5,
                  boxShadow: "0px 0px 4px 5px rgba(0, 0, 0, 0.25)",
                  cursor: "pointer",
                  "&: hover": {
                    boxShadow:
                      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                  },
                }}
              >
                <Box>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </Box>
                <Typography variant="body1" sx={{ fontWeight: 600 }} mt={1}>
                  Unmacheble Frames
                </Typography>
                <Typography variant="body2" textAlign={"center"}>
                  Unique and Customized eyewears only for you.
                </Typography>
              </Box>
              {/* <Multi4 /> */}
              <Box
                sx={{
                  width: {xs:172, sm:180, md:200},
                  p: 1,
                  gap: 1,
                  height: "10rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                  flexDirection: "column",
                  borderRadius: 5,
                  boxShadow: "0px 0px 4px 5px rgba(0, 0, 0, 0.25)",
                  cursor: "pointer",
                  "&: hover": {
                    boxShadow:
                      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                  },
                }}
              >
                <Box>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </Box>
                <Typography variant="body1" fontWeight={600} mt={1}>
                  Sharing is Caring
                </Typography>
                <Typography variant="body2" textAlign={"center"}>
                  Experience this offer to get an Extra pair of Eyewears
                </Typography>
              </Box>
            </Stack>
          </Stack>

          <Button
            variant="contained"
            sx={{
              bgcolor: "primary.main",
              mt: 3,
              color: "white.main",
              fonntWeight: 500,
            }}
          >
            Add Gold Membership
          </Button>
        </Box>

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
          <Box sx={{ height: 160, width: "100%" }}>
            <img
              src={require("../../assets/images/img/VC-Banner.webp")}
              style={{ width: "100%" }}
            />
          </Box>
        </Box>
        <Container mt={5}>
          <Box
            sx={{
              mt: 5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Stack direction="row" spacing={2} mt={3}>
              {brandImgs && brandImgs.length > 0 ? (
                brandImgs.map((img, i) => (
                  <CardMedia
                   image={img}
                    alt={"..."}
                    key={i}
                    sx={{
                      height: { xs: "55px", sm: "80px" ,md:"5rem", xl:"5rem" },
                      width: { xs: "65px", sm: "140px", md:"10rem", xl:"10rem" }, borderRadius: 2
                    }}
                  ></CardMedia>
                ))
              ) : (
                <Loader />
              )}
            </Stack>
          </Box>
        </Container>
        <Container>
          <Box
            sx={{
              mt: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Membership Benifits
            </Typography>
            <Box
              sx={{
                p: {xs:1, sm:2, md:4},
                border: "1px solid #B89797",
                filter:
                  "drop-shadow(-4px -4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))",
                borderRadius: 5,
                mt: 3,
              }}
            >
              <Stack direction={"row"} spacing={{xs:2 , sm:2, md:4}}>
                <Box
                  sx={{
                    width: {xs:"5rem" , sm:"5rem", md:"7rem"},
                    height: {xs:"16%", sm:"16%", md:"100%"},
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 5,
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 56, height: 56 }}
                  />
                  <Typography variant="subtitle1">Easy Cacellation</Typography>
                </Box>
                <Box
                  sx={{
                    width: {xs:"5rem" , sm:"5rem", md:"7rem"},
                    height: {xs:"16%", sm:"16%", md:"100%"},
                    gap: 5,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 56, height: 56 }}
                  />
                  <Typography variant="subtitle1">Wallets</Typography>
                </Box>
                <Box
                  sx={{
                    width: {xs:"5rem" , sm:"5rem", md:"7rem"},
                    height: {xs:"16%", sm:"16%", md:"100%"},
                    gap: 5,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 56, height: 56 }}
                  />
                  <Typography variant="subtitle1">
                    Switch own style in a blink
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: {xs:"5rem" , sm:"5rem", md:"7rem"},
                    height: {xs:"16%", sm:"16%", md:"100%"},
                    gap: 5,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 56, height: 56 }}
                  />
                  <Typography variant="subtitle1">Sharing and Gift</Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Container>
        <Box
          sx={{
            mt: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" fontWeight={700} gutterBottom>
            Membership Differences
          </Typography>
          <Box sx={{ mt: 5 }}>
            <Membertable />
          </Box>
        </Box>
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
          <CardMedia
            sx={{ height: 160, width: "100%" }}
            image={require("../../assets/images/img/Updated brand banner jj .webp")}
            title="fremkart"
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "primary.main",
              mt: 3,
              color: "white.main",
              fonntWeight: 500,
            }}
          >
            Add Gold Membership
          </Button>
        </Box>
        <Container>
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "column",
              mt: 4,
            }}
          >
            <Typography
              variant="h5"
              component={"div"}
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Framekart Gold Membership : Buy 1 Get 1 Free on Sunglasses &
              Eyeglasses
            </Typography>
            <Typography variant="body1" mt={3}>
              Buy 1 Get 1 Free on Eyeglasses & Sunglasses! Share with your
              Friends & Family. Become a Framekart Gold member and get the VIP
              treatment everytime you shop. Framekart Gold is a loyalty plan
              that gets you the the most exclusive offers such as the privilege
              of BUY 1 GET 1 for a whole year and much more!
            </Typography>

            <List sx={{ fontWeight: 500, mt: 3 }}>
              <ListItem>
                ✓ Membership is valid for 365 days from the date of purchase.{" "}
              </ListItem>
              <ListItem>
                ✓ Share Membership with friends and family by sharing your phone
                number with them. This phone number will also act as your
                membership number.
              </ListItem>
              <ListItem>
                ✓ Buy 1 Get 1 Free is valid on Vincent Chase, Framekart Air,
                John Jacobs, Hooper & New Balance (for Eyeglasses & Sunglasses).
              </ListItem>
              <ListItem>
                ✓ Extra 10% Off on Fossil Eyeglasses with Membership
              </ListItem>
              <ListItem>
                ✓ Extra 10% Off on Aqualens & Aquacolor Contact Lenses with
                Membership
              </ListItem>
              <ListItem>
                ✓ Buy One Get One can be availed on Eyeglasses+Sunglasses /
                Eyeglasses+Eyeglasses / Sunglasses+Sunglasses.
              </ListItem>
              <ListItem>
                ✓ Membership benefits can be availed 2 times a month.
              </ListItem>
            </List>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Membershippage;