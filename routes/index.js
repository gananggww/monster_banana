var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res) {
  res.render('home')
})

router.get('/sponsorship', function(req, res) {
  res.render('home')
})

router.get('reseller', function(req, res) {
  res.render('home')
})

router.get('/faq', function(req, res) {
  res.render('home')
})

module.exports = router;
