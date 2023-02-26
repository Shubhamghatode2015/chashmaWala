import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Stack, Container } from "@mui/material";

const AddressCard = () => {
  return (
    <>
      <Box
        maxWidth="lg"
        sx={{
          border: "2px solid rgba(35, 35, 35, 0.3)",

          borderRadius: 2,
        }}
        p={2}
      >
        <Stack direction={"column"}>
          <Typography variant="h5" fontWeight={700}>
            Delivery Address
          </Typography>
          <Typography variant="h6" fontWeight={600}>
            Saurabh Singh
          </Typography>
          <Typography variant="body2">
            2/1 ICICI Bank in front of railway colony Near DRM office,
          </Typography>
          <Typography variant="body2">
            {" "}
            BHOPAL - 462024, Madhya Pradesh
          </Typography>
          <Stack direction={"row"} spacing={2} mt={2}>
            <Typography variant="boddy1" sx={{ fontWeight: "600" }}>
              Phone number{" "}
            </Typography>
            <Typography variant="subtitle1"> 9341458995</Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default AddressCard;
