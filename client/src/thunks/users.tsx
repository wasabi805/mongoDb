import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  fetchAllUsers,
  postNewUser,
  postDeleteUser,
  patchUpdateUser,
} from "../services/users";

import { AddUser, User, NewUserAdded } from "../types/Users";
// import { RootState } from "../types/Slices";
import { RootState, AppDispatch } from "../store";

export const getAllUsers = createAsyncThunk("/users/get", async () => {
  return await fetchAllUsers();
});

// https://github.com/reduxjs/redux-toolkit/issues/793#issuecomment-722494109
//https://redux-toolkit.js.org/usage/usage-with-typescript#typing-the-thunkapi-object

export const submitNewUser = createAsyncThunk<
  { addUser: AddUser; newUserAdded: NewUserAdded },
  object, //use object when passing in _ , ie no args into the async fn
  { state: RootState; dispatch: AppDispatch }
>("/users/post", async (_, thunkApi) => {
  const state = thunkApi.getState();
  const { name, userName, email } = state.userSlice.addUser;

  const response = await postNewUser({ name, userName, email });

  // dispatch(clearUserData({name: 'foo', userName: '', email: ''}))
  console.log("what is response.data", response);
  return {
    addUser: { name: "", userName: "", email: "" },
    newUserAdded: response?.data,
  };
});

export const submitDeleteUser = createAsyncThunk<
  { users: User[] },
  { userId: string },
  { state: RootState; dispatch: AppDispatch }
>("/users/delete", async ({ userId }, thunkApi) => {
  const state = thunkApi.getState();
  let users = state.userSlice.users;

  const response = await postDeleteUser({ userId }).then((res) => res);

  const _id: string = response?.data._id;

  users = users.filter((user) => {
    return user._id !== _id;
  });

  return { users };
});

export const submitEditUser = createAsyncThunk<
  { data: { users: User[] } }, //what this thunk returns
  null,
  { state: RootState; dispatch: AppDispatch }
>("/users/patch", async (_, { getState }) => {
  const state = getState();

  const { user, userId } = state.userSlice.editUser;

  const response = await patchUpdateUser({ userId, user }).then((res) => res);

  return response;
});
