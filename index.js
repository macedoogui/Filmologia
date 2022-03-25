require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); 
app.use(express.urlencoded());
const routes = require('./src/routes/routes');

const port = process.env.PORT || 3000;

