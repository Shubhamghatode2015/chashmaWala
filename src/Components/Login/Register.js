import React from "react";
import {
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { VscKey } from "react-icons/vsc";
import { Link } from "@mui/material";
const Register = () => {
  return (
    <>
      <Box
        sx={{
          width: 365,
          height: 420,
        //   border: "2px solid",
          borderRadius: "22px",
          p: 3,
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
                    <PersonOutlineIcon />
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
                    <VscKey />
                  </InputAdornment>
                ),
              }}
            />
            <Link
              href="#"
              underline="none"
              variant="subtitle2"
              sx={{ fontStyle: "italic", color: "#453F3F" }}
              align="right"
            >
              Forget password?
            </Link>

            <Button
              variant="outlined"
              sx={{
                border: "2px solid #00FF29",
                borderRadius: "10px",
                color: " #00FF29",
              }}
            >
              Register
            </Button>
            <Button
              variant="contained"
              startIcon={<FcGoogle />}
              sx={{ bgcolor: "#000", borderRadius: "10px" }}
            >
              Or sign-in with Google
            </Button>

            <Typography
              variant="subtitle2"
              component="div"
              sx={{ fontStyle: "italic" }}
            >
              already Account ?
              <Link to='/' underline="none">
                Register!
              </Link>
            </Typography>
          </Stack>
        </FormControl>
      </Box>
    </>
  );
};

export default Register;
