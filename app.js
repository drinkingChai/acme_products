const express = require('express');
const swig = require('swig');
// const bodyParser = require('body-parser');
const routes = require('./routes');


// app and configuration
var app = express();
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
app.set('views', __dirname + '/views');
app.set('view cache', false);
swig.setDefaults({ cache: false });



// middlewares
app.use(routes);
// app.use(bodyParser);








// port
const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
})
