const express = require("express");
const app = express();
const port = 3000;
const route = require("./query.js");

app.use("/", route);

// console.log("berhasil running");

app.listen(port);
