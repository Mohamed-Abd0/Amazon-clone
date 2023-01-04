import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { productContent } from "./../../Data/TestData";
import ProductRating from "./ProductRating";

const ProductContent = () => {
  const { productDetails } = productContent[0];

  return (
    <Stack
      sx={{
        width: { md: "50%" },
        textAlign: "left",
        textTransform: "capitalize",
      }}
      gap={3}
    >
      <Typography
        variant="h6"
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        {productDetails.title}
      </Typography>

      <Box sx={{ span: { fontSize: "14px" }, display: "flex" }}>
        <Typography variant="h6"> price : </Typography>
        <span style={{ marginLeft: "10px" }}> $</span>
        <Typography variant="h5">{productDetails.price}</Typography>
        <span>00</span>
      </Box>
      <ProductRating max={5} />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          button: {
            textTransform: "capitalize",
            minWidth: "150px",
          },
        }}
      >
        <Button color="primary" variant="outlined">
          add to card
        </Button>
        <Button variant="contained">buy now</Button>
      </Box>
    </Stack>
  );
};

export default ProductContent;
