'use strict';

var UserModel = require('../models/user-model'),
    UserController = () => {};
  
UserController.getAll = (req, res, next) => {
  UserModel.getAll(docs => {
    res.json({
      users: docs
    })
  })
}

module.exports = UserController;