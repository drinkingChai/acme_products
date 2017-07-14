const express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('index', { lol: 'is so cool' });
})

router.get('/products', function(req, res) {
  res.render('productTemplate');
})

router.get('/products/:id', function(req, res) {

})

router.post('/products', function(req, res) {

})

router.delete('/products/:id', function(req, res) {

})


module.exports = router;
