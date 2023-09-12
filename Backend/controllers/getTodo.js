const Todo = require("../models/todo");

getTodo = async (req, res) => {
  try {
    const id = req.params.id;

    if (id) {
      const todo = await Todo.findById(id);
      if (todo) {
        res.status(200).json({
          todo: todo,
        });
      } else {
        res.sendStatus(400);
      }
    } else {
      res.sendStatus(400);
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = getTodo;
