var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/hello', function(req, res) {
  console.log('hello world was called');

  res.send('hello').end();
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});
