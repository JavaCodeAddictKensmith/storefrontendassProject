import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

// Get initial state from localStorage
const storedUser = JSON.parse(localStorage.getItem("user")) || null;
const initialState = {
    user: storedUser,
    isAuthenticated: !!storedUser, // True if user exists in localStorage
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signup: (state, action) => {
            const { username, email, password } = action.payload;
            const newUser = { username, email, password };

            localStorage.setItem("user", JSON.stringify(newUser)); // Save user to localStorage
            state.user = newUser;
            state.isAuthenticated = false;
        },
        login: (state, action) => {
            const { email, password } = action.payload;
            const storedUser = JSON.parse(localStorage.getItem("user"));
            var iscorrectUser = storedUser && storedUser.email === email && storedUser.password === password;
            // console.log("iscorrect user:", iscorrectUser);

            if (iscorrectUser) {
                state.isAuthenticated = true;
                state.user = storedUser;
                console.log("Logged in user:", storedUser);
                toast.success("Logged in successfully!");
            } else {
                toast.error("Invalid email or password!");
            }
        },
        logout: (state) => {
            localStorage.removeItem("user");
            state.user = null;
            state.isAuthenticated = false;
        },
    },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
