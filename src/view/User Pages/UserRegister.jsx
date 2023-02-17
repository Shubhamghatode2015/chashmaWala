import { Google, Key, PersonOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Index from "./index";
const UserRegister = () => {
  const [ isGo , setIsGo]=useState(false)
  return (
    <Index>
      <Box
        sx={{
          width: 465,
          height: 500,
          border: 1.3,
          borderColor: "primary.main",
          bgcolor: "white",
          borderRadius: "22px",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <Stack spacing={5} direction="row">
          {/* register page */}
          <Box
            sx={{
              width: 465,
              height: 500,
           
              borderColor: "primary.main",
              bgcolor: "white",
              borderRadius: "22px",
              p: 3,
              transform: `${ isGo? 'translateX(-500px)' : 'translateX(0px)'}`,transition: "transform",
              transitionDuration: "800ms",

              
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
                  variant="outlined"
                  placeholder="Phone or E-mail"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 35,
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutline />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  variant="outlined"
                  placeholder="Password"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 35,
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
                    },
                  }}
                  onClick={()=>setIsGo(true)}
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
                  >
                    Login!
                  </Typography>
                </Typography>
              </Stack>
            </FormControl>
          </Box>
          {/* Login page       transform: translateX(-506px);  */}
          <Box
            sx={{
              width: 465,
              height: 500,
             
              borderColor: "primary.main",
              bgcolor: "white",
              borderRadius: "22px",
              p: 3,
              transform: `${ isGo? 'translateX(-507px)' : 'translateX(0px)'}`,transition: "transform",
              transitionDuration: "800ms",

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
                  variant="outlined"
                  placeholder="Phone or E-mail"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 35,
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutline />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  variant="outlined"
                  placeholder="Password"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 35,
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
                    },
                  }}
                  onClick={()=>setIsGo(false)}
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
                  >
                    Register!
                  </Typography>
                </Typography>
              </Stack>
            </FormControl>
          </Box>
        </Stack>
      </Box>
    </Index>
  );
};

export default UserRegister;
