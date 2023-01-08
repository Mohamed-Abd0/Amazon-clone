import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "./ModalSlice";
import ProductSlice from "./ProductSlice";
import CartSlice from "./CartSlice";

export default configureStore({
  reducer: {ModalSlice, ProductSlice, CartSlice },
});
