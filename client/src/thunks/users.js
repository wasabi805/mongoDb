import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchAllUsers, postNewUser, postDeleteUser } from "../services/users";
import { clearUserData } from "../store/slices/userSlice";


export const getAllUsers = createAsyncThunk("/users/get", async () => {
  return await fetchAllUsers();
});

export const submitNewUser = createAsyncThunk(
  "/users/post",
  async (_, { dispatch, getState }) => {
    const state = getState();
    const { name, userName, email } = state.userSlice.addUser;

    await postNewUser({ name, userName, email });

    // dispatch(clearUserData({name: 'foo', userName: '', email: ''}))


    return 
  },
);

export const submitDeleteUser = createAsyncThunk(
  "/users/delete",
  async({ userId }, {dispatch, getState})=>{
    console.log('submitUser', userId)
    return await postDeleteUser({userId})
  }
)


