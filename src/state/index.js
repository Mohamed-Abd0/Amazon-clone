import { configureStore } from "@reduxjs/toolkit";

import chechout from "./checkoutSlice";

//=============================================================================

const store = configureStore({
  reducer: {
    chechout,
  },
});

export default store;
