import axios, { AxiosResponse } from "axios";
import { User } from "../types/Users";

export const postHomeLogin = async ({ userName, password }: User) => {
  const url = `${import.meta.env.VITE_BACKEND}/api/login/home`;

  console.log(
    "what is url | postHomeLogin defined?",
    import.meta.env.VITE_BACKEND ,
  );
  console.log("what is args send | postHomeLogin", { userName });

  try {
    const resposne = await axios({
      method: "POST",
      url,
      data: { userName, password },
    }).then((res: AxiosResponse) => {
      return res;
    });

    return resposne;
  } catch (err) {
    console.log("failed login", err);

    // console.log("failed postHomeLogin", err.resposne);
    alert("failed postHomeLogin");
  }
};
