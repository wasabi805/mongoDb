import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTest } from "../../services/testServices";
import { userApis } from "../../store/slices/userSlice";
import {
  toggleEditUserModal,
  setEditUser,
} from "../../store/slices/userSlice";

import { setIsHomeAuth } from "../../store/slices/loginSlice";

import AddUsers from "./AddUsers";
import EditUserModal from "./EditUserModal";
import { Button } from "@mui/material";

const Users = () => {
  const dispatch = useDispatch();
  const { fetchUsers, deleteUser } = userApis;

  const { users, editUser } = useSelector((state) => state.userSlice);

  const handleFetchAllUsers = async() => {
    if(users.length === 0){
      dispatch(fetchUsers());
    }

    // await the chain of calls 
    const getAllTest = await fetchAllTest()

    const setupDoc = ({res})=>console.log(`dispatch redux setupDoc`, res)
    const setTags = ({res})=>console.log(`dispatch redux setTags`, res)
    const setNotes = ({res})=>console.log(`dispatch redux setNotes`, res)

    const setters ={
      setupDoc : ({res})=> setupDoc({res}),
      setTags: ({res})=> setTags({res}),
      setNotes: ({res})=> setNotes({res})
    }

    // loop through response and dispatch
    getAllTest.forEach(svc => {
      setters[svc.value.name]({res : svc.value.data})
    });

    console.log('what is getAllTest', getAllTest)

  };
  /*Component mounted */
  useEffect(() => {
    handleFetchAllUsers();
  }, []);









  

  const handleDeleteUser = ({ userId }) => {
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

  const handleLogOut = ()=> dispatch(setIsHomeAuth({bool : false}))



  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <span>
        <h3>
        Users
        </h3>
        </span>
      <span>
        <Button onClick={()=> handleLogOut({bool: false})}>
          Log Out
        </Button >
      </span>
      </div>
      

      <EditUserModal />

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
