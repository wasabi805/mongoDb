import React from "react"; // useState
import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../../store";
import { AddUsersContainer } from "../styled";
import UserFormPanel from "./UserFormPanel";
import UserAddAvatar from "./UserAddAvatarPanel";
import UserConfirmPanel from "./UserConfirmPanel";
import { dummyData, addUserConsts } from "./consts";
import UserSummaryAvatar from "./UserConfirmPanel/UserSummaryAvatar";
import Canvas from "../../../common/Canvas/Canvas";
import useAppMedia from "../../../hooks/useAppMedia";
import { useTheme } from "@mui/material/styles";

const AddUsers = () => {
  const userSlice = useAppSelector((state) => state.userSlice);
  const theme = useTheme();
  const { isMobile, isTablet, isDesktop, isTv } = useAppMedia({ theme });

  React.useEffect(() => {
    console.log("userSlice on mount", userSlice);
  }, []);

  const { FORM_DATA, ADD_USER_AVATAR, USER_CONFIRM_PANNEL } = addUserConsts;

  const titles = {
    [FORM_DATA]: {
      title: "Add a user",
      info: "Add a user to appear on the user table",
    },
    [ADD_USER_AVATAR]: {
      title: "Select an avatar",
      info: "choose an image less than 10 mb if you like.",
    },
    [USER_CONFIRM_PANNEL]: {
      title: "Summary",
      info: "Please ensure the data for accuracy",
    },
  };

  return (
    <AddUsersContainer className="add-users-container">
      <div className="inputs-title">
        <div className={"title"}>
          <div className="text">
            <Typography variant={"h4"}>
              {titles[userSlice.addUser.panel]?.title}
            </Typography>

            <Typography variant="body1">
              {titles[userSlice.addUser.panel]?.info}
            </Typography>
          </div>

          {userSlice.addUser.panel === USER_CONFIRM_PANNEL && (
            <Canvas
              className={"title-avatar"}
              style={{
                display: `${isMobile ? `inline` : isTablet ? `inline` : isDesktop ? `none` : isTv ? `none` : `inline`}`,
              }}
              shape={"circle"}
              b64Str={userSlice.addUser.avatar.b64Str}
              width={150}
              height={150}
            />
          )}
        </div>

        {userSlice.addUser.panel === USER_CONFIRM_PANNEL && (
          <div className={"avatar"}>
            <UserSummaryAvatar />
          </div>
        )}
      </div>

      <>
        {userSlice.addUser.panel === FORM_DATA && <UserFormPanel />}
        {userSlice.addUser.panel === ADD_USER_AVATAR && <UserAddAvatar />}
        {userSlice.addUser.panel === USER_CONFIRM_PANNEL && (
          <UserConfirmPanel />
        )}
      </>
    </AddUsersContainer>
  );
};

export default AddUsers;
