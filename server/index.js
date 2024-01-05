const express = require("express");
const { connect } = require("./config/connection");
const { userController } = require("./controllers/userController");
const cors = require("cors");
const { groupController } = require("./controllers/groupController");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/users", userController);
app.use("/group", groupController);

app.listen("8080", async () => {
  try {
    await connect;
    console.log("app is running on http://localhost:8080");
  } catch (error) {
    console.log("err:", error);
  }
});
