import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLazyPostLoginHomeQuery } from "../../services/loginServices";
import { setInput } from "../../store/slices/loginSlice";
import { TextField, Button } from "@mui/material";

const Home = () => {
  const dispatch = useDispatch();

  //https://stackoverflow.com/a/75160992/7857134 : use Lazy so that post call can be made with button click
  const [submitLoginCreds, { data, error, isLoading }] =
    useLazyPostLoginHomeQuery();
  console.log("what is data, error, isLoading", data, error, isLoading);

  const handleUpdateInput = (e) => {
    const name = e.target?.name;
    dispatch(setInput({ [name]: e.target?.value }));
  };

  const handeSubmitLogin = () => {
    // pass args, define them first in postLoginHome @ ../../services/loginServices
    submitLoginCreds({ userName: "foo", password: "bar" });
  };

  const { userName, password } = useSelector((state) => state.loginSlice);

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
