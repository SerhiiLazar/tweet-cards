import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./usersSlice";
// import { filtersReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    // filter: filtersReducer,
  },
});