const Todo = require("../models/todo");

deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;

    if (id) {
      await Todo.deleteOne({ _id: id });
      res.status(200).json({
        message: "Deleted Todo",
      });
    } else {
      res.sendStatus(400);
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = deleteTodo;
