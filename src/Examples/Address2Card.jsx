import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Stack } from "@mui/material";
import { Email, Phone } from "@mui/icons-material";

const Address2Card = () => {
  return (
    <>
      <Box
        fullWidth
        sx={{ border: "1px solid rgba(35, 35, 35, 0.3)", borderRadius: 2 }}
        p={2}
      >
        <Stack direction={"column"} spacing={2}>
          <Typography variant="h5">Updates sent to</Typography>
          <Stack>
            <Typography variant="h6">
              <Phone sx={{ fontSize: 20, mr: 1, color: "info.main" }} />
              9890368440
            </Typography>
            <Typography variant="h6">
              <Email sx={{ fontSize: 20, mr: 1, color: "info.main" }} />
              raviraut19@icloud.com
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Address2Card;
