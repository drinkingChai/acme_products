const express = require('express');
const db = require('../db');
var router = express.Router();

router.get('/', function(req, res) {
  // get top product
  res.render('index', { product: db.getTopRated() });
})

router.get('/products', function(req, res) {
  // get all products
  res.render('products', { allProducts: db.all(), topRated: db.getTopRated() });
})

router.get('/products/:id', function(req, res) {
  res.render('product', { product: db.get(req.params.id*1) }); //to convert it to int
})

router.post('/products', function(req, res) {
  var name = req.body.name, rating = req.body.rating*1
  if (!name || !rating || Number.isNaN(rating)) {
    res.render('error');
    return;
  }
  db.add(name, rating);
  res.redirect('/products');
})

router.delete('/products/:id', function(req, res) {
  db.del(req.params.id*1);
  res.redirect('/products');
})

module.exports = router;
