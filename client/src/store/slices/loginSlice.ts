import { createSlice } from "@reduxjs/toolkit";
import { submitHomeAuthLogin } from "../../thunks/login";

export type Login_Action = {
  type: string;
  payload?: {
    data?: {
      isHomeAuth: boolean;
    };
    bool?: boolean;
  };
};

type InitialState = {
  [name: string]: string | unknown;
  userName?: string;
  password?: string;
  test?: object;
  loading?: boolean;
  isHomeAuth?: boolean;
  isSubmit?: boolean;
  displayLoginError?: boolean;
  homeAuth?: boolean;
};

const initialState: InitialState = {
  userName: "",
  password: "",
  test: {},
  loading: false,
  isHomeAuth: false,
  isSubmit: false,
  displayLoginError: false,
  homeAuth: false,
};

type Action = {
  payload: {
    userName?: string;
    data?: { isHomeAuth: boolean };
    bool?: boolean;
  };
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setInput: (state: InitialState, action: Action) => {
      const [key, value] = Object.entries(action.payload)[0];

      state[key as keyof InitialState] = value;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setHomeAuth: (state: any, action: Action) => {
      const homeAuth = action.payload;

      state.homeAuth = homeAuth;
    },

    setTest: (state: InitialState, action) => {
      state.test = action.payload;
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setIsHomeAuth: (state: any, action: Action) => {
      state.isHomeAuth = action?.payload?.bool;
      state.isSubmit = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(submitHomeAuthLogin.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(submitHomeAuthLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.isHomeAuth = action.payload?.data?.isHomeAuth;
      state.isSubmit = true;
      state.displayLoginError = action.payload?.data?.isHomeAuth;

      if (action.payload?.data?.isHomeAuth) {
        (state.userName = ""), (state.password = "");
      }
    });

    builder.addCase(submitHomeAuthLogin.rejected, (state, action) => {
      console.log("rejected | submitHomeAuthLogin", { state, action });
      state.loading = false;
    });
  },
});

// Action creators
export const { setInput, setHomeAuth, setTest, setIsHomeAuth } =
  loginSlice.actions;

export default loginSlice.reducer;
