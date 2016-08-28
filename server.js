// config/server.js

'use strict';

//create an express application
var express         = require('express');
var app             = express();

// New call to compress content
//app.use(express.compress());

var oneDay = 86400000;

app.use('/', express.static(__dirname + '/dist', { maxAge: oneDay }));



// START THE SERVER
var port = process.env.PORT || 8080;

app.listen(port, function(){
  console.log('Server started on port ' + port);
});