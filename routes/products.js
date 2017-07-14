const express = require('express');
const db = require('../db');
var router = express.Router();


router.get('/', function(req, res) {
  // get top product
  res.render('index', { product: db.getTopRated() });
})

router.get('/products', function(req, res) {
  // get all products
  res.render('products', { allProducts: db.all() });
})

router.get('/products/:id', function(req, res) {
  // format of get
  // var id = req.params.id*1 //to convert it to int
  // var product = db.get(id);
  // res.render('product/' + id, { name: product.name, rating: product.rating });
})

router.post('/products', function(req, res) {
  // format of post
  // var name = req.body.name, rating = req.body.rating
  // db.add(name, rating);
  // res.redirect('/');
})

router.delete('/products/:id', function(req, res) {
  // format of delete
  // var name = req.params.id
  // db.delete(id);
  // res.redirect('/');
})


module.exports = router;
