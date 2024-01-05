const { Router } = require("express");
const { User } = require("../Models/userModel");
const userController = Router();

userController.post("/add", async (req, res) => {
  const userData = req.body;
  const newUser = new User(userData);
  await newUser.save();

  res.send({ msg: "New User added" });
});

userController.get("/", async (req, res) => {
  const allUsers = await User.find();
  res.setHeader("Content-Type", "application/json");
  res.send({ users: allUsers });
});

userController.get("/ungrouped", async (req, res) => {
  const allUsers = await User.find({ group: null });
  res.send({ users: allUsers });
});

userController.patch("/update", async (req, res) => {
  const { users, groupname } = req.body;
  console.log(req.body);
  let x;
  if (users && users.length > 0) {
    for (let i = 0; i < users.length; i++) {
      await User?.findByIdAndUpdate({ _id: users[i] }, { group: groupname });
    }

    res.setHeader("Content-Type", "application/json");
    res.send({ msg: "Hello World!" });
  } else {
    res.send({ msg: "Please select atleast one user" });
  }
});

module.exports = { userController };
