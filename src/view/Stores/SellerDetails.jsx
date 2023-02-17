import { Call } from "@mui/icons-material";
import { Avatar, ImageList, ImageListItem, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const SellerDetails = () => {
  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  const itemData = [
    {
      img: "https://www.stylecracker.com/blog/wp-content/uploads/2017/09/Shraddha-Kapoor-the-Indian-Voice-of-the-new-Vogue-Eyewear-ShowYourVogue-Campaign-spotted-at-the-Vogue-Eyewear-Event-in-Mumbai-1024x554.jpg",
      title: "Breakfast",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-67011982/67011982.jpg",
      title: "Burger",
    },
    {
      img: "https://www.gethucinema.com/wp-content/uploads/2021/12/ShraddhaKapoor-1285.jpg",
      title: "Camera",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://i.pinimg.com/736x/3c/7c/e2/3c7ce2f4497e270367c1b68fc8df77ca.jpg",
      title: "Coffee",
      cols: 2,
    },
    {
      img: "https://media.vogue-eyewear.com/s7/Post2_Shraddha.jpg",
      title: "Hats",
      cols: 2,
    },
    {
      img: "https://media.vogue-eyewear.com/s7/X_VO_VS_MB_HeroKapoor2.jpg",
      title: "Honey",
      author: "@arwinneil",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://kalamtimes.com/uploads/images/news/20230110/1673351144_1%20aaaaaaaaaaaaaaa.png",
      title: "Basketball",
    },
    {
      img: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAZUKZU.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg",
      title: "Fern",
    },
    {
      img: "https://www.stylecracker.com/blog/wp-content/uploads/2017/09/Shraddha-Kapoor-the-Indian-Voice-of-the-new-Vogue-Eyewear-ShowYourVogue-Campaign-spotted-at-the-Vogue-Eyewear-Event-in-Mumbai-1024x554.jpg",
      title: "Breakfast",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-67011982/67011982.jpg",
      title: "Burger",
    },
    {
      img: "https://www.gethucinema.com/wp-content/uploads/2021/12/ShraddhaKapoor-1285.jpg",
      title: "Camera",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://i.pinimg.com/736x/3c/7c/e2/3c7ce2f4497e270367c1b68fc8df77ca.jpg",
      title: "Coffee",
      cols: 2,
    },
    {
      img: "https://www.stylecracker.com/blog/wp-content/uploads/2017/09/Shraddha-Kapoor-the-Indian-Voice-of-the-new-Vogue-Eyewear-ShowYourVogue-Campaign-spotted-at-the-Vogue-Eyewear-Event-in-Mumbai-1024x554.jpg",
      title: "Breakfast",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-67011982/67011982.jpg",
      title: "Burger",
    },
    {
      img: "https://www.gethucinema.com/wp-content/uploads/2021/12/ShraddhaKapoor-1285.jpg",
      title: "Camera",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://i.pinimg.com/736x/3c/7c/e2/3c7ce2f4497e270367c1b68fc8df77ca.jpg",
      title: "Coffee",
      cols: 2,
    },
  ];
  return (
    <>
      <Container
        gap={5}
        sx={{ display: "flex", flexDirection: "column", gap: 5, p: 2 }}
      >
        <Box
          sx={{
            width: 700,
            height: 130,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#FFFFFF",
            border: "0.5px solid rgba(3, 149, 175, 0.2)",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "7px",
            p: 2,
            mt: 3,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              sx={{ width: 100, height: 100 }}
              src={require("../../assets/images/shraddha.jpg")}
              alt="shraddha_Kapoor"
            />
            <Box sx={{ ml: 2 }}>
              <Typography variant="body1" color="initial">
                Contact seller
              </Typography>
              <Typography
                variant="h6"
                color="initial"
                fontWeight={600}
                textTransform={"capitalize"}
              >
                shraddha kapoor
              </Typography>
            </Box>
          </Box>
          <Call sx={{ fontSize: "3rem" }} />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <Typography variant="h6" color="initial">
            Gallery
          </Typography>
          <ImageList
            sx={{ width: "80%", p: 2 }}
            variant="quilted"
            cols={4}
            rowHeight={121}
          >
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Container>
    </>
  );
};

export default SellerDetails;
