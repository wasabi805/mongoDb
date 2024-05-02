import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userApis } from "../../store/slices/userSlice";

const Users = () => {
  const dispatch = useDispatch();
  const { fetchUsers } = userApis;

  const { users } = useSelector((state) => state.userSlice);
  console.log("users - redux", users);

  const handleFetchAllUsers = () => {
    dispatch(fetchUsers());
  };

  useEffect(() => {
    handleFetchAllUsers();
  }, []);
  return (
    <div>
      <h3>Users</h3>
      {users.map((user) => user.name)}
    </div>
  );
};

export default Users;
