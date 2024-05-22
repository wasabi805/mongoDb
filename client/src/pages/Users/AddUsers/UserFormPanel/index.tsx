import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";

import { useAppDispatch, useAppSelector } from "../../../../store";
import {
  addUserData,
  addUserDataAddressInfo,
  setPanelAddUserForm,
} from "../../../../store/slices/userSlice";

import { AddUsersContainer } from "./styles";
import { dummyData } from "../consts";

const UserFormPanel = () => {
  const dispatch = useAppDispatch();

  const userSlice = useAppSelector((state) => state.userSlice);

  const handleUpdateAddUserForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch(addUserData({ info: { [name]: value } }));
  };

  const handleAddUserDataAddressInfo = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch(addUserDataAddressInfo({ [name]: value }));
  };

  const Input = ({ inputKey, value }) => (
    <FormControl>
      <FormLabel>{inputKey}</FormLabel>
      <InputLabel htmlFor={inputKey} />
      <OutlinedInput
        onChange={(e) => handleUpdateAddUserForm(e)}
        name={inputKey}
        value={value}
        error={false}
      />
    </FormControl>
  );

  return (
    <AddUsersContainer>
      <div className="form_inputs">
        {Object.entries(userSlice.addUser.info).map(([key, value]) => (
          <Input inputKey={key} value={value} />
        ))}

        {Object.entries(userSlice?.addUser?.address).map(([key, value]) => (
          <Input inputKey={key} value={value} />
        ))}

        <div className="button-row">
          <Button
            sx={{ maxHeight: "3rem" }}
            className={"submit-button"}
            variant={"contained"}
            // sx={{ width: "8rem" }}
            // onClick={handleSubmitNewUser}
            onClick={() =>
              dispatch(
                setPanelAddUserForm({ addUser: { panel: "add-user-avatar" } })
              )
            }
          >
            next
          </Button>
        </div>
      </div>

      <div className={"text-container"}>
        <Typography>{dummyData}</Typography>
      </div>
    </AddUsersContainer>
  );
};

export default UserFormPanel;
