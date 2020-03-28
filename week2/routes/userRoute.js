"use strict";
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getUserList);

router.get("/:id", userController.getUser);

router.post("/", (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  res.json(req.body);
});

router.put("/", (req, res) => {
  res.send("With this endpoint you can edit users.");
});

router.delete("/", (req, res) => {
  res.send("With this endpoint you can delete users.");
});

module.exports = router;
