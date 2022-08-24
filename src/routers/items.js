const express = require("express");
const router = new express.Router();

const {
  getAllTodos,
  insertNew,
  deleteItem,
  updateCompleted,
  searchTodo
} = require("../middleware/todoitems");

router.get("/todo", getAllTodos);
router.get("/todo/search", searchTodo);

router.put("/todo",insertNew);
router.delete("/todo", deleteItem);
router.patch("/todo", updateCompleted);


module.exports = router;
