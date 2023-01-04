import React, { Fragment } from "react";

import {
  ProductImg,
  ProductContent,
  SuggestProducts,
} from "../Components/ProductComponents";
import BackToHome from "../Components/ReuseableComponets/BackToHome";

import { Stack, Box } from "@mui/material";

const Product = () => {
  return (
    <Fragment>
      <BackToHome />
      <Box sx={{ width: { lg: "80%" }, m: "auto" }}>
        <Stack
          flexDirection={{ md: "row" }}
          justifyContent="space-evenly"
          gap={3}
        >
          <ProductImg />
          <ProductContent />
        </Stack>
      </Box>
      <SuggestProducts />
    </Fragment>
  );
};

export default Product;
