const express = require('express');
const routes = require('./routes');

var app = express();


// middlewares
app.use(routes);









// port
const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
})
