import { createSlice } from "@reduxjs/toolkit";

/* APIS */
import {
  getAllUsers,
  submitNewUser,
  submitDeleteUser,
} from "../../thunks/users";

const initialState = {
  loading: false,
  users: [],

  addUser: {
    name: "",
    userName: "",
    email: "",
  },
};

/* REDUCER */
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUserData(state, action) {
      const [key, value] = Object.entries(action.payload)[0];

      state.addUser[key] = value;
    },

    clearUserData : ( state, action)=>{
      console.log('what is action here', action)
      state.loading = false;
    }

  },

  extraReducers: (builder) => {
    /* ------ GET ALL USERS ------ */
    builder.addCase(getAllUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload?.data?.users;
      state.loading = false;
    });

    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.loading = false;
      (state.users = []), (state.error = action.error.message);
    });

    /* -----  Create a new USER   ------*/
    builder.addCase(submitNewUser.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(submitNewUser.fulfilled, (state, action) => {
    
      const newUserAdded = action.payload.data;

      state.users = [...state.users, newUserAdded];
      state.loading = false;
    });

    builder.addCase(submitNewUser.rejected, (state) => {
      state.loading = false;
    });

    /* -----  Delete a user   -----*/
    builder.addCase(submitDeleteUser.pending, (state) => {
      console.log('action when blows up',)
      state.loading = true;
    });

    builder.addCase(submitDeleteUser.fulfilled, (state, action) => {
      state.loading = false;
    });

    builder.addCase(submitDeleteUser.rejected, (state, action) => {
      alert('blew up')
      console.log('action when blows up', action)
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
export const { addUserData, clearUserData } = userSlice.actions;
export const userApis = { fetchUsers: getAllUsers, createUser: submitNewUser, deleteUser : submitDeleteUser };
