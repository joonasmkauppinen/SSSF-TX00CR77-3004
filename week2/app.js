"use strict";
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const cat = require("./routes/catRoute.js");
const user = require("./routes/userRoute");
const auth = require("./routes/authRoute");
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", auth);
app.use("/cat", passport.authenticate("jwt", { session: false }), cat);
app.use("/user", passport.authenticate("jwt", { session: false }), user);
app.use("/static", express.static("public_html"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
