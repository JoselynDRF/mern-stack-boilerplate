const connection = require('./example-connection');

const ExampleModel = () => {};

ExampleModel.getAll = (callback) => {
  connection
    .find()
    .exec((err, docs) => {
      if (err) throw err;
      callback(docs);
    });
};

module.exports = ExampleModel;
