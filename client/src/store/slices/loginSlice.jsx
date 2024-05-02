import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  password: "",
  test: "",
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
});

// Action creators
export const { setInput, setHomeAuth, setTest } = loginSlice.actions;

export default loginSlice.reducer;
