import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchAllUsers } from "../services/users";

export const getAllUsers = createAsyncThunk("/", async () => {
  return await fetchAllUsers();
});
