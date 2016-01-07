var express = require('express');
var router = express.Router();
var request = require('request');
var bodyParser = require('body-parser');
var textParser = bodyParser.text();

router.use(textParser);

router.post('/nowPlaying', function(req, res) {
  var requestNowPlaying = 'http://api.themoviedb.org/3/movie/now_playing?page=1&api_key=5e7c67dc92a8469124e97038b3422c88';
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

router.post('/nowPlaying/2', function(req, res) {
  var requestNowPlaying = 'http://api.themoviedb.org/3/movie/now_playing?page=2&api_key=5e7c67dc92a8469124e97038b3422c88';
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

router.post('/nowPlaying/3', function(req, res) {
  var requestNowPlaying = 'http://api.themoviedb.org/3/movie/now_playing?page=3&api_key=5e7c67dc92a8469124e97038b3422c88';
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

router.post('/nowPlaying/4', function(req, res) {
  var requestNowPlaying = 'http://api.themoviedb.org/3/movie/now_playing?page=4&api_key=5e7c67dc92a8469124e97038b3422c88';
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

router.post('/nowPlaying/5', function(req, res) {
  var requestNowPlaying = 'http://api.themoviedb.org/3/movie/now_playing?page=5&api_key=5e7c67dc92a8469124e97038b3422c88';
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


router.post('/popular', function(req, res) {
  var requestPopular = 'http://api.themoviedb.org/3/movie/popular?page=1&api_key=5e7c67dc92a8469124e97038b3422c88';
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

router.post('/popular/2', function(req, res) {
  var requestPopular = 'http://api.themoviedb.org/3/movie/popular?page=2&api_key=5e7c67dc92a8469124e97038b3422c88';
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

router.post('/popular/3', function(req, res) {
  var requestPopular = 'http://api.themoviedb.org/3/movie/popular?page=3&api_key=5e7c67dc92a8469124e97038b3422c88';
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

router.post('/popular/4', function(req, res) {
  var requestPopular = 'http://api.themoviedb.org/3/movie/popular?page=4&api_key=5e7c67dc92a8469124e97038b3422c88';
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

router.post('/popular/5', function(req, res) {
  var requestPopular = 'http://api.themoviedb.org/3/movie/popular?page=5&api_key=5e7c67dc92a8469124e97038b3422c88';
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
  var requestSearch = 'http://api.themoviedb.org/3/search/movie?&api_key=5e7c67dc92a8469124e97038b3422c88&query='+ keyword;
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


router.post('/top_rated', function(req, res) {
  var requestTopRated = 'http://api.themoviedb.org/3/movie/top_rated?page=1&api_key=5e7c67dc92a8469124e97038b3422c88';
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

router.post('/top_rated/2', function(req, res) {
  var requestTopRated = 'http://api.themoviedb.org/3/movie/top_rated?page=2&api_key=5e7c67dc92a8469124e97038b3422c88';
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

router.post('/top_rated/3', function(req, res) {
  var requestTopRated = 'http://api.themoviedb.org/3/movie/top_rated?page=3&api_key=5e7c67dc92a8469124e97038b3422c88';
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

router.post('/top_rated/4', function(req, res) {
  var requestTopRated = 'http://api.themoviedb.org/3/movie/top_rated?page=4&api_key=5e7c67dc92a8469124e97038b3422c88';
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

router.post('/top_rated/5', function(req, res) {
  var requestTopRated = 'http://api.themoviedb.org/3/movie/top_rated?page=5&api_key=5e7c67dc92a8469124e97038b3422c88';
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
  var requestUpComing = 'http://api.themoviedb.org/3/movie/upcoming?page=1&api_key=5e7c67dc92a8469124e97038b3422c88';
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

router.post('/upcoming/2', function(req, res) {
  var requestUpComing = 'http://api.themoviedb.org/3/movie/upcoming?page=2&api_key=5e7c67dc92a8469124e97038b3422c88';
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

router.post('/upcoming/3', function(req, res) {
  var requestUpComing = 'http://api.themoviedb.org/3/movie/upcoming?page=3&api_key=5e7c67dc92a8469124e97038b3422c88';
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

router.post('/upcoming/4', function(req, res) {
  var requestUpComing = 'http://api.themoviedb.org/3/movie/upcoming?page=4&api_key=5e7c67dc92a8469124e97038b3422c88';
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

router.post('/upcoming/5', function(req, res) {
  var requestUpComing = 'http://api.themoviedb.org/3/movie/upcoming?page=5&api_key=5e7c67dc92a8469124e97038b3422c88';
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