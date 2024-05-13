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
  console.log("verify back end", import.meta.env.VITE_BACKEND);
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
  const { name, userName, email, phone, address } = state.userSlice.addUser;
  alert("submitting new user");

  console.log("SENDING TO NODE", { name, userName, email, phone, address });

  const response = await postNewUser({
    name,
    userName,
    email,
    phone,
    address,
  });

  // dispatch(clearUserData({name: 'foo', userName: '', email: ''}))
  return {
    addUser: {
      name: "",
      userName: "",
      email: "",
      phone: "",
      address: {
        street: "",
        city: "",
        state: "",
        zipcode: "",
      },
    },
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
  RootState,
  void,
  { state: RootState }
>("/users/patch", async (_, { getState }) => {
  const state = getState();

  const { user, userId } = state.userSlice.editUser;

  const response = await patchUpdateUser({ userId, user }).then((res) => res);

  return response;
});
