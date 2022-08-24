const mongoose = require("mongoose");

const TodoListSchema =  new mongoose.Schema({
        complete: Boolean,
        task: String,
        id: String,
      })

const TodoList =  mongoose.model("todos", TodoListSchema)

module.exports = TodoList;
