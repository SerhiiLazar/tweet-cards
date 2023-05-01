import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://644acdb179279846dcf232bb.mockapi.io';

export const fetchUsers = createAsyncThunk(
    'users/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/users');
            return response.data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const fetchFollow = createAsyncThunk(
    "users/fetchFollow",
    async (userId, thunkAPI) => {
        try {
            const { data: user } = await axios.get(`/users/${userId}`);
            user.follow = !user.follow;
            user.followers = user.follow ? user.followers + 1 : user.followers - 1;
            const response = await axios.put(`/users/${userId}`, user);
            return response.data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

