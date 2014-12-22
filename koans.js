var express = require('express');
var app = express();

// static files
app.use(express.static(process.cwd() + '/public'));

var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Koans listening at http://%s:%s', host, port)
})
