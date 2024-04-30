const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    username: {
      type: String,
    },
    email: {
      type: String,
    },

    address: {
      street: { type: String },
      city: { type: String },
      zipcode: { type: String },
    },
    phone: { type: String },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", UserSchema);
