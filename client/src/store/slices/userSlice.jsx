import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // updateUsers: (state, action) => {
    //  console.log('action.payload?.users', action.payload.users)
    //   state.users = action.payload?.users;
    // },
  },
});

// export const { updateUsers } = userSlice.actions;

export default userSlice.reducer;
