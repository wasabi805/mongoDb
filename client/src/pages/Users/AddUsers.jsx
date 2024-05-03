import React from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "../../store/slices/userSlice";
import { userApis } from "../../store/slices/userSlice";

const AddUsers = () => {
  const dispatch = useDispatch();

  const userSlice = useSelector((state) => state.userSlice);
  const { name, userName, email, loading } = userSlice;
  const { createUser } = userApis;

  const handleUpdateAddUserForm = (e) => {
    const { name, value } = e.target;
    dispatch(addUserData({ [name]: value }));
  };

  const handleSubmitNewUser = () => {
    dispatch(createUser()).then((res) => {
      /* you could potentialy dipatch here but avoid doing so*/
      // console.log('what is res', res)
      return res;
    });
  };

  return (
    <div
      style={{
        border: "1px solid lime",
        marginTop: "1rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      Add Users
      <TextField
        placeholder="user name"
        sx={{ width: "18rem" }}
        name={"userName"}
        value={userName}
        onChange={(e) => handleUpdateAddUserForm(e)}
      />
      <TextField
        placeholder="name"
        sx={{ width: "18rem" }}
        name={"name"}
        value={name}
        onChange={(e) => handleUpdateAddUserForm(e)}
      />
      <TextField
        placeholder="email"
        sx={{ width: "18rem" }}
        name={"email"}
        value={email}
        onChange={(e) => handleUpdateAddUserForm(e)}
      />
      <Button
        variant={"contained"}
        sx={{ width: "8rem" }}
        onClick={() => handleSubmitNewUser()}
      >
        add user
      </Button>
      {loading === false && "not loading"}
      {loading === true && "is loading"}
    </div>
  );
};

export default AddUsers;
