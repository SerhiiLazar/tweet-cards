import {createSlice} from "@reduxjs/toolkit";
import {fetchUsers, fetchFollow} from "./operations";
import axios from "axios";

axios.defaults.baseURL = "https://644acdb179279846dcf232bb.mockapi.io";

const initialState = {
    items: [],
    isLoading: false,
    error: null
}

const handlePending = (state) => {
    state.isLoading = true; 
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

export const usersSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        })
        .addCase(fetchFollow.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            const updatedUser = action.payload;
            const userIndex = state.items.findIndex(
                (user) => user.id === updatedUser.id
            );
            if (userIndex >= 0) {
                state.items[userIndex] = updatedUser;
            }
        })
        .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
        .addMatcher(
            (action) => action.type.endsWith("/rejected"),
            handleRejected
        )
    }
})

export const usersReducer = usersSlice.reducer;
