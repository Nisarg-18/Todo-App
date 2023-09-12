const Todo = require("../models/todo");

createTodo = async (req, res) => {
  try {
    const title = req.body.title;
    const description = req.body.description;

    if (title && description) {
      await Todo.create({
        title,
        description,
      });
      res.status(200).json({
        message: "Todo Created Successfully",
      });
    } else {
      res.status(400).json({
        message: "Title or Description missing",
      });
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = createTodo;
