import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Stack } from "@mui/material";
import { Email, Phone } from "@mui/icons-material";

const Address2Card = () => {
  return (
    <>
       <Box
                  sx={{
                    border: "1px solid rgba(35, 35, 35, 0.3)",
                    borderRadius: 2,
                    height: "100%",
                  }}
                  p={2}
                >
                  <Stack direction={"column"} spacing={3}>
                    <Typography variant="h6" fontWeight={600}>Updates sent to</Typography>
                    <Stack  direction={"column"} spacing={2} >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Phone sx={{ mr: 1, color: "info.main" }} />
                        <Typography variant="body1">9890368440</Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Email sx={{ mr: 1, color: "info.main" }} />
                        <Typography variant="body1">
                          raviraut19@icloud.com
                        </Typography>
                      </Box>
                    </Stack>
                  </Stack>
                </Box>
    </>
  );
};

export default Address2Card;
