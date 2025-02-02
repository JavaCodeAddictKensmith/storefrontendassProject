import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSalesOverview = createAsyncThunk("transactions/fetchSalesOverview", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get("https://run.mocky.io/v3/99c77e2c-4905-4c55-a400-0a2b4c5ce595");
        console.log("=== API Response ===", response.data);
        return response.data; // Ensure correct return value
    } catch (error) {
        console.error("API Error:", error);
        return rejectWithValue(error.response?.data || "Failed to fetch data");
    }
});
