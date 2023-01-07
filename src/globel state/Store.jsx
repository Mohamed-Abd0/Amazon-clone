import { configureStore } from "@reduxjs/toolkit";
import lengRedusers from "./reducsers/lengRedusers";

export const Store = configureStore({
    reducer : {
        leng : lengRedusers ,
    }
})