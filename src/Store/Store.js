import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import lengRedusers from "./reducsers/lengRedusers";

export default configureStore({
  reducer: {
    leng: lengRedusers,
    ProductSlice,
  },
});
