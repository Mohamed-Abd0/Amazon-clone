import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { productContent } from "./../../Data/TestData";
import { Stack, Box, CardMedia } from "@mui/material";
const ProductImg = () => {
  const { productId } = useParams();

  const { productImgs } = productContent[+productId];

  const [activeImg, setActiveImg] = useState(productImgs);

  const activeImgHandler = (item) => {
    const index = productImgs.findIndex((e) => e.src === item.src);

    const result = productImgs.map((e) => ({ state: false, src: e.src }));

    result[index].state = true;

    setActiveImg(result);
  };

  const renderinOthersIms = () =>
    activeImg.map((item, index) => (
      <Box
        key={index}
        sx={{
          border: `${item.state ? "1px solid transparent" : "1px solid gray"}`,
          boxShadow: `${item.state ? "0px 0px 2px 2px orange" : ""}`,
          p: 0.3,
          cursor: "pointer",
        }}
        onClick={() => activeImgHandler(item)}
      >
        <CardMedia
          component="img"
          src={item.src}
          sx={{ width: "40px", height: "45px", objectFit: "contain" }}
        />
      </Box>
    ));

  return (
    <Stack
      flexDirection={{ xs: "column", sm: "row" }}
      sx={{ width: { md: "40%" } }}
      gap={3}
    >
      <Stack
        gap={1}
        justifyContent="center"
        flexDirection={{ xs: "row", sm: "column" }}
        sx={{ order: { xs: 2, sm: 1 } }}
      >
        {renderinOthersIms()}
      </Stack>
      <Box sx={{ flexGrow: 1, order: { xs: 1, sm: 2 } }}>
        <CardMedia
          src={activeImg.filter((e) => e.state === true)[0].src}
          component="img"
          sx={{
            maxHeight: "400px",
            objectFit: "contain",
          }}
        />
      </Box>
    </Stack>
  );
};

export default ProductImg;
