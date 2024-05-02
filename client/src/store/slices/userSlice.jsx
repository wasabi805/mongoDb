import { createSlice } from "@reduxjs/toolkit";

/* APIS */
import { fetchUsers } from "../../services";

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
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload?.data?.users;
      state.loading = false;
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      console.log("rejected", action);
      state.loading = false;
      (state.users = []), (state.error = action.error.message);
    });
  },
});

export default userSlice.reducer;
export const userApis = { fetchUsers };
