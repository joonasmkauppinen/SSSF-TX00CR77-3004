"use strict";
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cat = require("./routes/catRoute.js");
const user = require("./routes/userRoute");
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/cat", cat);
app.use("/user", user);
app.use("/static", express.static("public_html"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
