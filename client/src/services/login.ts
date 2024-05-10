import axios, { AxiosResponse } from "axios";
import { User } from "../types/Users";
import { getNodeUrl } from "../helpers.js";

export const postHomeLogin = async ({ userName, password }: User) => {
  const url = `${getNodeUrl}/api/login/home`;
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
