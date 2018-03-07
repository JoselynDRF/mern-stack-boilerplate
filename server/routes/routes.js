const express = require('express');
const ExampleController = require('./../controllers/example-controller');

const router = express.Router();
router.get('/api/examples', ExampleController.getAll);

module.exports = router;
