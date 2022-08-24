const express = require('express');
const cors = require("cors");
require('./services/mongoose')
const TodoListItemsRouter = require("./routers/items");
const { success, fail } = require("./middleware/sendStatus");

const corsOptions ={
   origin:'*'
}

const app = express();

app.use(cors(corsOptions)) 

app.use(express.json());

app.use(TodoListItemsRouter);
app.use(success)
app.use(fail);

module.exports = app;