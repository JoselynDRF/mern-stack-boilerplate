'use strict';

var express = require('express'),
    router = express.Router();

var UserController = require('./../controllers/user-controller');

router.get('/api/users', UserController.getAll);

module.exports = router;