import { Call, Email, LocationOn } from "@mui/icons-material";
import {
  Button,
  TextField,
  Typography,
  Container,
  Stack,
  makeStyles,
  InputBase,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const styless = {
    border: 0.2,
    borderColor: "#2197D4",
    borderRadius: 2,
    p: 1,
  };
  const stylesss1 = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: 1,
  };
  const boxStyle = {
    border: 0.2,
    borderColor: "#2197D4",
    borderRadius: 2,
    p: 1,
    boxShadow: "3px 3px 4px rgba(33, 151, 212, 0.07)",
  };
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{ display: "flex", gap: 6, flexDirection: "column" }}
      >
        <Container
          maxWidth="xl"
          component={"div"}
          sx={{
            color: "white.main",
            p: 1,
            mt: 3,
            borderRadius: 1.5,
            bgcolor: "primary.main",
            width: "100%",
            height: "3rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" fontWeight={700}>
            Contact us
          </Typography>
        </Container>
        <Box
          sx={{
            display: " flex",
            // justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row", xl: "row" },
            gap: 4,
            width: "100%",
            // alighItems: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row", xl: "row" },
              width: "100%",
              gap: 2,
            }}
            flex={2.5}
          >
            <Box
              sx={{ ...boxStyle, ...stylesss1, width: "100%", height: { xs: '230px ', md: "450px" ,  xl: "450px"} }}
            >
              <img
                src={require("../../assets/icons/location.png")}
                style={{ width: 65, height: 65 }}
              />
              <Typography variant="h6" color="initial" fontWeight={600}>
                {" "}
                Our Address
              </Typography>
              <Typography variant="body1" color="primary" textAlign={"center"}>
                Dombivali (East), Mumbai.
              </Typography>
            </Box>
            <Box
              sx={{
                flexDirection: { xs: "row", md: "column", xl: "column" },
                width: "100%",
                height: { xs: '100%', md: "450px" ,  xl: "450px"},
                gap: 2,
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <Box
                sx={{
                  ...boxStyle,
                  ...stylesss1,
                  width: { xs: "450px", md: "100%", xl: "100%" },
                  height: { xs: "230px", md: "48%" , xl: "48%"  },
                }}
              >
                <img
                  src={require("../../assets/icons/call.png")}
                  style={{ width: 65, height: 65 }}
                />
                <Typography variant="h6" color="initial" fontWeight={600}>
                  Call Us
                </Typography>
                <Typography
                  variant="body1"
                  color="primary"
                  textAlign={"center"}
                >
                  +91 8693819715{" "}
                </Typography>
              </Box>
              <Box
                sx={{
                  ...boxStyle,
                  ...stylesss1,
                  width: { xs: "450px", md: "100%", xl: "100%" },
                  height: { xs: "230px", md: "48%" , xl: "48%"  },
                }}
              >
                <img
                  src={require("../../assets/icons/msg.png")}
                  style={{ width: 60, height: 60 }}
                />
                <Typography variant="h6" color="initial" fontWeight={600}>
                  Email US
                </Typography>
                <Typography
                  component={Link}
                  to={"https://framekart.booksica.in"}
                  target={"_blank"}
                  variant="body1"
                  color="primary"
                  textAlign={"center"}
                >
                  https:// framekart.booksica.in
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }} flex={5}>
            <Stack direction={"column"} spacing={3}>
              <Stack direction={"row"} spacing={3}>
                <Stack direction={"column"} spacing={1} sx={{ width: "100%" }}>
                  <Typography variant="body1" color="initial">
                    Your Name
                  </Typography>
                  <InputBase
                    fullWidth
                    variant="outlined"
                    placeholder="Type Your Name"
                    sx={{ ...styless }}
                  />
                </Stack>
                <Stack direction={"column"} spacing={1} sx={{ width: "100%" }}>
                  <Typography variant="body1" color="initial">
                    Your Email
                  </Typography>
                  <InputBase
                    fullWidth
                    variant="outlined"
                    placeholder="Type YourEmail"
                    sx={{ ...styless }}
                  />
                </Stack>
              </Stack>
              <Stack direction={"column"} spacing={1}>
                <Typography variant="body1" color="initial">
                  Subject
                </Typography>
                <InputBase
                  fullWidth
                  variant="outlined"
                  placeholder="Type Your Subject"
                  sx={{ ...styless }}
                />
              </Stack>
              <Stack direction={"column"} spacing={1}>
                <Typography variant="body1" color="initial">
                  Message
                </Typography>
                <InputBase
                  fullWidth
                  variant="outlined"
                  placeholder="Type Your Message"
                  multiline
                  rows={5}
                  sx={{ ...styless }}
                />
              </Stack>
              <Button
                variant="contained"
                color="primary"
                size={"large"}
                sx={{ width: "20%" }}
              >
                Submit
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
      <Box sx={{ height: "10rem", width: "100%" }} />
    </>
  );
};

export default ContactUs;
