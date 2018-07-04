var express 	= require('express');
var app 		= express();
var port 		= process.env.PORT || 3000;

var routes = require('./routes/addresses');
app.use('/api/addresses', routes);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('yu track api started on: ' + port);