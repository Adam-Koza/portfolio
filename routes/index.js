var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Blog Post App',
    app: {
      message: 'Coin Market Cap',
    }
  });
});

module.exports = router;
