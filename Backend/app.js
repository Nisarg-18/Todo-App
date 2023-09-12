require("dotenv").config();

const express = require("express");
const connectToDb = require("./db/connectDb");
const todoRouter = require("./routes/todoRouter");

const app = express();

connectToDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", todoRouter);

module.exports = app;
