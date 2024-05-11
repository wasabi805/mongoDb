const verifyLoginHome = async (req, res) => {
  console.log('trying to validate a user', req.body)

  const home_login_user_name = process.env.HOME_PAGE_LOGIN_USERNAME;
  const home_login_password = process.env.HOME_PAGE_LOGIN_PASSWORD;

  const { userName, password } = req.body;

  try {
    const isHomeAuth =
      home_login_user_name === userName && home_login_password === password;
    return res.send({ isHomeAuth });
  } catch (error) {

    console.log("failed at login", error.response);

    return res.send({
      msg: "failed at login",
      error: error.response,
    });
  }

  
};

module.exports = {
  verifyLoginHome,
};
