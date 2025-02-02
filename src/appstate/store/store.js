// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./authSlice";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import transactionReducer from "../slices/businessSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;
