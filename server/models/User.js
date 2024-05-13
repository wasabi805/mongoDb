const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    userName: {
      type: String,
    },
    email: {
      type: String,
    },

    phone: { type: String },

    address: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      zipcode: { type: String },
    },
    
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", UserSchema);
