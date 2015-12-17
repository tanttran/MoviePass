var express = require('express');
var router = express.Router();
var request = require('request');
var bodyParser = require('body-parser');
var textParser = bodyParser.json();

router.post('/', function(req, res) {
  var keyword = req.body;
  request('http://api.themoviedb.org/3/keyword/id/moviesapi_key=5e7c67dc92a8469124e97038b3422c88, 
    function(error, response, body){
      if(response.statusCode == 200) {
        res.send(body);
      } else {
        console.log(error);
      }
    });
});

module.exports = router;