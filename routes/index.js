var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/about', function(req, res) {
  res.render('about')
})

router.get('/sponsorship', function(req, res) {
  res.render('sponsorship')
})

router.get('/reseller', function(req, res) {
  res.render('reseller')
})

router.get('/faq', function(req, res) {
  res.render('faq')
})

module.exports = router;
