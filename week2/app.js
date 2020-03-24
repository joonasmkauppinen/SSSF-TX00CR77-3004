"use strict";
const express = require("express");
const app = express();
const cat = require("./routes/catRoute.js");
const user = require("./routes/userRoute");
const port = 3000;

app.use("/cat", cat);
app.use("/user", user);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
