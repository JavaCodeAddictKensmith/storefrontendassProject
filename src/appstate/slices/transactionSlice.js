import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    transactions: {
        data: [],
        loading: false,
        error: null,
    },
    userAccounts: {
        data: [],
        loading: false,
        error: null,
    },
};
// const baseURL = process.env.REACT_APP_BASE_URL;
const baseURL = import.meta.env.VITE_BASE_URL;

const TRANSACTIONS_API_URL = `${baseURL}/api/v2/accTransactions`;
const USER_ACCOUNTS_API_URL = `${baseURL}/api/v2/dashboardInfo`;

export const fetchUserRecordDetails = createAsyncThunk("transactions/fetchUserAccountDetails", async () => {
    const response = await axios.get(USER_ACCOUNTS_API_URL);
    return response.data;
});

export const fetchAccountTransactions = createAsyncThunk("transactions/fetchAccountTransactions", async () => {
    const response = await axios.get(TRANSACTIONS_API_URL);
    return response.data; // Assuming `response.data` directly holds the transactions array
});

const transactionSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAccountTransactions.pending, (state) => {
                state.transactions.loading = true;
                state.transactions.error = null;
            })
            .addCase(fetchAccountTransactions.fulfilled, (state, action) => {
                state.transactions.loading = false;
                state.transactions.data = action.payload;
            })
            .addCase(fetchAccountTransactions.rejected, (state, action) => {
                state.transactions.loading = false;
                state.transactions.error = action.error.message;
            });

        builder
            .addCase(fetchUserRecordDetails.pending, (state) => {
                state.userAccounts.loading = true;
                state.userAccounts.error = null;
            })
            .addCase(fetchUserRecordDetails.fulfilled, (state, action) => {
                state.userAccounts.loading = false;
                state.userAccounts.data = action.payload;
            })
            .addCase(fetchUserRecordDetails.rejected, (state, action) => {
                state.userAccounts.loading = false;
                state.userAccounts.error = action.error.message;
            });
    },
});

export default transactionSlice.reducer;
