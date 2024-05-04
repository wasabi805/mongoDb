import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userApis } from "../../store/slices/userSlice";
import { toggleEditUserModal, setEditUser , setEditUserInputs} from "../../store/slices/userSlice";

import AddUsers from "./AddUsers";
import EditUserModal from "./EditUserModal";
import { Button, } from "@mui/material";

const Users = () => {
  const dispatch = useDispatch();
  const { fetchUsers, deleteUser } = userApis;

  const { users, editUser } = useSelector((state) => state.userSlice);

  const handleFetchAllUsers = () => {
    dispatch(fetchUsers());
  };

  const handleDeleteUser = ({ userId }) => {
    console.log("delete", userId);
    dispatch(deleteUser({ userId }));
  };

  const handleEditUser = (e, { userId }) => {
    const isEditUser = e.target.name === "edit-user";
    if (isEditUser) {
      const user = users.find((user) => user._id === userId);
      dispatch(setEditUser({ user, userId }));
    }
    //pop open modal
    dispatch(toggleEditUserModal());
  };

  useEffect(() => {
    handleFetchAllUsers();
    console.log(users);
  }, []);
  return (
    <div>
      <h3>Users</h3>

      <EditUserModal/>

      {users?.map((user, idx) => {
        return (
          <div
            style={{ display: "flex", alignSelf: "center" }}
            key={`user-${idx}`}
          >
            <span style={{ marginRight: "1rem" }}>{user._id}</span>

            <span style={{ marginRight: "1rem" }}>{user.userName}</span>
            <span style={{ marginRight: "1rem" }}>{user.email}</span>
            <span style={{ marginRight: "1rem" }}>{user.name}</span>

            <span>
              <Button
                variant="outlined"
                name={"edit-user"}
                onClick={(e) => handleEditUser(e, { userId: user._id })}
              >
                edit
              </Button>

              <Button
                variant="outlined"
                onClick={() => handleDeleteUser({ userId: user._id })}
              >
                delete
              </Button>
            </span>
          </div>
        );
      })}

      <AddUsers />
    </div>
  );
};

export default Users;
