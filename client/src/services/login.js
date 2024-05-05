import axios from "axios";

export const postHomeLogin = async({ userName, password }) => {

  const url = "http://localhost:8080/api/login/home";
  try {
    const resposne = await axios({
      method: "POST",
      url,
      data: { userName, password },
    }).then((res) => { return res });
      
    return resposne;

  } catch (err) {
    console.log("failed postHomeLogin", err.resposne);
    alert("failed postHomeLogin");
  }
};
