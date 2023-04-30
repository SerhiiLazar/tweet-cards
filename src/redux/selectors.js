import { createSelector } from "@reduxjs/toolkit";
import  {statusFilters}  from "../constants/constantsFilter";

export const selectUser = (state) => state.users.items;

export const selectIsLoading = (state) => state.users.isLoading;

export const selectError = (state) => state.users.error;

export const selectUserFilter = createSelector(
    [selectUser], 
    (users, statusFilter) => {
        switch (statusFilter) {
            case statusFilters.follow:
                return users.filter((user) => !user.follow);
            case statusFilters.followings: 
                return users.filter((user) => user.follow);
            default:
                return users;
            
        }
    }
)