'use strict';

var connection = require('./user-connection'),
    UserModel = () => {};
  
UserModel.getAll = (callback) => {
  connection
    .find()
    .exec((err, docs) => {
      if(err) throw err;
      callback(docs);
    })
};

module.exports = UserModel;