const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
  email: { type: String, unique: true },
  password: { type: String },
  userName: { type: String, unique: true }
});

module.exports = mongoose.model("User", userSchema);
