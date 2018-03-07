const mongoose = require('mongoose');
const config = require('./db-config');

const { Schema } = mongoose;

const ExampleSchema = new Schema(
  { title: 'string' },
  { collection: 'examples' },
);

const ExampleModel = mongoose.model('Example', ExampleSchema);

mongoose.connect(`mongodb://${config.mongo.host}/${config.mongo.database}`);

module.exports = ExampleModel;
