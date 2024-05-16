import { useEffect, useState, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../store";

import { userApis } from "../../store/slices/userSlice";
import { toggleEditUserModal, setEditUser } from "../../store/slices/userSlice";

import EditUserModal from "./EditUserModal";
import { Box, Paper, Typography } from "@mui/material";

import { EditUser } from "../../types/Users";
import { AllUsersGrid } from "./UsersTable";
import InlineKeyValue from "../../common/InlineKeyValue";
import { User, UserAddress } from "../../types/Users";

export type Data = {
  data: {
    id?: string | undefined;
    userName?: string;
    users?: User[] | object;
    address?: UserAddress;
  };
};

const Users: FC = () => {
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

  console.log(handleDeleteUser);

  const handleEditUser = (
    e: React.MouseEvent<HTMLButtonElement>,
    { userId }: EditUser,
  ) => {
    const isEditUser = e.currentTarget.name === "edit-user";
    if (isEditUser) {
      const user = users?.find((user) => user?._id === userId);
      dispatch(setEditUser({ user, userId }));
    }
    //pop open modal
    dispatch(toggleEditUserModal());
  };

  console.log(handleEditUser);

  const [localState, setLocalState] = useState<Data>({
    data: {},
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setViewAdditionalData = ({ data }: any) => {
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

        <Box
          className="additional-user-data"
          style={{
            // background: "magenta",
            display: "flex",
            flex: "0 0 100%",
          }}
        >
          {Object.keys(localState.data).length > 0 && (
            <Paper sx={{ padding: "4rem", minWidth: "20rem" }}>
              <Box>
                <div
                  style={{
                    paddingTop: "81.25%",
                    borderRadius: "50%",
                    margin: "28px",
                    background: "#3333f7",
                    display: "flex",
                    position: "relative",
                  }}
                >
                  <Typography
                    variant="body1"
                    style={{
                      color: "white",
                      position: "absolute",
                      top: "10%",
                      left: "38%",

                      fontSize: "8rem",
                    }}
                  >
                    {localState?.data?.userName?.split("")[0]}
                  </Typography>
                </div>
              </Box>

              <Box>
                <InlineKeyValue inlineKey={"ID"} value={localState.data.id} />
                <InlineKeyValue
                  inlineKey={"Street"}
                  value={localState?.data?.address?.street}
                />
                <InlineKeyValue
                  inlineKey={"City"}
                  value={localState?.data?.address?.city}
                />
                <InlineKeyValue
                  inlineKey={"State"}
                  value={localState?.data?.address?.state}
                />
                <InlineKeyValue
                  inlineKey={"Zip Code"}
                  value={localState?.data?.address?.zipcode}
                />
              </Box>
            </Paper>
          )}
        </Box>
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
