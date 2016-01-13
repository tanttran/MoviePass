var express = require('express');
var router = express.Router();
var request = require('request');
var bodyParser = require('body-parser');
var textParser = bodyParser.text();

router.use(textParser);

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

// router.post('/search/:page', function(req, res) {
//   var value = req.params.page;
//   var keyword = req.body;
//   var requestSearch = 'http://api.themoviedb.org/3/search/movie?page='+value+'&api_key=5e7c67dc92a8469124e97038b3422c88&query='+ keyword;
//   console.log(requestSearch);
//   request(requestSearch,
//     function(error, response, body){
//       if(response.statusCode == 200) {
//         res.send(body);
//       } else {
//         console.log(error);
//       }
//     });
// });


router.post('/filter/', function(req, res) {
  var responseObject = req.body;
  console.log("BODY IS BELOW");
  console.log(responseObject);
  var jsonObject = JSON.parse(responseObject);
  var yearSelect = jsonObject.yearSelect;
  console.log(yearSelect);
  var sortSelect = jsonObject.sortSelect;
  var genreValue = jsonObject.genreValue;
  var requestYear = 'https://api.themoviedb.org/3/discover/movie?api_key=5e7c67dc92a8469124e97038b3422c88&primary_release_year='+ yearSelect +'&sort_by='+ sortSelect +'&with_genres='+genreValue;
  console.log(requestYear);
  request(requestYear,
    function(error, response, body){
      if(response.statusCode == 200) {
        res.send(body);
      } else {
        console.log(error);
      }
    });
});



router.post('/nowPlaying/', function(req, res) {
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

router.post('/nowPlaying/:page', function(req, res) {
  var value= req.params.page;
  var requestNowPlaying = 'http://api.themoviedb.org/3/movie/now_playing?page='+value+'&api_key=5e7c67dc92a8469124e97038b3422c88';
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

router.post('/popular/:page', function(req, res) {
  var value= req.params.page;
  var requestPopular = 'http://api.themoviedb.org/3/movie/popular?page='+value+'&api_key=5e7c67dc92a8469124e97038b3422c88';
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

router.post('/top_rated/:page', function(req, res) {
  var value= req.params.page;
  var requestTopRated = 'http://api.themoviedb.org/3/movie/top_rated?page='+value+'&api_key=5e7c67dc92a8469124e97038b3422c88';
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

router.post('/upcoming/:page', function(req, res) {
  var value= req.params.page;
  var requestUpComing = 'http://api.themoviedb.org/3/movie/upcoming?page='+value+'&api_key=5e7c67dc92a8469124e97038b3422c88';
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