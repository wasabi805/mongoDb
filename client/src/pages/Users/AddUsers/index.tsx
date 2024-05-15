import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store";
import {
  addUserData,
  addUserDataAddressInfo,
} from "../../../store/slices/userSlice";
import { userApis } from "../../../store/slices/userSlice";
import { AddUsersContainer } from "../styled";
import UserFormPanel from "./UserFormPanel";
import UserAddAvatar from "./UserAddAvatar";
import UserConfirmPanel from "./UserConfirmPanel";
import { dummyData } from "./consts";

const AddUsers = () => {
  const dispatch = useAppDispatch();

  const userSlice = useAppSelector((state) => state.userSlice);
  console.log("what is userSlice", userSlice);
  const { createUser } = userApis;
  React.useEffect(() => {
    console.log("userSlice on mount", userSlice);
  }, []);

  // const handleUpdateAddUserForm = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   dispatch(addUserData({ [name]: value }));
  // };

  // const handleAddUserDataAddressInfo = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   dispatch(addUserDataAddressInfo({ [name]: value }));
  // };

  // addUserDataAddressInfo

  const handleSubmitNewUser = () => {
    alert("submit clicked");
    dispatch(createUser({})).then((res) => {
      /* you could potentialy dipatch here but avoid doing so*/
      // console.log('what is res', res)
      return res;
    });
  };

  const [localState, setLocalState] = useState({
    panel: "form-data",
  });

  const handleSetPanel = ({ panel }) => {
    return setLocalState({ ...localState, panel });
  };

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
          {/* END */}

          {userSlice.addUser.panel === "form-data" && <UserFormPanel />}
          {userSlice.addUser.panel === "add-user-avatar" && <UserAddAvatar />}
          {userSlice.addUser.panel === "user-confirm-panel" && (
            <UserConfirmPanel />
          )}

          {/* ----- ------  ----  ----- ----   */}
          {/* <div className="button-row">
            <Button
              className={"submit-button"}
              variant={"contained"}
              // sx={{ width: "8rem" }}
              // onClick={handleSubmitNewUser}
              onClick={() => handleSetPanel({ panel: "avatar" })}
            >
              next
            </Button>
          </div> */}
        </Box>

        <Typography className={"text-container"}>{dummyData}</Typography>
      </AddUsersContainer>
    </div>
  );
};

export default AddUsers;
