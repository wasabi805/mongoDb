import { createSlice } from "@reduxjs/toolkit";

/* APIS */
import { getAllUsers } from "../../thunks/users";

const initialState = {
  loading: false,
  users: [],
};

/* REDUCER */
export const userSlice = createSlice({
  name: "users",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    /* GET ALL USERS */
    builder.addCase(getAllUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload?.data?.users;
      state.loading = false;
    });

    builder.addCase(getAllUsers.rejected, (state, action) => {
      console.log("rejected", action);
      state.loading = false;
      (state.users = []), (state.error = action.error.message);
    });
  },
});

export default userSlice.reducer;
export const userApis = { fetchUsers: getAllUsers };
