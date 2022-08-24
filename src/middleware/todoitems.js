const userData = require("../model/todoData");

const handleResult = async (reqResult ,req, res, next) => {
  try {
      let result = await reqResult
      console.log(result);
      if (!result || result.errors) next( Error(result.errors? result.errors : "no data") );
      res.body = result;
      next();
    } catch (e) {
      next(e)
    }
};

module.exports = {
  insertNew: async (req, res, next) => {
      const newOne = new userData(req.body);
      let result = newOne.save();
      handleResult(result, req, res, next)
  },

  deleteItem: async (req, res, next) => {
      let result = await userData.deleteOne(req.body);
      handleResult(result, req, res, next)
  },

  updateCompleted: async (req, res, next) => {
      let result = await userData.updateOne({ id: req.body.id }, {
        complete: req.body.complete,
      });
      handleResult(result, req, res, next)
  },

  searchTodo: async (req, res, next) => {
      const q = req.body.search
      let result = await userData.find({ task: q });
      handleResult(result, req, res, next)
  },

  getAllTodos: async (req, res, next) => {
      let result = await userData.find({});
      handleResult(result, req, res, next)
  }
};
