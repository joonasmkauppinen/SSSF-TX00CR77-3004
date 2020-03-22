"use strict";
const express = require("express");
const app = express();
const cat = require("./routes/catRoute.js");
const port = 3000;

app.use("/cat", cat);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
