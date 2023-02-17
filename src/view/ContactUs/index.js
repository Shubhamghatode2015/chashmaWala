import { Call, Email, LocationOn } from "@mui/icons-material";
import { Button, TextField, Typography, Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <Container maxWidth="lg"  sx={{ display: 'flex', gap:6, flexDirection: 'column'}}>
        <Container component={'div'} sx={{color: 'white.main',p: 1,mt: 3, borderRadius: 1.5,  bgcolor: 'primary.main',  width: '100%', height: '3rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

<Typography variant="h4"  fontWeight={700}>Contact us</Typography>
        </Container>
      <Box sx={{ width: "100%", display: { md: "flex" }, marginTop: "10px" }}>
          <Box
            className="col1"
            sx={{
              width: { md: "50%" },
              height: { md: "100%", xs: "70%" },
              display: "flex",
              gap: "4px",
              padding: "6px",
            }}
          >
            <Box
              sx={{
                display: { md: "flex" },
                width: "100%",
                gap: "10px",
                height: { md: "50vh", xs: "34vh" },
              }}
            >
              <Box
                sx={{
                  width: { md: "50%", xs: "100%" },

                  height: { md: "100%", xs: "50%" },
                  border: "solid #6ba9e2 1px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "20px",
                  boxShadow: "1px 1px 3px #6ba9e2",
                  marginBottom: "10px",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        border: "dashed #6ba9e2 2px",
                        borderRadius: "50% 50%",
                        padding: "1px",
                        width: { md: "30%", xs: "40%" },
                        height: { md: "9vh", xs: "6vh" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <LocationOn
                        sx={{
                          color: "#6ba9e2",
                          fontSize: { md: "50px", xs: "40px" },
                        }}
                      />
                    </Box>
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "center",
                      fontWeight: "600",
                      fontSize: { md: "20px", xs: "15px" },
                    }}
                  >
                    Our Address <br />{" "}
                    <span style={{ color: "#6ba9e2" }}>
                      Dombivali(east), Mumbai.
                    </span>
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  width: { md: "50%" },
                  height: "96%",
                  display: { xs: "flex", md: "block" },
                  gap: { xs: "13px" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: { md: "100%", xs: "50%" },
                    height: "50%",
                    border: "solid #6ba9e2 1px",
                    borderRadius: "20px",
                    boxShadow: "1px 1px 3px #6ba9e2",
                    marginBottom: "10px",
                  }}
                >
                  <Box sx={{ width: "70%" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          border: "dashed #6ba9e2 2px",
                          borderRadius: "50% 50%",
                          padding: "1px",
                          width: { md: "30%", xs: "40%" },
                          height: { md: "9vh", xs: "6vh" },
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Call
                          sx={{
                            color: "#6ba9e2",
                            fontSize: { md: "50px", xs: "40px" },
                          }}
                        />
                      </Box>
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        textAlign: "center",
                        fontWeight: "600",
                        fontSize: { md: "20px", xs: "15px" },
                      }}
                    >
                      Call us <br />
                      <span style={{ color: "#6ba9e2" }}>+91 8693819715</span>
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "50%",
                    width: { md: "100%", xs: "50%" },
                    border: "solid #6ba9e2 1px",
                    borderRadius: "20px",
                    boxShadow: "1px 1px 3px #6ba9e2",
                  }}
                >
                  <Box sx={{ width: "70%" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          border: "dashed #6ba9e2 2px",
                          borderRadius: "50% 50%",
                          padding: "1px",
                          width: { md: "30%", xs: "40%" },
                          height: { md: "9vh", xs: "6vh" },
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Email
                          sx={{
                            color: "#6ba9e2",
                            fontSize: { md: "50px", xs: "40px" },
                          }}
                        />
                      </Box>
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        textAlign: "center",
                        fontWeight: "600",
                        fontSize: { md: "20px", xs: "15px" },
                      }}
                    >
                      Email Us{" "}
                      <span style={{ color: "#6ba9e2" }}>
                        hippikart@gmail.com
                      </span>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            className="col2"
            sx={{
              width: { md: "50%" },
              height: "53vh",
              padding: "10px",
            }}
          >
            <Box sx={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
              <Box sx={{ width: { md: "50%", xs: "100%" } }}>
                <h3 style={{ margin: "0", fontWeight: "500" }}>Your Name</h3>

                <TextField
                  id="outlined-basic"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": {
                        border: "#6ba9e2 solid 2px",
                        borderRadius: "13px",
                      },
                    },
                    width: { md: "90%", xs: "100%" },
                  }}
                  variant="outlined"
                />
              </Box>
              <Box sx={{ width: { md: "50%", xs: "100%" } }}>
                <h3 style={{ margin: "0", fontWeight: "500" }}>Your Email</h3>
                <TextField
                  id="outlined-basic"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": {
                        border: "#6ba9e2 solid 2px",
                        borderRadius: "13px",
                      },
                    },
                    width: { md: "90%", xs: "100%" },
                  }}
                  variant="outlined"
                />
                {/* <TextField id="outlined-basic" sx={{width:'90%'}}  variant="outlined" /> */}
              </Box>
            </Box>
            <Box>
              <h3 style={{ margin: "0", fontWeight: "500" }}>Subject</h3>
              <TextField
                id="outlined-basic"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": {
                      border: "#6ba9e2 solid 2px",
                      borderRadius: "13px",
                    },
                  },
                  width: { md: "95%", xs: "100%" },
                }}
                variant="outlined"
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                borderRadius: "10px",
                "&.MuiOutlinedInput-root": {
                  color: "#232323",
                },
              }}
            >
              <h3 style={{ margin: "0", fontWeight: "500" }}>Message</h3>

              <TextField
                id="outlined-basic"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": {
                      border: "#6ba9e2 solid 2px",
                      borderRadius: "13px",
                    },
                    "& > input": { height: { md: "20vh", xs: "17vh" } },
                  },
                  width: { md: "95%", xs: "100%" },
                }}
                variant="outlined"
              />
            </Box>
          </Box>
        </Box>
        <Button fullWidth variant="contained" color="primary">
          Submit
        </Button>
      </Container>
    </>
  );
};

export default ContactUs;
