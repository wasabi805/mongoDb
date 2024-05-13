import { createSlice } from "@reduxjs/toolkit";

/* APIS */
import {
  getAllUsers,
  submitNewUser,
  submitDeleteUser,
  submitEditUser,
} from "../../thunks/users";

import { User_State, User_Action, User } from "../../types/Users";

const initialState: User_State = {
  loading: false,
  users: [],

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

  editUser: {
    userId: "",
    _id: "",
    toggleModal: false,

    user: {
      userName: "",
      name: "",
      email: "",
      phone: "",

      address: {
        street: "",
        city: "",
        state: "",
        zipcode: "",
      },
    },
  },
};

/* REDUCER */
export const userSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    addUserData(state: User_State, action: User_Action) {
      const [key, value] = Object.entries(action.payload)[0]
     
      state.addUser={
        ...state.addUser,
        [key] : value,
        // userName: "",
        // name: "",
        // email: "",
        // phone: "",

        address: {
          ...state.addUser.address
        },

      }

    },

    addUserDataAddressInfo(state: User_State, action: User_Action){
      const [key, value] = Object.entries(action.payload)[0]
      state.addUser={
        ...state.addUser,
         // userName: "",
        // name: "",
        // email: "",
        // phone: "",
        address: {
          ...state.addUser.address,
          [key] : value,
        },
      }
    },

    clearUserData: (state: User_State) => {
      state.loading = false;
    },

    toggleEditUserModal: (state) => {
      state.editUser.toggleModal = !state.editUser.toggleModal;
    },

    setEditUser: (state: User_State, action: User_Action) => {
      const { user, userId } = action.payload;

      state.editUser.userId = userId;
      state.editUser.user = user;
    },

    setEditUserInputs: (state: User_State, action) => {
      const { editedUser } = action.payload;
      const [name, value] = Object.entries(editedUser)[0];

      state.editUser = {
        ...state.editUser,
        user: {
          ...(state!.editUser!.user as User),
          [name]: value,
          address: {
            ...Object.assign({}, state.editUser?.address)
          },
        },
      };
      state.loading = false;
    },

    setCancelEditUser: (state: User_State) => {
      state.editUser = {
        userId: "",
        toggleModal: false,

        user: {
          userName: "",
          name: "",
          email: "",
          address: {
            street: "",
            city: "",
            state: "",
            zipcode: "",
          },
        },
      };
    },
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

    builder.addCase(getAllUsers.rejected, (state) => {
      state.loading = false;
      state.users = [];
    });

    /* -----  Create a new USER   ------*/
    builder.addCase(submitNewUser.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(submitNewUser.fulfilled, (state, action) => {
      const newUserAdded = action.payload?.newUserAdded;

      state.users.push(newUserAdded);
      
      //come here 
      state.addUser = {
        name: action.payload?.addUser.name,
        email: "",
        userName: "",
        phone: "",

        address: {
          street: "",
          city: "",
          state: "",
          zipcode: "",
        },
      };
      state.loading = false;
    });

    builder.addCase(submitNewUser.rejected, (state) => {
      state.loading = false;
    });

    /* -----  Delete a user   -----*/
    builder.addCase(submitDeleteUser.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(submitDeleteUser.fulfilled, (state, action) => {
      const users = action.payload?.users;
      state.users = users;

      state.loading = false;
    });

    builder.addCase(submitDeleteUser.rejected, (state) => {
      state.loading = false;
    });

    /* -----  Update a user   -----*/
    builder.addCase(submitEditUser.pending, (state) => {
      state.loading = false;
    });

    builder.addCase(
      submitEditUser.fulfilled,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (state: User_State, action: any) => {
        state.users = action.payload?.data?.users;
        state.loading = false;
        state.editUser.toggleModal = false;
      },
    );

    builder.addCase(submitEditUser.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default userSlice.reducer;

export const {
  addUserData,
  addUserDataAddressInfo,
  clearUserData,
  toggleEditUserModal,
  setEditUser,
  setEditUserInputs,
  setCancelEditUser,
} = userSlice.actions;

export const userApis = {
  fetchUsers: getAllUsers,
  createUser: submitNewUser,
  deleteUser: submitDeleteUser,
  sendEditUser: submitEditUser,
};
