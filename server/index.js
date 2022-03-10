const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const colors = require("colors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./api/errorMiddleware");
const connectDB = require("./database.js");

connectDB();

const app = express();

//app.use(bodyParser.json());
app.use(cors());

//app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/students", require("./api/studentRoute"));

app.use(errorHandler);

// API

app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
