var clickSearch = document.getElementById('searchButton');
clickSearch.addEventListener('click', function(e) {
  e.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if(xhr.status ===200) {
      var inputResult = document.getElementById('searchResult');
      // inputResult.textContent = xhr.responseText;

      var apiResponse = JSON.parse(xhr.responseText);
      // inputResult.textContent = apiResponse;
      console.log(apiResponse);
      
      //for apiResponse

        //create elements

        //append data from object

        //append elements to dom

      var searchResult = "";
      apiResponse.results.forEach(function(value, index) {
      searchResult += "<div class='col-md-6'>" +
                      "<div class='col-md-12'>" +
                      "<img class='thumbnail img-responsive' src='http://image.tmdb.org/t/p/w500/"
                       +  value.poster_path + "' width='185px' height='275px'>" +
                      "</div>" + value.vote_average + 
                      "<span class='fa fa-star'>" + "</span>" +
                      "<h4 id='movieTitle'>" + value.title + "</h4>" + 
                      "<p>" + value.overview + "</p>" +
                      "</div>";
      });
      document.getElementById('searchResult').innerHTML = searchResult;

    }
  }
  var keyword = document.getElementById('searchText').value;
  xhr.open('POST', 'http://localhost:1337/movie/search', true);
  xhr.send(keyword);
}, false);


var clickPopular = document.getElementById('popular');
clickPopular.addEventListener('click', function(e) {
  console.log(e.target);
  e.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if(xhr.status ===200) {
      var inputResult = document.getElementById('searchResult');
      // inputResult.textContent = xhr.responseText;
      var apiResponse = JSON.parse(xhr.responseText);
      // inputResult.textContent = apiResponse;
      console.log(apiResponse);
      
      var searchResult = "";
      apiResponse.results.forEach(function(value, index) {   
      searchResult += "<div class='col-md-6'>" +
                      "<div class='col-md-5'>" +
                      "<img class='thumbnail img-responsive' src='http://image.tmdb.org/t/p/w500/"
                       +  value.poster_path + "' width='185px' height='275px'>" +
                      "</div>" + value.vote_average + 
                      "<span class='fa fa-star'>" + "</span>" +
                      "<h4 id='movieTitle'>" + value.title + "</h4>" + 
                      "<p id='overview'>" + value.overview + "</p>" +
                      "</div>";
                       
      });
      document.getElementById('searchResult').innerHTML = searchResult;

    }
  }
  xhr.open('POST', 'http://localhost:1337/movie/popular', true);
  xhr.send(null);
}, false);

var clickPopular = document.getElementById('topRated');
clickPopular.addEventListener('click', function(e) {
  e.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if(xhr.status ===200) {
      var inputResult = document.getElementById('searchResult');
      // inputResult.textContent = xhr.responseText;
      var apiResponse = JSON.parse(xhr.responseText);
      // inputResult.textContent = apiResponse;
      console.log(apiResponse);
      
      var searchResult = "";
      apiResponse.results.forEach(function(value, index) {
      searchResult += "<div class='col-md-6'>" +
                      "<div class='col-md-5'>" +
                      "<img class='thumbnail img-responsive' src='http://image.tmdb.org/t/p/w500/"
                       +  value.poster_path + "' width='185px' height='275px'>" +
                      "</div>" + value.vote_average + 
                      "<span class='fa fa-star'>" + "</span>" +
                      "<h4 id='movieTitle'>" + value.title + "</h4>" + 
                      "<p>" + value.overview + "</p>" +
                      "</div>"; 
      });
      document.getElementById('searchResult').innerHTML = searchResult;

    }
  }
  xhr.open('POST', 'http://localhost:1337/movie/top_Rated', true);
  xhr.send(null);
}, false);

var clickUpComing = document.getElementById('upComing');
clickUpComing.addEventListener('click', function(e) {
  e.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if(xhr.status ===200) {
      var inputResult = document.getElementById('searchResult');  
      var apiResponse = JSON.parse(xhr.responseText);
  
      var searchResult = "";
      apiResponse.results.forEach(function(value, index) {
      searchResult += "<div class='col-md-6'>" +
                      "<div class='col-md-5'>" +
                      "<img class='thumbnail img-responsive' src='http://image.tmdb.org/t/p/w500/"
                       +  value.poster_path + "' width='185px' height='275px'>" +
                      "</div>" + value.vote_average + 
                      "<span class='fa fa-star'>" + "</span>" +
                      "<h4 id='movieTitle'>" + value.title + "</h4>" + 
                      "<p>" + value.overview + "</p>" +
                      "</div>"; 
      });
      document.getElementById('searchResult').innerHTML = searchResult;

    }
  }
  xhr.open('POST', 'http://localhost:1337/movie/upComing', true);
  xhr.send(null);
}, false);