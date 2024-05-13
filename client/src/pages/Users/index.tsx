import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";

import { userApis } from "../../store/slices/userSlice";
import { toggleEditUserModal, setEditUser } from "../../store/slices/userSlice";

import EditUserModal from "./EditUserModal";
import { Button } from "@mui/material";

import { EditUser } from "../../types/Users";
import { AllUsersGrid } from "./UsersTable";

const Users = () => {
  const dispatch = useAppDispatch();
  const { fetchUsers, deleteUser } = userApis;

  const { users } = useAppSelector((state) => state.userSlice);

  const handleFetchAllUsers = async () => {
    if (users?.length === 0 || users === undefined) {
      dispatch(fetchUsers());
    }
  };
  /*Component mounted */
  useEffect(() => {
    handleFetchAllUsers();
  }, []);

  const handleDeleteUser = ({ userId }: { userId: string }) => {
    dispatch(deleteUser({ userId }));
  };

  const handleEditUser = (
    e: React.MouseEvent<HTMLButtonElement>,
    { userId }: EditUser
  ) => {
    const isEditUser = e.currentTarget.name === "edit-user";
    if (isEditUser) {
      const user = users?.find((user) => user?._id === userId);
      dispatch(setEditUser({ user, userId }));
    }
    //pop open modal
    dispatch(toggleEditUserModal());
  };

  const [localState, setLocalState] = useState({
    data: {},
  });

  const setViewAdditionalData = ({ data }) => {
    console.log("what is data", data);
    setLocalState({
      ...localState,
      data,
    });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>
          <h3>Users</h3>
        </span>
      </div>

      <EditUserModal />
      <div className="experiment" style={{ display: "flex" }}>
        <div>
          <AllUsersGrid onRowClick={setViewAdditionalData} />
        </div>

        <div className="additional-user-data">
          {Object.keys(localState.data).length > 0 && (
            <div>
              <div>id : {localState.data.id}</div>
              <div>Street : {localState.data.address.Street}</div>
              <div>City : {localState.data.address.city}</div>
              <div>State : {localState.data.address.state}</div>
              <div>Zipcode : {localState.data.address.zipcode}</div>
            </div>
          )}
        </div>
      </div>

      {/* <AllUsersGrid /> */}

      {/* {users?.map((user, idx) => {
        return (
          <div
            style={{ display: "flex", alignSelf: "center" }}
            key={`user-${idx}`}
          >
            <span style={{ marginRight: "1rem" }}>{user?._id}</span>

            <span style={{ marginRight: "1rem" }}>{user?.userName}</span>
            <span style={{ marginRight: "1rem" }}>{user?.email}</span>
            <span style={{ marginRight: "1rem" }}>{user?.name}</span>

            <span>
              <Button
                variant="outlined"
                name={"edit-user"}
                onClick={(e) => handleEditUser(e, { userId: user?._id })}
              >
                edit
              </Button>

              <Button
                variant="outlined"
                onClick={() => handleDeleteUser({ userId: user!._id! })}
              >
                delete
              </Button>
            </span>
          </div>
        );
      })} */}

      {/* <div>show extra</div> */}
    </div>
  );
};

export default Users;
