import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchAllUsers, postNewUser } from "../services/users";

export const getAllUsers = createAsyncThunk("/users/get", async () => {
  return await fetchAllUsers();
});

export const submitNewUser = createAsyncThunk("/users/post", async (_, {dispatch, getState}) => {

  const state = getState();
  const {name, userName, email} = state.userSlice.addUser
  
  return  await postNewUser({name, userName, email});
});
