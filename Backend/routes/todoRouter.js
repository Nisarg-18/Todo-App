const express = require("express");
const homeController = require("../controllers/home");
const getAllTodos = require("../controllers/getAllTodos");
const createTodo = require("../controllers/createTodo");
const getTodo = require("../controllers/getTodo");
const deleteTodo = require("../controllers/deleteTodo");
const editTodo = require("../controllers/editTodo");

const todoRouter = express.Router();

todoRouter.get("/", homeController);

todoRouter.get("/allTodos", getAllTodos);
todoRouter.post("/createTodo", createTodo);
todoRouter.get("/getTodo/:id", getTodo);
todoRouter.delete("/deleteTodo/:id", deleteTodo);
todoRouter.put("/editTodo/:id", editTodo);

module.exports = todoRouter;
