"use strict";
const userModel = require("../models/userModel");
const users = userModel.users;

const getUserList = (req, res) => {
  res.json(users);
};

const getUser = (req, res) => {
  res.json(users.filter(item => item.id === req.params.id));
};

module.exports = {
  getUser,
  getUserList
};
