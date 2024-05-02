import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setInput, setHomeAuth } from "../../store/slices/loginSlice";
import { submitHomeAuthLogin } from "../../services/loginServices";

import { TextField, Button } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userName, password, homeAuth, test } = useSelector(
    (state) => state.loginSlice,
  );

  const handleUpdateInput = (e) => {
    const name = e.target?.name;
    dispatch(setInput({ [name]: e.target?.value }));
  };

  const handeSubmitLogin = () => {
    dispatch(submitHomeAuthLogin({ test: "mosdef" }));
  };
  console.log("what is userName, password,", { userName, password });
  console.log("whatis test", test);
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

        {homeAuth === false && userName !== "" && password !== "" && "ERROR"}
      </div>
    </div>
  );
};

export default Home;
