var fs = require('fs');

var express = require('express');

var app = express();

app.get('/', function(request, response) {
    buf = fs.readFileSync('index.html');
    out = buf.toString();
    response.send(out);
});

var port = process.env.PORT || 8080
app.listen(port, function() {
  console.log("Listening on " + port);
});
