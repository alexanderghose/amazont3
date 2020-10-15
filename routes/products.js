var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/', function(req, res, next) {
  let products = ["lg big screen tv", "iphone x", "bose bluetooth earbuds"]
  res.send('welcome to amazon. our products are:' + products);
});

module.exports = router;
