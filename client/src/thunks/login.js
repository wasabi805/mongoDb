import { createAsyncThunk } from "@reduxjs/toolkit";
import { setHomeAuth, setTest } from "../store/slices/loginSlice";
import { postHomeLogin } from "../services/login";

export const submitHomeAuthLogin = createAsyncThunk(
  "submitHomeAuthLogin",

  async (
    _, // note: that under scrore can pass args when needed ie, {someArg, anotherArg }
    { dispatch, getState },
  ) => {
    let state = getState();
    const { userName, password } = state.loginSlice;
    const response = await postHomeLogin({ userName, password });

    return {
      data: response.data,
    };
  },
);
