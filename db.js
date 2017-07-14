const _ = require('lodash');

// hold product data
var productDb = [];

function genRandId() {
  var randId = Math.floor(Math.random() * (50000 - 5));
  productDb.forEach(function(item) {
    if (item.id === randId) randId = Math.floor(Math.random() * (50000 - 5));
  })
  return randId;
}

function all() {
  return _.cloneDeep(productDb);
}

function add(name, rating) {
  productDb.push({ id: genRandId(), name: name, rating: rating });
}

function getTopRated() {
  var topRated;
  productDb.forEach(function(item) {
    if (!topRated) topRated = item;
    else if (item.rating > topRated.rating) topRated = item;
  })
  return _.cloneDeep(topRated);
}

function get(id) {
  for (var i = 0; i < productDb.length; i++) {
    if (productDb[i].id === id) return _.cloneDeep(productDb[i]);
  }
}

function del(id) {
  for (var i = 0; i < productDb.length; i++) {
    if (productDb[i].id === id) {
      productDb.splice(i, 1);
      return;
    }
  }
}


// test
add('Anvil', 10);
add('TNT', 50);

console.log(productDb);

module.exports = {
  all: all,
  add: add,
  getTopRated: getTopRated,
  get: get,
  del: del
}
