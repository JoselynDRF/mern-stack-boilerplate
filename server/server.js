const express = require('express');
const routes = require('./routes/routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(`${__dirname}./../public`));
app.use(routes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
