const ExampleModel = require('../models/example-model');

const ExampleController = () => {};

ExampleController.getAll = (req, res) => {
  ExampleModel.getAll((docs) => {
    res.json({
      examples: docs,
    });
  });
};

module.exports = ExampleController;
