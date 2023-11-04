const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const loginRoutes = require("./Routes/Login");
const homeRoutes = require("./Routes/Home");
const errorRoutes = require("./Routes/Error");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(loginRoutes);
app.use(homeRoutes);
app.use(errorRoutes);
app.listen(4000);
