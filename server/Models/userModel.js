const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  mobile: { type: Number },
  group: { type: String, default: null }
});

const User = mongoose.model("user", userSchema);

module.exports = { User };
