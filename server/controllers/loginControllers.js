const verifyLoginHome = async (req, res) => {
  console.log("verify user | backend", req.body);
  res.send({ msg: "hit verifyLoginHome" });
};

module.exports = {
  verifyLoginHome,
};
