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

    const response = await postNewUser({ name, userName, email });
    
    // dispatch(clearUserData({name: 'foo', userName: '', email: ''}))

    return {
      addUser : { name: "", userName: "", email: "", },
      newUserAdded : response.data
    }
  },
);

export const submitDeleteUser = createAsyncThunk(
  "/users/delete",
  async({ userId }, {dispatch, getState})=>{
  
    const state = getState()
    let users = state.userSlice.users

    const response = await postDeleteUser({userId}).then(res=>res)

    const _id = response?.data._id

    users = users.filter(user =>{
      return user._id !== _id
    })

    return { users }
  }
)


