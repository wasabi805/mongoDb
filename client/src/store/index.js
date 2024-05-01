import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { fetchAllUsers } from "../services/index";
import { loginApi } from "../services/loginServices";
import loginSlice from "./slices/loginSlice";

export const store = configureStore({
  reducer: {
    userSlice,
    [fetchAllUsers.reducerPath]: fetchAllUsers.reducer,
    loginSlice,
    [loginApi.reducerPath]: loginApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      fetchAllUsers.middleware,
      loginApi.middleware,
    ),
});
