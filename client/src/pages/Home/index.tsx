import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

import { setInput } from "../../store/slices/loginSlice";
import { submitHomeAuthLogin } from "../../thunks/login";

import { TextField, Button } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userName, password, isHomeAuth, isSubmit } = useSelector((state) => {
    console.log("what is state", state);
    return state?.loginSlice;
  });

  const handleUpdateInput = (e) => {
    const name = e.target?.name;
    dispatch(setInput({ [name]: e.target?.value }));
  };

  const handeSubmitLogin = async () => {
    const loginReponse = await dispatch(submitHomeAuthLogin());

    if (loginReponse?.payload?.data?.isHomeAuth === true) {
      navigate("users");
    }
  };

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

      <div>
        {isHomeAuth === false && isSubmit && (
          <Alert severity="error">Incorrect User Name and or Password</Alert>
        )}
      </div>
    </div>
  );
};

export default Home;
