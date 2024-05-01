import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLazyPostLoginHomeQuery } from "../../services/loginServices";
import { setInput, setHomeAuth } from "../../store/slices/loginSlice";
import { TextField, Button } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userName, password, homeAuth } = useSelector(
    (state) => state.loginSlice,
  );

  //https://stackoverflow.com/a/75160992/7857134 : use Lazy so that post call can be made with button click
  const [submitLoginCreds, { data, error, isLoading }] =
    useLazyPostLoginHomeQuery();

  const isHomeAuth = data?.isHomeAuth;
  console.log("what is data, error, isLoading", isHomeAuth, error, isLoading);

  const handleUpdateInput = (e) => {
    const name = e.target?.name;
    dispatch(setInput({ [name]: e.target?.value }));
  };

  const handeSubmitLogin = () => {
    // pass args, define them first in postLoginHome @ ../../services/loginServices
    submitLoginCreds({ userName, password });
  };

  const handleLoginStatus = (isHomeAuth) => {
    dispatch(setHomeAuth(isHomeAuth));
    if (isHomeAuth) navigate("users");
  };

  useEffect(() => {
    handleLoginStatus(isHomeAuth);
  }, [isHomeAuth]);

  console.log("what is homeAuth", homeAuth);
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
