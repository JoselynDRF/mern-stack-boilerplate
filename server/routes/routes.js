'use strict';

var express = require('express'),
    router = express.Router();

const users = [
  {
    "nombre": "Maria"
  },
  {
    "nombre": "Pedro"
  },
  {
    "nombre": "Luis"
  }
];

router.get('/api/users', (req, res) => {
  res.json({
    users: users
  })
});

module.exports = router;