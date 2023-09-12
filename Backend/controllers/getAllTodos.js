const Todo = require("../models/todo");

getAllTodos = async (req, res) => {
  try {
    const allTodos = await Todo.find();
    res.status(200).json({
      todos: allTodos,
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = getAllTodos;
