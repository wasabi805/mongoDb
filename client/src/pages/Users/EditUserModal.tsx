import React from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { Button, Modal, Box, Typography, Input } from "@mui/material";
import {
  setEditUser,
  setEditUserInputs,
  setCancelEditUser,
} from "../../store/slices/userSlice";

import { userApis } from "../../store/slices/userSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const EditUserModal = () => {
  const dispatch = useAppDispatch();
  const { sendEditUser } = userApis;

  const { editUser } = useAppSelector((state) => state.userSlice);

  const handSetEditUserInputs = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    const editedUser = {
      [name]: value,
    };
    dispatch(setEditUserInputs({ editedUser }));
  };

  return (
    <Modal open={editUser.toggleModal}>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Edit this user
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Input
            placeholder="name"
            name="name"
            onChange={(e) => handSetEditUserInputs(e)}
            value={editUser!.user!.name}
          />
          <Input
            placeholder="userName"
            name="userName"
            onChange={(e) => handSetEditUserInputs(e)}
            value={editUser!.user?.userName}
          />
          <Input
            placeholder="email"
            name="email"
            onChange={(e) => handSetEditUserInputs(e)}
            value={editUser!.user!.email}
          />
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => {
              dispatch(
                setEditUser({ user: { userName: "", name: "", email: "" } }),
              );
              dispatch(setCancelEditUser());
            }}
          >
            cancel
          </Button>

          <Button onClick={() => dispatch(sendEditUser())}>save</Button>
        </div>
      </Box>
    </Modal>
  );
};

export default EditUserModal;
