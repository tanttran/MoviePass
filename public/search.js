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
      searchResult += "<h3 id='movieTitle'>" + value.title + "</h3>" + "<p>" + value.overview + "</p>"; 
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
      searchResult += "<h3 id='movieTitle'>" + value.title + "</h3>" + "<p>" + value.overview + "</p>"; 
      });
      document.getElementById('searchResult').innerHTML = searchResult;

    }
  }
  xhr.open('POST', 'http://localhost:1337/movie/popular', true);
  xhr.send(null);
}, false);