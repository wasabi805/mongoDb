import loginSlice from "./slices/loginSlice";
import userSlice from "./slices/userSlice";
import dashboardSlice from "./slices/dashboardSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "@reduxjs/toolkit";

/* Note need to use combine reducers with RTK and redux persist for persit to work correctly */
// see Redux persist docs for set up : https://github.com/rt2zz/redux-persist?tab=readme-ov-file#quickstart
// your config has some slight tweaks to the docs above, other parts from the docs are also in store/index.js

const rootReducer = combineReducers({
  loginSlice,
  dashboardSlice,
  userSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
