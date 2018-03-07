const express = require('express');
const app = express();
const routes = require('./routes/routes');

app.use(express.static(__dirname + './../public'));
app.use(routes);

app.listen(3000, function () {
  console.log('server on port 3000');
});
