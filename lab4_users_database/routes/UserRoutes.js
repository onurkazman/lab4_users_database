const express = require("express");
const userModel = require("../models/User");
const app = express();

app.get("/users", async (req, res) => {
  const users = await userModel
    .find({})
    .select("name username email address phone website company");

  try {
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/users", async (req, res) => {
  const user = new userModel(req.body);

  try {
    await user.save((err) => {
      if (err) {
        //Custome error handling
        //console.log(err.errors['firstname'].message)
        //console.log(err.errors['lastname'].message)
        //console.log(err.errors['gender'].message)
        //console.log(err.errors['salary'].message)
        res.send(err);
      } else {
        res.send(user);
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
});
module.exports = app;
