import React, { useState } from "react";
import { Box, Rating, Typography } from "@mui/material";
import { productContent } from "./../../Data/TestData";
const ProductRating = ({ max }) => {
  const {
    productDetails: { stars },
  } = productContent[0];

  const [value, setValue] = useState(stars);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="h6">rating : </Typography>
      <Rating
        sx={{ label: { color: "primary.main" } }}
        name="simple-controlled"
        value={value}
        max={max}
        precision={0.1}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
};

export default ProductRating;
