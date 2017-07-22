var express = require('express');
var router = express.Router();
var dbController = require('../controller/dbController');

/* GET home page. */
router.post('/add', dbController.add);

router.get('/search', dbController.search);

module.exports = router;