const express = require("express");

const router = express.Router();

const {
  deleteUser,
  getAllUsers,
  getSingleUser,
  createNewUser,
  updateUser,
} = require("../controllers/userControllers");

/* Delete a single user */
router.delete("/:userId", deleteUser);

/* Get a Single User */
router.get("/:userId", getSingleUser);

/* Get All Users */
router.get("/", getAllUsers);

/* Add User */
router.post("/", createNewUser);

/*update user */
router.patch("/:userId", updateUser);

module.exports = router;
