var express = require('express');
var app = express();
var tmdb = require('./routes/tmdb.js');

app.use(express.static('public'));

app.use('/movie', tmdb);

var port = process.env.PORT || 1337;

app.listen(port);