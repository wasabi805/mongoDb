import React from "react"; // useState
import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../../store";
import { AddUsersContainer } from "../styled";
import UserFormPanel from "./UserFormPanel";
import UserAddAvatar from "./UserAddAvatar";
import UserConfirmPanel from "./UserConfirmPanel";
import UserAddAvatarPreview from "./UserAddAvatarPreview";
import { dummyData } from "./consts";

const AddUsers = () => {
  const userSlice = useAppSelector((state) => state.userSlice);

  React.useEffect(() => {
    console.log("userSlice on mount", userSlice);
  }, []);

  return (
    <div>
      <AddUsersContainer className="add-users-container">
        <div className="inputs-title">
          <Typography variant={"h4"}>Add a user</Typography>
          <Typography variant="body1">
            Add a user to appear on the user table
          </Typography>
        </div>

        <Box className="inputs">
          {userSlice.addUser.panel === "form-data" && <UserFormPanel />}
          {userSlice.addUser.panel === "add-user-avatar" && <UserAddAvatar />}
          {userSlice.addUser.panel === "user-confirm-panel" && (
            <UserConfirmPanel />
          )}
        </Box>

        {userSlice.addUser.panel === "form-data" && (
          <div className={"text-container"}>
            <Typography>{dummyData}</Typography>
          </div>
        )}

        {userSlice.addUser.panel === "add-user-avatar" && (
          <UserAddAvatarPreview />
        )}
      </AddUsersContainer>
    </div>
  );
};

export default AddUsers;
