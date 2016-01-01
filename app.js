var express = require('express');
var app = express();
var tmdb = require('./routes/tmdb.js');


app.use(express.static('public'));

app.use('/movie', tmdb);
// app.locals.genres = require('./genres.json');


app.listen(1337);
console.log('1337 is Listening');