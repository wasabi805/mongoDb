// import React from "react";
import { LoginForm } from "./styled";

import { setInput } from "../../store/slices/loginSlice";
import { submitHomeAuthLogin } from "../../thunks/login";

import { OutlinedInput, Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Alert,
  FormControl,
  InputLabel,
  FormLabel,
  Typography,
} from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userName, password, isHomeAuth, isSubmit } = useAppSelector(
    (state) => {
      return state?.loginSlice;
    },
  );

  const handleUpdateInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const name = e.target?.name;
    dispatch(setInput({ [name]: e.target?.value }));
  };

  const handeSubmitLogin = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const loginReponse: any = await dispatch(submitHomeAuthLogin({}));
    console.log("what is the login response", loginReponse);
    if (loginReponse.payload?.data?.isHomeAuth === true) {
      navigate("dashboard");
    }
  };

  return (
    <LoginForm className="login-form">
      <Typography variant="body1" className="login-info" gutterBottom>
        Where does it come from? Contrary to popular belief, Lorem Ipsum is not
        simply random text. It has roots in a piece of classical Latin
        literature from 45 BC, making it over 2000 years old. Richard
        McClintock, a Latin professor at Hampden-Sydney College in Virginia,
        looked up one of the more obscure Latin words, consectetur, from a Lorem
        Ipsum passage, and going through the cites of the word in classical
        literature, discovered the undoubtable source. Lorem Ipsum comes from
        sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
        Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
        treatise on the theory of ethics, very popular during the Renaissance.
        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
        from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
        since the 1500s is reproduced below for those interested. Sections
        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
        also reproduced in their exact original form, accompanied by English
        versions from the 1914 translation by H. Rackham.
      </Typography>

      <Box className="login-form-inputs">
        {/* in this mode : {import.meta.env.MODE} */}

        <Typography className="nputs-title" variant="h4" gutterBottom>
          Some Title
        </Typography>

        <FormControl sx={{ marginBottom: "1rem" }}>
          <FormLabel>User Name</FormLabel>
          <InputLabel htmlFor="userName" />
          <OutlinedInput
            onChange={(e) => handleUpdateInput(e)}
            name={"userName"}
            value={userName}
            error={false}
          />
        </FormControl>

        <FormControl sx={{ marginBottom: "1rem" }}>
          <FormLabel>Password</FormLabel>
          <InputLabel htmlFor="password" />
          <OutlinedInput
            onChange={(e) => handleUpdateInput(e)}
            name={"password"}
            value={password}
            error={false}
          />
        </FormControl>

        <div>
          <Button variant="contained" onClick={() => handeSubmitLogin()}>
            Login
          </Button>
        </div>

        <div>
          {isHomeAuth === false && isSubmit && (
            <Alert severity="error">Incorrect User Name and or Password</Alert>
          )}
        </div>
      </Box>
    </LoginForm>
  );
};

export default Login;
