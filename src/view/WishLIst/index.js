import { Box, Container, Stack } from "@mui/system";
import React, { useEffect } from "react";
import { fatchFrameglasses } from "../../redux/festures/framekartSlice";
import { useDispatch, useSelector } from "react-redux";
import WishCard from "../../Examples/WishCard";
import Loader from "../../Components/Loader";

const WishList = () => {
  const dispatch = useDispatch();

  const { frameglass } = useSelector((state) => ({
    ...state.framekartData,
  }));

  useEffect(() => {
    dispatch(fatchFrameglasses());
  }, [dispatch]);
  return (
    <>
      <Container>
        <Box
          sx={{
            mt: 5,
            p: 2,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          {frameglass && frameglass.length > 0 ? (
            frameglass.map((value, index) => (
              <Box
                sx={{
                  height:  250 ,
                  width:  185,
                  // height: { xs: 250, md: 350, xl: 350 },
                  // width: { xs: 185, md: 270, xl: 270 },
                }}
              >
                <WishCard value={value?.data} key={value.id} wishlist={true} height={ 130 } />
              </Box>
            ))
          ) : (
            <Loader />
          )}
        </Box>
      </Container>
      <Box sx={{ height: "10rem" }}></Box>
    </>
  );
};

export default WishList;
