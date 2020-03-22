"use strict";
const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`You reqested a cat whose id is ${id}`);
});

router.post("/", (req, res) => {
  res.send("With this endpoint you can add cats.");
});

router.put("/", (req, res) => {
  res.send("With this endpoint you can edit cats.");
});

router.delete("/", (req, res) => {
  res.send("With this endpoint you can delete cats.");
});

module.exports = router;
