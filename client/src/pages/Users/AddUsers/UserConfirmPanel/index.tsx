import { Box, Button } from "@mui/material";
import { useAppDispatch } from "../../../../store";
import { setPanelAddUserForm } from "../../../../store/slices/userSlice";
import { useAppSelector } from "../../../../store";
import { UserConfirmPanelContainer } from "./styled";

const UserConfirmPanel = () => {
  const dispatch = useAppDispatch();
  const { addUser } = useAppSelector((state) => state.userSlice);

  const userContact = addUser.info;

  // console.log("check", addUser);
  return (
    <UserConfirmPanelContainer className="user-confirm-panel">
      <Box className={"confirm-user-data"}>
        <div className="user-info">
          {Object.entries(userContact).map(([key, value]) => {
            return (
              <div className="row">
                <span className="title">{key}</span>

                <span className="value">{value && value} </span>
              </div>
            );
          })}
        </div>

        <div className="user-address">
          {Object.entries(addUser?.address).map(([key, value]) => {
            // console.log("check", item);
            return (
              <div className="row">
                <span className="title">{key}</span>

                <span className="value">{value && value} </span>
              </div>
            );
          })}
        </div>
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
    </UserConfirmPanelContainer>
  );
};

export default UserConfirmPanel;
