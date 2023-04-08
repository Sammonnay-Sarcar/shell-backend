const express = require("express");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config
require("dotenv").config({ path: "./config/config.env" });
console.log(`${process.env.PORT}`);
module.exports = app;
