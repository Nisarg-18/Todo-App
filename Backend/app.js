require("dotenv").config();

const express = require("express");
const connectToDb = require("./db/connectDb");
const todoRouter = require("./routes/todoRouter");
const cors = require("cors");

const app = express();

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", todoRouter);

module.exports = app;
