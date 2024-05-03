import axios from "axios";

export const fetchAllUsers = () => {
  const url = "http://localhost:8080/api/users";
  try {
    const resposne = axios({
      method: "GET",
      url,
    }).then((res) => res);

    return resposne;
  } catch (error) {
    alert("failed fetch getUser");
  }
};

export const postNewUser =({ name, userName, email })=>{
  const url = "http://localhost:8080/api/users";
  try {
    const resposne = axios({
      method: "POST",
      url,
      data:{
        name, userName, email
      }
    }).then((res) => res);

    return resposne;
  } catch (error) {
    alert("failed fetch getUser");
  }
}
