import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { CardContent, CardMedia, Card } from "@mui/material";
import { Typography } from "@mui/material";

const SwiperContainer = (props) => {
  const { products } = props;

  const breakPoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    568: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  };

  const productsRendering = () =>
    products.map((product) => (
      <SwiperSlide key={product.id}>
        <Card sx={{ boxShadow: "none" }}>
          <CardMedia
            src={product?.productImgs[0].src}
            component="img"
            sx={{
              minWidth: "200px",
              maxHeight: "200px",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
          <CardContent>
            <Typography variant="body2">
              {product?.productDetails.title}
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
    ));

  return (
    <Swiper spaceBetween={50} loop={true} breakpoints={breakPoints}>
      {productsRendering()}
    </Swiper>
  );
};

export default SwiperContainer;
