import { createAsyncThunk } from "@reduxjs/toolkit";
import { postHomeLogin } from "../services/login";

type State = {
  loginSlice: {
    userName: string;
    password: string;
  };
};

export const submitHomeAuthLogin = createAsyncThunk(
  "submitHomeAuthLogin",

  async (
    _, // note: that under scrore can pass args when needed ie, {someArg, anotherArg }
    { getState },
  ) => {
    const state = getState() as State;
    const { userName, password } = state.loginSlice;
    const response = await postHomeLogin({ userName, password }).then((res) => {
      return res;
    });

    return {
      data: response!.data,
    };
  },
);
