import { Google, Key, PersonOutline, Translate } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  Link as Linked,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Index from "./index";
const UserRegister = () => {
  const [isGo, setIsGo] = useState(false);
  const [forget, setForget] = useState(false);
  const [isVerify, setIsVerify] = useState(false);
  const [isSign, setIsSign] = useState(false);
  const [isPassword, setIsPassword] = useState("");
  const [input, setInput] = useState("");
  const [userDetails, setUserDetails] = useState({
    email: "",
    mobile: "",
    password: "",
  });
  // console.log(userDetails);
  const validation = (value) => {
    // console.log(value);
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const mobileFormat = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (value.match(emailFormat)) {
      setIsPassword(true);
      userDetails.email = value;
    } else if (value.match(mobileFormat)) {
      userDetails.mobile = value;
      setIsPassword(false);
    }
  };
  // useEffect(()=>{

  // },[...input])
  const handleSubmitRegister = () => {
    setIsSign(true);
    console.log(userDetails);
  };
  const handleSubmitLogin = () => {
    setIsSign(true);
    console.log(userDetails);
  };

  return (
    <Index>
      <Box
        sx={{
          width: { xs: 370, sm: 465, md: 465 },
          height: 500,
          border: 1.3,
          borderColor: "primary.main",
          bgcolor: "white",
          borderRadius: "22px",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // flexDirection: "column",
            flexWrap: "row-wrap",
            gap: 3,
          }}
        >
          {/* register page */}

          <Box
            id={"registerBox"}
            sx={{
              width: { xs: 370, sm: 465, md: 465 },
              height: 500,

              borderColor: "primary.main",
              bgcolor: "white",
              borderRadius: "22px",
              p: 3,
              transform: `${
                isGo
                  ? "translateX(-500px)"
                  : `${isSign ? "translateX(-500px)" : "translateX(0px)"}`
              }`,
              transition: "transform",
              transitionDuration: "800ms",
              display: "flex",
              flexDirection: "column",
            }}
            align={"center"}
          >
            <Typography variant="h3" sx={{ fontWeight: 600, p: 1 }}>
              Register
            </Typography>
            <Typography variant="subtile1" sx={{ fontWeight: 600 }}>
              Please enter you phone/email and password to register
            </Typography>
            <FormControl fullWidth sx={{ mt: 4 }}>
              <Stack direction={"column"} spacing={2}>
                <TextField
                  fullWidth
                  required
                  variant="outlined"
                  placeholder="Phone or E-mail"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 45,
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutline />
                      </InputAdornment>
                    ),
                  }}
                  // value={input}
                  onChange={(e) => validation(e.target.value)}
                  // onFocus={(e) => }
                />

                <TextField
                  variant="outlined"
                  placeholder="Password"
                  sx={{
                    transform: `${
                      isPassword ? "TranslateX(0px)" : "TranslateX(-500px)"
                    }`,
                    transition: "transform",
                    transitionDuration: "800ms",
                    "& .MuiInputBase-root": {
                      height: 45,
                    },
                    input: { color: "#453F3F" },
                    "& .MuiFormLabel-root": {
                      color: "blue",
                    },
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "blue",
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Key />
                      </InputAdornment>
                    ),
                  }}
                  value={userDetails.password}
                  onChange={(e) =>
                    setUserDetails((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                />

                <Button
                  variant="outlined"
                  sx={{
                    border: "2px solid #00FF29",
                    borderRadius: "10px",
                    color: " #00FF29",
                    "&: hover": {
                      color: "white.main",
                      bgcolor: "#00ff29",
                      border: "2px solid #00FF29",
                    },
                  }}
                  onClick={handleSubmitRegister}
                >
                  Register
                </Button>
                <Button
                  variant="contained"
                  startIcon={<Google />}
                  sx={{
                    bgcolor: "#000",
                    color: "white.main",
                    borderRadius: "10px",
                    "&: hover": {
                      color: "white.main",
                      bgcolor: "primary.main",
                    },
                  }}
                >
                  Or sign-in with Google
                </Button>

                <Typography variant="subtitle2" component="div">
                  already Account ?
                  <Typography
                    variant="subtitle2"
                    color="primary"
                    component="span"
                    sx={{ fontStyle: "italic", cursor: "pointer" }}
                    onClick={() => setIsGo(true)}
                  >
                    Login!
                  </Typography>
                </Typography>
              </Stack>
            </FormControl>
          </Box>
          {/* Login page       transform: translateX(-506px);           ....................................................  */}
          <Box
            id={"LoginBox"}
            sx={{
              width: { xs: 370, sm: 465, md: 465 },
              height: 500,

              borderColor: "primary.main",
              bgcolor: "white",
              borderRadius: "22px",
              p: 3,
              transform: `${
                isGo
                  ? `${isSign ? "translateX(500px)" : "translateX(-500px)"}`
                  : "translateX(0px)"
              }`,
              transition: "transform",
              transitionDuration: "800ms",
              display: "flex",
              flexDirection: "column",
            }}
            align={"center"}
          >
            <Typography variant="h3" sx={{ fontWeight: 600, p: 1 }}>
              Login
            </Typography>
            <Typography variant="subtile1" sx={{ fontWeight: 600 }}>
              Please enter you Login and your Password
            </Typography>
            <FormControl fullWidth sx={{ mt: 4 }}>
              <Stack direction={"column"} spacing={2}>
                <TextField
                  fullWidth
                  required
                  variant="outlined"
                  placeholder="Phone or E-mail"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 45,
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutline />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => validation(e.target.value)}
                />

                <TextField
                  fullWidth
                  required
                  variant="outlined"
                  placeholder="Password"
                  sx={{
                    transform: `${
                      isPassword ? "TranslateX(0px)" : "TranslateX(500px)"
                    }`,
                    transition: "transform",
                    transitionDuration: "800ms",
                    "& .MuiInputBase-root": {
                      height: 45,
                    },
                    input: { color: "#453F3F" },
                    "& .MuiFormLabel-root": {
                      color: "blue",
                    },
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "blue",
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Key />
                      </InputAdornment>
                    ),
                  }}
                  value={userDetails.password}
                  onChange={(e) =>
                    setUserDetails((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                />
                <Typography
                  underline="none"
                  variant="subtitle2"
                  sx={{
                    fontStyle: "italic",
                    color: "primary.main",
                    cursor: "pointer",
                  }}
                  align="right"
                  onClick={() => setIsVerify(true)}
                >
                  Forget password?
                </Typography>

                <Button
                  variant="outlined"
                  sx={{
                    border: "2px solid #00FF29",
                    borderRadius: "10px",
                    color: " #00FF29",
                    "&: hover": {
                      color: "white.main",
                      bgcolor: "#00ff29",
                      border: "2px solid #00FF29",
                    },
                  }}
                  onClick={handleSubmitLogin}
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  startIcon={<Google />}
                  sx={{
                    bgcolor: "#000",
                    color: "white.main",
                    borderRadius: "10px",
                    "&: hover": {
                      color: "white.main",
                      bgcolor: "primary.main",
                    },
                  }}
                >
                  Or sign-in with Google
                </Button>

                <Typography variant="subtitle2" component="div">
                  Not a member yet?
                  <Typography
                    variant="subtitle2"
                    color="primary"
                    component="span"
                    sx={{ fontStyle: "italic", cursor: "pointer" }}
                    onClick={() => setIsGo(false)}
                  >
                    Register!
                  </Typography>
                </Typography>
              </Stack>
            </FormControl>
          </Box>

          {/* ForgetPassword ,.,,,,,,,,,,,,,,,>???????????????????????????????????????????????????>>>>>>>>>>>>>>>>>>>>>>>>>>,,,,,,,, */}
          <Box
            id={"forgetBox"}
            style={{ backgrondColor: "#FFF" }}
            sx={{
              width: { xs: 370, sm: 465, md: 465 },
              height: 500,
              bgcolor: "white",
              display: "flex",
              transform: `${
                isVerify ? "translateX(-975px)" : "translateX(0px)"
              }`,
              transition: "transform",
              transitionDuration: "800ms",
              // transform:  `${isVerify? "translateY(-450px)" : "translateY(0px)"}`,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 3,
              p: 3,
            }}
          >
            <Box
              width={"100%"}
              height={300}
              sx={{
                border: "1px solid #E3E8EE",
                bgcolor: "white",
                boxShadow: "0px 1px 2px rgba(56, 56, 56, 0.08)",
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" component={"div"} p={2}>
                Restore password
              </Typography>
              <Stack spacing={2} p={2}>
                <Alert severity="warning">
                  Type that email which you were using before
                </Alert>
                <InputLabel sx={{ color: "secondary.main" }}>
                  Email or phone
                </InputLabel>
                <TextField
                  fullWidth
                  required
                  variant="outlined"
                  placeholder="Type here"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 40,
                    },
                  }}
                />

                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: "primary.main",
                    color: "#fff",
                    borderRadius: "10px",
                    fontSize: "1.2rem",
                    border: "1px solid #0D6EFD",
                  }}
                  onClick={() => setIsVerify(false)}
                >
                  Continue
                </Button>
              </Stack>
            </Box>
          </Box>
          {/* otp submit..............................>?>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <Box
            id={"otpBox"}
            sx={{
              width: { xs: 370, sm: 465, md: 465 },
              height: 500,
              display: "flex",
              bgcolor: "white.main",
              justifyContent: "center",
              transform: `${
                isSign ? "translateX(-1470px)" : "translateX(0px)"
              }`,
              transition: "transform",
              transitionDuration: "800ms",
              // transform:  `${isSign? "translateY(-850px)" : "translateY(0px)"}`,
              alignItems: "center",
              borderRadius: 3,
              p: 3,
            }}
          >
            <Box
              width={"100%"}
              height={320}
              sx={{
                border: "1px solid #E3E8EE",

                boxShadow: "0px 1px 2px rgba(56, 56, 56, 0.08)",
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" component={"div"} p={1}>
                Confirmation code
              </Typography>
              <Typography variant="subtitle1" component={"div"} p={1}>
                We’ve sent confirmation code to
                <br />
                <Linked underline="none">draftkit@mail.com </Linked>{" "}
              </Typography>
              <Stack spacing={2} p={2}>
                <InputLabel sx={{ color: "secondary.main" }}>
                  Enter 5 digit code
                </InputLabel>
                <Stack direction={"row"} spacing={2}>
                  <OutlinedInput fullWidth required value={Range[1]} />
                  <Button variant="text" sx={{ fontSize: 9 }}>
                    Try Again
                  </Button>
                </Stack>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: "primary.main",
                    color: "#fff",
                    borderRadius: "10px",
                    fontSize: "1.2rem",
                    border: "1px solid #0D6EFD",
                  }}
                  onClick={() => setIsSign(false)}
                >
                  verify
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>{" "}
      </Box>
    </Index>
  );
};

export default UserRegister;
