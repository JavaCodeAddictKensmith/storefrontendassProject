import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import transactionReducer from "../slices/transactionSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        transactions: transactionReducer, // Ensure transactions reducer is added here
    },
});

export default store;
