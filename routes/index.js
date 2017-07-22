var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/add', function(req, res, next) {
  console.log(req.body.id);
  console.log(req.body.name);
  res.json({
    code: 200,
    msg: 'add ok'
  });
});
router.get('/search', function(req, res, next) {
  res.json({
    code: 200,
    msg: 'search ok'
  });
});

module.exports = router;