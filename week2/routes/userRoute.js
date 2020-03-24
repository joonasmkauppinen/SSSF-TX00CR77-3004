"use strict";
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getUserList);

router.get("/:id", userController.getUser);

router.post("/", (req, res) => {
  res.send("With this endpoint you can add users.");
});

router.put("/", (req, res) => {
  res.send("With this endpoint you can edit users.");
});

router.delete("/", (req, res) => {
  res.send("With this endpoint you can delete users.");
});

module.exports = router;
