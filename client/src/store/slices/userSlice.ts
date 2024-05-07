import { createSlice } from "@reduxjs/toolkit";

/* APIS */
import {
  getAllUsers,
  submitNewUser,
  submitDeleteUser,
  submitEditUser,
} from "../../thunks/users";

type User ={
  userName?: string,
  name?: string,
  email?: string
}

type State={
  loading: boolean,
  users: User[],
  addUser: {
    userName: string,
    name: string,
    email: string
  },

  editUser: {
    userId: string
    toggleModal: boolean,

    user: {
      userName: string,
      name: string,
      email: string,
    },
  },
}


const initialState : State = {
  loading: false,
  users: [],

  addUser: {
    name: "",
    userName: "",
    email: "",
  },

  editUser: {
    userId: "",
    toggleModal: false,

    user: {
      userName: "",
      name: "",
      email: "",
    },
  },
};


/* REDUCER */
export const userSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    addUserData(state : State, action :{ payload:{ userName?: string |undefined, name?: string| undefined, email?: string |undefined }}) {
      console.log('what is action.payload', action.payload)
      console.log('Object.entries(action.payload)', Object.entries(action.payload))
      const [key , value] =  Object.entries(action.payload)[0];
      
      state.addUser[key ]= value
    },

    clearUserData: (state) => {
      state.loading = false;
    },

    toggleEditUserModal: (state) => {
      state.editUser.toggleModal = !state.editUser.toggleModal;
    },

    setEditUser: (state, action) => {
      const { user, userId } = action.payload;

      state.editUser.userId = userId;
      state.editUser.user = user;
    },

    setEditUserInputs: (state, action) => {
      const { editedUser } = action.payload;
      const [name, value] = Object.entries(editedUser)[0];

      state.editUser = {
        ...state.editUser,
        user: {
          ...state.editUser.user,
          [name]: value,
        },
      };
      state.loading = false;
    },

    setCancelEditUser: (state) => {
      state.editUser = {
        userId: "",
        toggleModal: false,

        user: {
          userName: "",
          name: "",
          email: "",
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
      state.users = []
    });

    /* -----  Create a new USER   ------*/
    builder.addCase(submitNewUser.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(submitNewUser.fulfilled, (state, action) => {
      const newUserAdded = action.payload?.newUserAdded;

      state.users = [...state.users, newUserAdded];
      state.addUser = {
        name: action.payload?.addUser.name,
        email: "",
        userName: "",
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

    builder.addCase(submitEditUser.fulfilled, (state, action) => {
      state.users = action.payload.data.users;
      state.loading = false;
      state.editUser.toggleModal = false;
    });

    builder.addCase(submitEditUser.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default userSlice.reducer;

export const {
  addUserData,
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
