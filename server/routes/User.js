const express = require("express");

const router = express.Router();
const UserModel = require("../models/User");

router.get("/", (req, res) => {
  res.send("USERS-from-router");
});

router.get("/:id", (req, res) => {
  res.send("grab user by id");
});

/* Add User */
router.post("/", async (req, res) => {
  try {
    const newUser = {
      name: req.body?.name,
      username: req.body?.username,
      email: req.body?.email,
    };

    const response = await UserModel.create({
      ...newUser,
      address: {
        street: req.body?.street ? req.body?.street : "",
        city: req.body?.city ? req.body?.city : "",
        zipcode: req.body?.zipcode ? req.body?.zipcode : "",
      },
      phone: req.body?.phone ? req.body?.phone : "",
    });

    res.send({
      id: response._id,
      name: response.name,
      email: response.email,
      address: {
        ...response.address,
      },
      phone: response.phone,
      createdAt: response.createdAt,
      updatedAt: response.updatedAt,
    });
  } catch (err) {
    res.json({
      message: `Failed to add user - ${err.message}`,
    });
  }
});

/*update user */
router.patch("/:id", (req, res) => {
  res.send("update user");
});

module.exports = router;
