const express = require("express");

const router = express.Router();

const {
  getAllUsers,
  getSingleUser,
  createNewUser,
} = require("../controllers/userControllers");

/* Get a Single User */
router.get("/:id", getSingleUser);

/* Get All Users */
router.get("/", getAllUsers);

/* Add User */
router.post("/", createNewUser);

/*update user */
router.patch("/:id", (req, res) => {
  res.send("update user");
});

module.exports = router;
