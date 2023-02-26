import {
  Avatar,
  Paper,
  Typography,
  Button,
  InputAdornment,
  TextField,
  IconButton,
  useMediaQuery,
  InputBase,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import shubham from "../../assets/images/shubham.jpg";
import shraddha from "../../assets/images/shraddha.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fatchFrameglasses } from "../../redux/festures/framekartSlice";
import PurchaseCard from "../../Examples/PurchaseCard";
import WishListCard from "../../Examples/WishListCard";
import {
  AccountCircle,
  Call,
  Email,
  Home,
  PhotoCamera,
} from "@mui/icons-material";
import { handleDrawerLeft } from "../../redux/Drawer/LeftDrawerSlice";

const ProfilePage = () => {
  const matches = useMediaQuery("(max-width:870px)");
  const dispatch = useDispatch();
  const picInput = useRef(null);
  const [file, setFile] = useState();
  const [profile, setProfile] = useState({
    name: "",
    address: "",
    mobile: "",
    email: "",
    profilePic: "",
  });

  const { frameglass } = useSelector((state) => ({
    ...state.framekartData,
  }));

  useEffect(() => {
    dispatch(fatchFrameglasses());
  }, [dispatch]);

  const styles = {
    paperContainer: {
      height: 450,
      width: "100%",
      backgroundImage: `url(${shubham})`,
    },
  };

  const handleProfilePic = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setProfile((prev) => ({
      ...prev,
      profilePic:
        e.target.files && e.target.files.length ? e.target.files[0] : "",
    }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("mobile", profile.mobile);
    formData.append("name", profile.name);
    formData.append("email", profile.email);
    formData.append("picture", profile.profilePic);
    formData.append("Address", profile.address);
    // console.log(profile.profilePic, "pic");
    // console.log(...formData, "hghghgfhg");
    // if (profile.name === "" && profile.email === "") {
    //   // console.log(...formData, "jvjvhjvjh");
    // }
    console.log(...formData, "jvjvhjvjh");

    // toast.error("Please Provide at least one field to update profile");
  };

  const styless = {
    border: 0.2,
    borderColor: "#2197D4",
    borderRadius: 2,
    p: 1,
  };
  return (
    <>
      <Box
        sx={{
          bgcolor: "#EFF2F4",
          pb: 3,
          display: { xs: "none", md: "block", xl: "block" },
        }}
      >
        <Paper
          style={styles.paperContainer}
          sx={{
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                width: 250,
                height: 250,
                borderRadius: "50%",
                boxShadow: " rgb(38, 57, 77) 0px 20px 30px -10px",
                mb: 2,
                border: "5px solid white",
                transition: "all .5s",
                "&: hover": {
                  transform: "scale(1.05) rotate(2deg)",
                },
              }}
            >
              <img
                src={shraddha}
                alt="sharadha"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </Box>

            <Typography variant="h3" color="white.main">
              {" "}
              Shraddha kapoor
            </Typography>
          </Box>
        </Paper>
        {/* kjasdbhfghbakmvjbkjlbnadsikhajkhbbvv */}

        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box sx={{ mt: 5, display: "flex", width: "100%", gap: 5 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                width: "30%",
                alignItems: "flex-end",
              }}
            >
              <Typography variant="body1" color="initial">
                Name
              </Typography>
              <Typography variant="body1" color="initial">
                Email
              </Typography>
              <Typography variant="body1" color="initial">
                Mobile
              </Typography>
              <Typography variant="body1" color="initial">
                Address
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "60%",
              }}
              f
            >
              <TextField
                required
                type={"text"}
                id="input-with-icon-textfield"
                label="  Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                value={profile.name}
                onChange={(e) =>
                  setProfile((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
              />
              <TextField
                required
                id="input-with-icon-textfield"
                label="  Email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                type="email"
                value={profile.email}
                onChange={(e) =>
                  setProfile((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
              />
              <TextField
                required
                id="input-with-icon-textfield"
                label=" Mobile"
                type="number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Call />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                value={profile.mobile}
                onChange={(e) =>
                  setProfile((prev) => ({
                    ...prev,
                    mobile: e.target.value,
                  }))
                }
              />
              <TextField
                id="input-with-icon-textfield"
                label=" Address"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Home />
                    </InputAdornment>
                  ),
                }}
                type="text"
                variant="standard"
                value={profile.address}
                onChange={(e) =>
                  setProfile((prev) => ({
                    ...prev,
                    address: e.target.value,
                  }))
                }
              />
            </Box>
          </Box>

          <Stack
            direction={{ xs: "column", md: "row", xl: "row" }}
            spacing={5}
            sx={{ mt: 1 }}
          >
            <Box sx={{ display: "flex" }}>
              <Avatar
                alt="Shraddha Kapoor"
                src={file}
                sx={{ width: 48, height: 48, mr: 2 }}
              />
              <Button
                startIcon={<PhotoCamera />}
                color="info"
                aria-label="upload picture"
                component="label"
                variant="outlined"
              >
                upload picture
                <input
                  hidden
                  multiple
                  type="file"
                  ref={picInput}
                  onChange={handleProfilePic}
                  accept=".png*, .jpeg*, .jpg*"
                />
              </Button>
            </Box>
            <Button
              variant="contained"
              color="info"
              onClick={handleProfileSubmit}
            >
              Update Profile
            </Button>
            <Button
              variant="outlined"
              color="info"
              // onClick={() => dispatch(handleDrawerLeft(true))}
            >
              LogOut
            </Button>
          </Stack>
        </Container>
        <Container
          sx={{
            mt: 5,
            display: "flex",
            width: "100%",
            flexDirection: { xs: "column", md: "row", xl: "row" },
            justifyContnet: "space-between",
            alignItems: "flex-start",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 2,
              bgcolor: "white",
              height: "auto",
              width: { xs: "100%", md: "48%", xl: "48%" },
              p: 2,
              borderBottom: "4px solid #ccc",
              borderRadius: "6px",
              transition: " all .5s",
              "&: hover": {
                borderColor: "#ff99ff",
              },
            }}
          >
            <Typography variant="h4" color="initial" fontWeight={700}>
              PURCHASE HISTORY
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                width: "100%",
              }}
            >
              {frameglass &&
                frameglass.length > 0 &&
                frameglass
                  .slice(0, 4)
                  .map((value, index) => (
                    <PurchaseCard value={value.data} key={index} />
                  ))}
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 2,
              bgcolor: "white",
              height: "auto",
              width: { xs: "100%", md: "48%", xl: "48%" },
              p: 2,
              borderBottom: "4px solid #ccc",
              borderRadius: "6px",
              transition: " all .5s",
              "&: hover": {
                borderColor: "#ff99ff",
              },
            }}
          >
            <Typography variant="h4" color="initial" fontWeight={700}>
              WISHLIST
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                width: "100%",
              }}
            >
              {frameglass &&
                frameglass.length > 0 &&
                frameglass
                  .slice(0, 5)
                  .map((value, index) => (
                    <WishListCard value={value.data} key={index} />
                  ))}
            </Box>
          </Box>
        </Container>
      </Box>
      {/*  mobile view........................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <Box
        sx={{
          bgcolor: "#EFF2F4",
          width: "100%",
          display: { xs: "flex", md: "none", xl: "none" },
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "column",
          gap: 2.2,
          p: 2,
        }}
      >
        <Box
          sx={{
            width: 250,
            height: 250,
            borderRadius: "50%",
            boxShadow: " rgb(38, 57, 77) 0px 20px 30px -10px",
            mb: 2,
            mt: 2,
            border: "5px solid white",
            transition: "all .5s",
            "&: hover": {
              transform: "scale(1.05) rotate(2deg)",
            },
          }}
        >
          <img
            src={shraddha}
            alt="sharadha"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Stack direction={"column"} spacing={3} sx={{ width: "100%" }}>
          <Stack direction={"column"} spacing={1} sx={{ width: "100%" }}>
            <Typography variant="body1" color="initial">
              First name
            </Typography>
            <InputBase
              fullWidth
              variant="outlined"
              placeholder="Enter your first name"
              sx={{ ...styless }}
            />
          </Stack>
          <Stack direction={"column"} spacing={1} sx={{ width: "100%" }}>
            <Typography variant="body1" color="initial">
              Last name
            </Typography>
            <InputBase
              fullWidth
              variant="outlined"
              placeholder="Enter your Last name"
              sx={{ ...styless }}
            />
          </Stack>
          <Stack direction={"column"} spacing={1} sx={{ width: "100%" }}>
            <Typography variant="body1" color="initial">
              Phone number
            </Typography>
            <InputBase
              fullWidth
              variant="outlined"
              placeholder="Enter your Mobile Number"
              sx={{ ...styless }} 
              InputProps={{
                startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                // endAdornment: <InputAdornment position="end">per person</InputAdornment>,
              }}
            />
          </Stack>
          <Stack direction={"column"} spacing={1} sx={{ width: "100%" }}>
            <Typography variant="body1" color="initial">
              Email
            </Typography>
            <InputBase
              fullWidth
              variant="outlined"
              placeholder="Enter your Email "
              sx={{ ...styless }}
            />
          </Stack>
          <Stack direction={"column"} spacing={1} sx={{ width: "100%" }}>
            <Typography variant="body1" color="initial">
              Address
            </Typography>
            <InputBase
              fullWidth
              variant="outlined"
              placeholder="Enter your Address"
              sx={{ ...styless }}
            />
          </Stack>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Stack>
      </Box>
      <Box sx={{ bgcolor: "#EFF2F4", height: "10rem" }} />
    </>
  );
};

export default ProfilePage;
