// models/User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dob: { type: Date },
  address: { type: String },
  skills: [
    {
      name: String,
      percent: Number,
    },
  ],
  languages: [
    {
      name: String,
      percent: Number,
    },
  ],
  cgpa: { type: Number },
});

const Users = mongoose.model("Userprofile", UserSchema);
module.exports = Users;

