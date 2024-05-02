import { createAsyncThunk } from "@reduxjs/toolkit";
import { setHomeAuth, setTest } from "../store/slices/loginSlice";

export const submitHomeAuthLogin = createAsyncThunk(
  "submitHomeAuthLogin",

  async ({ test }, { dispatch, getState }) => {
    let state = getState();
    console.log("verify state", state);

    dispatch(setTest({ test }));
  },
);
