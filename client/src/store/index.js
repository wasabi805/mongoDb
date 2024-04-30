import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { fetchAllUsers } from "../services/index";
export const store = configureStore({
  reducer: {
    userSlice,
    [ fetchAllUsers.reducerPath ] : fetchAllUsers.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchAllUsers.middleware),
});
