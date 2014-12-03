var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express', name:'Chauncey' });
});
router.get('/test', function(req, res) {
	res.render('index', { title: 'Where Are We', name:'Chauncey'});
});

module.exports = router;
