const verifyLoginHome = async (req, res) => {
  const home_login_user_name = process.env.HOME_PAGE_LOGIN_USERNAME;
  const home_login_password = process.env.HOME_PAGE_LOGIN_PASSWORD;

  const { userName, password } = req.body;
  
  const isHomeAuth =
    home_login_user_name === userName && home_login_password === password;
  res.send({ isHomeAuth });
};

module.exports = {
  verifyLoginHome,
};
