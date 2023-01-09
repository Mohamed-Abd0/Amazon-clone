import React from "react";
import { Box } from "@mui/material";
import { productContent } from "./../../Data/TestData";
import SwiperContainer from "../ReuseableComponets/SwiperContainer";

const SuggestProducts = () => {
  return (
    <Box sx={{ mt: 16 }}>
      <SwiperContainer products={productContent} />
    </Box>
  );
};

export default SuggestProducts;
