import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setInput, setHomeAuth } from "../../store/slices/loginSlice";
import { submitHomeAuthLogin } from "../../thunks/login";

import { TextField, Button } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userName, password, isHomeAuth, test } = useSelector(
    (state) => state.loginSlice,
  );

  const handleUpdateInput = (e) => {
    const name = e.target?.name;
    dispatch(setInput({ [name]: e.target?.value }));
  };

  const handeSubmitLogin = () => {
    dispatch(submitHomeAuthLogin());
  };

  const handleEnterSite = useCallback(
    ({ isHomeAuth }) => {
      if (isHomeAuth === true) {
        navigate("users");
      }
    },
    [navigate],
  );

  useEffect(() => {
    handleEnterSite({ isHomeAuth });
  }, [isHomeAuth, handleEnterSite]);

  return (
    <div style={{}}>
      <div>
        <TextField
          placeholder="user"
          onChange={(e) => handleUpdateInput(e)}
          name={"userName"}
          value={userName}
        />
        <TextField
          placeholder="password"
          onChange={(e) => handleUpdateInput(e)}
          name={"password"}
          value={password}
        />
      </div>

      <div>
        <Button variant="contained" onClick={() => handeSubmitLogin()}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Home;
