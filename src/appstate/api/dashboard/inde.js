import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchSalesOverview = createAsyncThunk("transactions/fetchSalesOverview", async () => {
    const response = await axios.get("https://run.mocky.io/v3/99c77e2c-4905-4c55-a400-0a2b4c5ce595");
    return response.data;
});

export const fetchAccounTransactions = createAsyncThunk("transactions/fetchAccounTransactions", async () => {
    const response = await axios.get("https://677fb6eb0476123f76a7b789.mockapi.io/api/v2/accTransactions");
    return response.data;
});
