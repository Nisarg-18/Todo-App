const Todo = require("../models/todo");

editTodo = async (req, res) => {
  try {
    const id = req.params.id;
    if (id) {
      const todo = await Todo.findById(id);
      const title = req.body.title;
      const description = req.body.description;

      if (title) {
        todo.title = title;
      }

      if (description) {
        todo.description = description;
      }

      await Todo.findByIdAndUpdate(id, todo);

      res.status(200).json({
        message: "Updated Successfully",
      });
    } else {
      res.sendStatus(400);
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = editTodo;
