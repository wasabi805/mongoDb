import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userApis } from "../../store/slices/userSlice";

import AddUsers from "./AddUsers";
// import AddUsers from "./AddUsers";


const Users = () => {
  const dispatch = useDispatch();
  const { fetchUsers } = userApis;

  const { users } = useSelector((state) => state.userSlice);

  const handleFetchAllUsers = () => {
    dispatch(fetchUsers());
  };

  useEffect(() => {
    handleFetchAllUsers();
  }, []);
  return (
    <div>
      <h3>Users</h3>
      {users.map((user) => {
  
        return (
        <div style={{display: 'flex'}}>
             <span style={{marginRight: '1rem'}}>
                {user._id}
            </span >
            
            <span style={{marginRight: '1rem'}}>
                {user.userName}
            </span>
            <span style={{marginRight: '1rem'}}>
                {user.email}
            </span>
            <span style={{marginRight: '1rem'}}>
                {user.name}
            </span>
        </div>)
      })}

      <AddUsers/>
    </div>
  );
};

export default Users;
