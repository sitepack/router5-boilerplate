var path = require('path');
var express = require('express');
var app = express();

var port = 8080;
var dist = 'dist';
var distPath = path.join(process.cwd(), dist);

app.use(express.static(distPath));

app.get('/*', function (req, res) {
  if (req.accepts('html')) {
    res.sendFile(path.join(distPath, '404.html'));
  } else {
    res.status(404);
  }
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
