import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  password: "",
  homeAuth: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setInput: (state, action) => {
      const [key, value] = Object.entries(action.payload)[0];
      state[key] = value;
      state.homeAuth = false;
    },
    setHomeAuth: (state, action) => {
      console.log("********", action);
      const homeAuth = action.payload;
      state.homeAuth = homeAuth;
    },
  },
});

// Action creators
export const { setInput, setHomeAuth } = loginSlice.actions;

export default loginSlice.reducer;
