import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { userApis } from "../../../store/slices/userSlice";
import { useAppDispatch, useAppSelector } from "../../../store";
import {
  addUserData,
  addUserDataAddressInfo,
  setPanelAddUserForm,
} from "../../../store/slices/userSlice";

const UserFormPanel = () => {
  const dispatch = useAppDispatch();

  const userSlice = useAppSelector((state) => state.userSlice);
  const { createUser } = userApis;

  const handleUpdateAddUserForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    dispatch(addUserData({ [name]: value }));
  };

  const handleAddUserDataAddressInfo = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    dispatch(addUserDataAddressInfo({ [name]: value }));
  };
  return (
    <>
      <Box className={"col-1"}>
        <FormControl sx={{ marginBottom: "1rem" }}>
          <FormLabel>User Name</FormLabel>
          <InputLabel htmlFor="userName" />
          <OutlinedInput
            onChange={(e) => handleUpdateAddUserForm(e)}
            name={"userName"}
            value={userSlice.addUser.userName}
            error={false}
          />
        </FormControl>

        <FormControl sx={{ marginBottom: "1rem" }}>
          <FormLabel>Name</FormLabel>
          <InputLabel htmlFor="userName" />
          <OutlinedInput
            onChange={(e) => handleUpdateAddUserForm(e)}
            name={"name"}
            value={userSlice.addUser.name}
            error={false}
          />
        </FormControl>

        <FormControl sx={{ marginBottom: "1rem" }}>
          <FormLabel>Email</FormLabel>
          <InputLabel htmlFor="userName" />
          <OutlinedInput
            onChange={(e) => handleUpdateAddUserForm(e)}
            name={"email"}
            value={userSlice.addUser.email}
            error={false}
          />
        </FormControl>

        <FormControl sx={{ marginBottom: "1rem" }}>
          <FormLabel>Phone</FormLabel>
          <InputLabel htmlFor="phone" />
          <OutlinedInput
            onChange={(e) => handleUpdateAddUserForm(e)}
            name={"phone"}
            value={userSlice.addUser.phone}
            error={false}
          />
        </FormControl>
      </Box>

      <Box className={"col-2"}>
        <FormControl sx={{ marginBottom: "1rem" }}>
          <FormLabel>Street</FormLabel>
          <InputLabel htmlFor="street" />
          <OutlinedInput
            onChange={(e) => handleAddUserDataAddressInfo(e)}
            name={"street"}
            value={userSlice?.addUser?.address?.street}
            error={false}
          />
        </FormControl>
        <FormControl sx={{ marginBottom: "1rem" }}>
          <FormLabel>City</FormLabel>
          <InputLabel htmlFor="city" />
          <OutlinedInput
            onChange={(e) => handleAddUserDataAddressInfo(e)}
            name={"city"}
            value={userSlice?.addUser?.address?.city}
            error={false}
          />
        </FormControl>
        <FormControl sx={{ marginBottom: "1rem" }}>
          <FormLabel>State</FormLabel>
          <InputLabel htmlFor="state" />
          <OutlinedInput
            onChange={(e) => handleAddUserDataAddressInfo(e)}
            name={"state"}
            value={userSlice?.addUser?.address?.state}
            error={false}
          />
        </FormControl>
        <FormControl sx={{ marginBottom: "1rem" }}>
          <FormLabel>Zip Code</FormLabel>
          <InputLabel htmlFor="zipcode" />
          <OutlinedInput
            onChange={(e) => handleAddUserDataAddressInfo(e)}
            name={"zipcode"}
            value={userSlice?.addUser?.address?.zipcode}
            error={false}
          />
        </FormControl>
      </Box>

      <div className="button-row">
        <Button
          sx={{ maxHeight: "3rem" }}
          className={"submit-button"}
          variant={"contained"}
          // sx={{ width: "8rem" }}
          // onClick={handleSubmitNewUser}
          onClick={() =>
            dispatch(setPanelAddUserForm({ addUser: { panel: "avatar" } }))
          }
        >
          next
        </Button>
      </div>
    </>
  );
};

export default UserFormPanel;
