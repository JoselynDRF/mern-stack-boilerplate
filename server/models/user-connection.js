'use strict';

var mongoose = require('mongoose'),
    conf = require('./db-config'),
    Schema = mongoose.Schema;

var UserSchema = new Schema (
  {
    name: "string",
  }, 
  { 
    collection: "users"
  }
)

var UserModel = mongoose.model("User", UserSchema);

mongoose.connect(`mongodb:\/\/${conf.mongo.host}/${conf.mongo.database}`);
module.exports = UserModel;