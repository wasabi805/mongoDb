import axios from "axios";

export const postHomeLogin = ({ userName, password }) => {
  const url = "http://localhost:8080/api/login/home";
  try {
    const resposne = axios({
      method: "POST",
      url,
      data: { userName, password },
    }).then((res) => res);

    return resposne;
  } catch (err) {
    console.log("failed postHomeLogin", err.resposne);
    alert("failed postHomeLogin");
  }
};
