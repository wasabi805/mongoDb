import { createSlice } from "@reduxjs/toolkit";
import { submitHomeAuthLogin } from "../../thunks/login";

const initialState = {
  userName: "",
  password: "",
  test: "",
  loading: false,
  isHomeAuth: false,
  displayLoginError: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setInput: (state, action) => {
      const [key, value] = Object.entries(action.payload)[0];
      state[key] = value;
    },
    setHomeAuth: (state, action) => {
      console.log("********", action);
      const homeAuth = action.payload;
      state.homeAuth = homeAuth;
    },

    setTest: (state, action) => {
      state.test = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(submitHomeAuthLogin.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(submitHomeAuthLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.isHomeAuth = action.payload?.data?.isHomeAuth;
      state.displayLoginError = action.payload?.data?.isHomeAuth;

      if (action.payload?.data?.isHomeAuth) {
        (state.userName = ""), (state.password = "");
      }
    });

    builder.addCase(submitHomeAuthLogin.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

// Action creators
export const { setInput, setHomeAuth, setTest } = loginSlice.actions;

export default loginSlice.reducer;
