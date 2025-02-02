import { createSlice } from "@reduxjs/toolkit";
import { fetchSalesOverview } from "../api/dashboard/inde";

const initialState = {
    salesTransactions: {
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
const transactionSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Transactions
        builder
            .addCase(fetchSalesOverview.pending, (state) => {
                state.salesTransactions.loading = true;
                state.salesTransactions.error = null;
            })
            .addCase(fetchSalesOverview.fulfilled, (state, action) => {
                state.salesTransactions.loading = false;
                state.salesTransactions.data = action.payload;
            })
            .addCase(fetchSalesOverview.rejected, (state, action) => {
                state.salesTransactions.loading = false;
                state.salesTransactions.error = action.error.message || "Something went wrong";
            });

        // User Accounts
        // builder
        //     .addCase(fetchUserAccountDetails.pending, (state) => {
        //         state.userAccounts.loading = true;
        //         state.userAccounts.error = null;
        //     })
        //     .addCase(fetchUserAccountDetails.fulfilled, (state, action) => {
        //         state.userAccounts.loading = false;
        //         state.userAccounts.data = action.payload;
        //     })
        //     .addCase(fetchUserAccountDetails.rejected, (state, action) => {
        //         state.userAccounts.loading = false;
        //         state.userAccounts.error = action.error.message || "Something went wrong";
        //     });
    },
});

export default transactionSlice.reducer;
