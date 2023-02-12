import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CategoryCard from "../../Examples/CategoriesCard";

const DifferentStyle = () => {
  return (
    <Container
      sx={{
        p: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3" color="info" sx={{ fontWeight: "600" }}>
        DIFFERENT STYLES
      </Typography>

      <Box
        sx={{
          flexDirection: "row",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-start",
          height: "64rem",
          width: "100%",
        }}
      >
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </Box>
    </Container>
  );
};

export default DifferentStyle;
