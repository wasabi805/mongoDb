import { createAsyncThunk, Dispatch } from "@reduxjs/toolkit";
import { postHomeLogin } from "../services/login";
import { RootState } from "../types/Slices";

export const submitHomeAuthLogin = createAsyncThunk<
  { data: { isHomeAuth: boolean } },
  object, //use object when passing in _ , ie no args into the async fn
  { state: RootState; dispatch: Dispatch }
>(
  "submitHomeAuthLogin",
  async (
    _, // note: that under scrore can pass args when needed ie, {someArg, anotherArg }
    thunkApi,
  ) => {
    const state = thunkApi.getState();
    const { userName, password } = state.loginSlice;
    const response = await postHomeLogin({ userName, password }).then((res) => {
      return res;
    });

    return {
      data: response?.data,
    };
  },
);
