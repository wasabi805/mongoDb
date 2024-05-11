const UserModel = require("../models/User");
var _ = require("lodash");

/* Grab all Users */

/*  -----  Create a Single User ------ */
const createNewUser = async (req, res) => {
  console.log('creating a new user', req.body)
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
    console.log('failed to add a user', err.response)
    res.json({
      message: `Failed to add user - ${err.message}`,
    });
  }
};

/* -----    Delete a user -----*/

const deleteUser = async (req, res) => {
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
const updateUser = async (req, res) => {
  const _id = req.body.userId;
  const userUpdate = req.body.user;

  try {
    /* FIND user by ID and REPLACE */
    const response = await UserModel.findOneAndUpdate(
      { _id: _id },
      {
        userName: userUpdate.userName,
        name: userUpdate.name,
        email: userUpdate.email,
      },
    );

    /* GET ALL USERS AFTER UPDATING */
    const allUsers = await UserModel.find({}).sort({ createdAt: -1 });

    if (!response) {
      return res.send({
        msg: "ERROR | no user found to update",
      });
    }

    res.send({
      status: 200,
      users: allUsers,
    });
  } catch (err) {
    res.send({ msg: "ERROR | updateUser route hit" });
  }
};

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
  console.log('FETCH ALL USERS WAS HIT')
  console.log('FECTHALL USERS REQ' , )
  try {
    const allUsers = await UserModel.find({}).sort({ createdAt: -1 });
    const response = {
      message: "SUCCESS - retrieved all users",
      users: allUsers,
    }
    console.log('FETCH ALL USERS', response)

    return res.send(response);

  } catch (error) {
    console.log('there was an error fetching ', error.response)

    return res.send({
      message: "Failed to grab all users",
    });
  }
};

module.exports = {
  deleteUser,
  createNewUser,
  getAllUsers,
  updateUser,
  getSingleUser,
};
