import {
  Container,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { banner } from "../../CreatedData";
import CategoryCard from "../../Examples/CategoriesCard";

const Categories = () => {
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
          // justifyContent: "space-between",
          alignItems: "flex-start",
          // height: "64rem",
          width: "100%",
          gap: 2,
        }}
      >
        { banner.map((value)=>(

        <CategoryCard value={value} key={value.id}/>
        ))}
        {/* <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard /> */}
      </Box>
    </Container>
  );
};

export default Categories;
