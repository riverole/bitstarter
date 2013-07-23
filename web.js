var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
    var buff = fs.readFile("/home/linodeadmin/bitstarter/index.html");
    var str = buff.toString();
    response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
