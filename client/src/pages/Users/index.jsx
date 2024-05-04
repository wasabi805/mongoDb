import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userApis } from "../../store/slices/userSlice";

import AddUsers from "./AddUsers";
import { Button } from "@mui/material";

const Users = () => {
  const dispatch = useDispatch();
  const { fetchUsers , deleteUser} = userApis;

  const { users } = useSelector((state) => state.userSlice);

  const handleFetchAllUsers = () => {
    dispatch(fetchUsers());
  };

  const handleDeleteUser = ({ userId }) => {
    console.log("delete", userId);
    dispatch(deleteUser({userId}))
  };

  useEffect(() => {
    handleFetchAllUsers();
  }, []);
  return (
    <div>
      <h3>Users</h3>
      {users.map((user, idx) => {
        return (
          <div
            style={{ display: "flex", alignSelf: "center" }}
            key={`user-${idx}`}
          >
            <span style={{ marginRight: "1rem" }}>{user._id}</span>

            <span style={{ marginRight: "1rem" }}>{user.userName}</span>
            <span style={{ marginRight: "1rem" }}>{user.email}</span>
            <span style={{ marginRight: "1rem" }}>{user.name}</span>

            <Button
              variant="outlined"
              onClick={() => handleDeleteUser({ userId: user._id })}
            >
              delete
            </Button>
          </div>
        );
      })}

      <AddUsers />
    </div>
  );
};

export default Users;
