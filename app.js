var express = require('express');
var app = express();
var api = require('./routes/api.js');

app.use(express.static('public'));

app.use('/routes/api', api);

app.listen(1337);
console.log('1337 is Listening');