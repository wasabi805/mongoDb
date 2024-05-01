import React from "react";
import { useFetchAllUsersQuery } from "../../services/index";

const Users = () => {
  const { data, error, isLoading } = useFetchAllUsersQuery();

  return (
    <div>
      <h3>Users</h3>
      {isLoading === false && data.users.map((user) => user.name)}
    </div>
  );
};

export default Users;
