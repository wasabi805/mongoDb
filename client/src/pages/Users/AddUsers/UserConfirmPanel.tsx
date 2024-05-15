import React from "react";
import { Box, Button } from "@mui/material";
import { useAppDispatch } from "../../../store";
import { setPanelAddUserForm } from "../../../store/slices/userSlice";

const UserConfirmPanel = () => {
  const dispatch = useAppDispatch();

  return (
    <Box className="user-confirm-panel">
      <Box className={"confirm-this"}>
        <div>The Form will go in here</div>
      </Box>

      <div className="button-row">
        <Button
          sx={{ maxHeight: "3rem" }}
          className={"submit-button"}
          variant={"contained"}
          // sx={{ width: "8rem" }}
          // onClick={handleSubmitNewUser}
          onClick={() =>
            dispatch(
              setPanelAddUserForm({ addUser: { panel: "add-user-avatar" } }),
            )
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
          onClick={() => alert("submit me")}
        >
          confirm
        </Button>
      </div>
    </Box>
  );
};

export default UserConfirmPanel;
