import axios from "axios";

export const fetchAllUsers = () => {
  const url = "http://localhost:8080/api/users";
  try {
    const resposne = axios({
      method: "GET",
      url,
      headers: { "Content-Type": "application/json" }
    }).then((res) => res);

    return resposne;
  } catch (error) {
    alert("failed fetch getUser");
  }
};

export const postNewUser = ({ name, userName, email }) => {
  const url = "http://localhost:8080/api/users";
  try {
    const resposne = axios({
      method: "POST",
      url,
      headers: { "Content-Type": "application/json" },
      data: {
        name,
        userName,
        email,
      },
    }).then((res) => res);

    return resposne;
  } catch (err) {
    alert("failed fetch getUser");
  }
};

export const postDeleteUser = async({ userId }) => {
  const url = `http://localhost:8080/api/users/${userId}`;

  try {
    const response = await axios({
      method: "DELETE",
      url,
      headers: { "Content-Type": "application/json" }
    }).then((res) => res).catch(
      err=>{
        console.log('tell me the err', err, userId)
      }
    );
    console.log("respose delete", response);
    return response;
  } catch (err) {
    console.log('tell me the error', err)
    alert("failed postDeleteUser");
  }
};
