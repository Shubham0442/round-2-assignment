const { Router } = require("express");
const { Group } = require("../Models/groupModel");
const groupController = Router();

groupController.post("/add", async (req, res) => {
  const data = req.body;
  const newGroup = new Group(data);
  await newGroup.save();
  res.send({ msg: "New group created" });
});

groupController.get("/")

module.exports = { groupController };
