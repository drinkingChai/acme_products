const express = require('express');
const swig = require('swig');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const routes = require('./routes/products');


// app and configuration
var app = express();
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
app.set('views', __dirname + '/views');
app.set('view cache', false);
swig.setDefaults({ cache: false });



// middlewares
// all middleware should be defined before routes!!!!
app.use(bodyParser.urlencoded( { extended: false } ));
// specify the key in the req that will override the method!
// method override specs: original method will be stored in req.originalMethod
app.use(methodOverride('_method'));
app.use(routes);








// port
const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
})
