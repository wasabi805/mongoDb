const UserModel = require("../models/User");

/* Grab all Users */

/*  -----  Create a Single User ------ */
const createNewUser = async (req, res) => {
  try {
    const newUser = {
      name: req.body?.name,
      userName: req.body?.userName,
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
    console.log("what is response | Add USer", response);
    res.send({
      _id: response._id,
      name: response.name,
      email: response.email,
      userName: response.userName,
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
};

/* -----    Delete a user -----*/

const deleteUser = async (req, res) => {
  console.log("delete user", req.params);

  try {
    const User = await UserModel.deleteOne({ _id: req?.params?.userId });
    if (!User) {
      return res.send({
        msg: `message: No User found with id of ${req?.params?.userId}`,
      });
    }

    return res.send({
      msg: `delete sucess! `,
      status: 200,
      _id: req?.params?.userId,
    });
  } catch (error) {}

  res.send({
    msg: "will delete user",
  });
};

/*----- update a new User -----  */

/*----- Get a single new User -----  */

const getSingleUser = async (req, res) => {
  console.log("verify single user", req.params);

  const { id } = req.params;

  try {
    const User = await UserModel.findById(id);

    if (!User) {
      return res.send({ message: "No User found" });
    }

    return res.send({
      message: "User found!",
      user: User,
    });
  } catch (error) {
    res.send({ message: "getSingleUser - Error connecting to database" });
  }
};

/*----- Get ALL Users -----  */
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find({}).sort({ createdAt: -1 });
    return res.send({
      message: "SUCCESS - retrieved all users",
      users: allUsers,
    });
  } catch (error) {
    return res.send({
      message: "Failed to grab all users",
    });
  }
};

module.exports = {
  deleteUser,
  createNewUser,
  getAllUsers,
  getSingleUser,
};
