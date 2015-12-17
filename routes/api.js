var express = require('express');
var router = express.Router();
var request = require('request');
var bodyParser = require('body-parser');
var textParser = bodyParser.text();

router.use(textParser);

router.post('/', function(req, res) {
  var keyword = req.body;
  var requestUrl = 'http://api.themoviedb.org/3/search/movie?api_key=5e7c67dc92a8469124e97038b3422c88&query='+ keyword;
  console.log(requestUrl);
  request( requestUrl,
    function(error, response, body){
      if(response.statusCode == 200) {
        res.send(body);
      } else {
        console.log(error);
      }
    });
});

module.exports = router;