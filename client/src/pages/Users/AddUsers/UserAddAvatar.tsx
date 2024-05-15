import React from "react";
import { Box, Button } from "@mui/material";
import { useAppDispatch } from "../../../store";
import { setPanelAddUserForm } from "../../../store/slices/userSlice";

const UserAddAvatar = () => {
  const dispatch = useAppDispatch();

  return (
    <Box className="add-user-avatar">
      <Box className={"drag-and-drop-container"}>
        <div>This will be the actual box</div>
      </Box>

      <div className="button-row">
        <Button
          sx={{ maxHeight: "3rem" }}
          className={"submit-button"}
          variant={"contained"}
          // sx={{ width: "8rem" }}
          // onClick={handleSubmitNewUser}
          onClick={() =>
            dispatch(setPanelAddUserForm({ addUser: { panel: "form-data" } }))
          }
        >
          Prev
        </Button>

        <Button
          sx={{ maxHeight: "3rem" }}
          className={"submit-button"}
          variant={"contained"}
          // sx={{ width: "8rem" }}
          // onClick={handleSubmitNewUser}
          onClick={() =>
            dispatch(
              setPanelAddUserForm({ addUser: { panel: "user-confirm-panel" } }),
            )
          }
        >
          Next
        </Button>
      </div>
    </Box>
  );
};

export default UserAddAvatar;
