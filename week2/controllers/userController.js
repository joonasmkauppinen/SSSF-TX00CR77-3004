"use strict";
const userModel = require("../models/userModel");
const users = userModel.users;

const getUserList = (req, res) => {
  res.json(users);
};

const getUser = (req, res) => {
  const byId = item => item.id === req.params.id;
  const user = users.filter(byId).pop();
  delete user.password;
  res.json(user);
};

module.exports = {
  getUser,
  getUserList
};
