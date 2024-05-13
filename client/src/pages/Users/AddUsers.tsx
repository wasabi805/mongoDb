import React from "react";
import {
  Button,
  Box,
  FormControl,
  InputLabel,
  FormLabel,
  Typography,
  OutlinedInput,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  addUserData,
  addUserDataAddressInfo,
} from "../../store/slices/userSlice";
import { userApis } from "../../store/slices/userSlice";
import { AddUsersContainer } from "./styled";

const AddUsers = () => {
  const dispatch = useAppDispatch();

  const userSlice = useAppSelector((state) => state.userSlice);
  console.log("what is userSlice", userSlice);
  const { createUser } = userApis;
  React.useEffect(() => {
    console.log("userSlice on mount", userSlice);
  }, []);

  const handleUpdateAddUserForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch(addUserData({ [name]: value }));
  };

  const handleAddUserDataAddressInfo = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch(addUserDataAddressInfo({ [name]: value }));
  };

  // addUserDataAddressInfo

  const handleSubmitNewUser = () => {
    alert("submit clicked");
    dispatch(createUser({})).then((res) => {
      /* you could potentialy dipatch here but avoid doing so*/
      // console.log('what is res', res)
      return res;
    });
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
              className={"submit-button"}
              variant={"contained"}
              // sx={{ width: "8rem" }}
              onClick={handleSubmitNewUser}
            >
              add user!
            </Button>
          </div>
        </Box>
        <Typography className={"text-container"}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham. Contrary to popular
          belief, Lorem Ipsum is not simply random text. It has roots in a piece
        </Typography>
      </AddUsersContainer>
    </div>
  );
};

export default AddUsers;
