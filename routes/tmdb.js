var express = require('express');
var router = express.Router();
var request = require('request');
var bodyParser = require('body-parser');
var textParser = bodyParser.text();

router.use(textParser);

router.post('/popular', function(req, res) {
  var requestPopular = 'http://api.themoviedb.org/3/movie/popular?api_key=5e7c67dc92a8469124e97038b3422c88';
  console.log(requestPopular);
  request(requestPopular,
    function(error, response, body){
      if(response.statusCode == 200) {
        res.send(body);
      } else {
        console.log(error);
      }
    });
});

router.post('/search', function(req, res) {
  var keyword = req.body;
  var requestSearch = 'http://api.themoviedb.org/3/search/movie?api_key=5e7c67dc92a8469124e97038b3422c88&query='+ keyword;
  console.log(requestSearch);
  request(requestSearch,
    function(error, response, body){
      if(response.statusCode == 200) {
        res.send(body);
      } else {
        console.log(error);
      }
    });
});

router.post('/nowPlaying', function(req, res) {
  var requestNowPlaying = 'http://api.themoviedb.org/3/movie/now_playing?api_key=5e7c67dc92a8469124e97038b3422c88';
  console.log(requestNowPlaying);
  request(requestNowPlaying,
    function(error, response, body){
      if(response.statusCode == 200) {
        res.send(body);
      } else {
        console.log(error);
      }
    });
});

router.post('/top_rated', function(req, res) {
  var requestTopRated = 'http://api.themoviedb.org/3/movie/top_rated?api_key=5e7c67dc92a8469124e97038b3422c88';
  console.log(requestTopRated);
  request(requestTopRated,
    function(error, response, body){
      if(response.statusCode == 200) {
        res.send(body);
      } else {
        console.log(error);
      }
    });
});

router.post('/upcoming', function(req, res) {
  var requestUpComing = 'http://api.themoviedb.org/3/movie/upcoming?api_key=5e7c67dc92a8469124e97038b3422c88';
  console.log(requestUpComing);
  request(requestUpComing,
    function(error, response, body){
      if(response.statusCode == 200) {
        res.send(body);
      } else {
        console.log(error);
      }
    });
});

module.exports = router;