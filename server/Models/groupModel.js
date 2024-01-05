const mongoose = require("mongoose");

const groupSchema = mongoose.Schema({
  groupname: { type: String },
  users: { type: Array }
});

const Group = mongoose.model("group", groupSchema);

module.exports = { Group };
