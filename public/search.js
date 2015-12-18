// var form = document.getElementById('searchForm');
// console.log(form);

// form.addEventListener('submit', function(e) {
//   e.preventDefault();
//   var searchValue = document.getElementById('searchText').value;
// });

var btnClick = document.getElementById('searchButton');

btnClick.addEventListener('click', function(e) {
  e.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if(xhr.status ===200) {
      var inputResult = document.getElementById('searchResult');
      // inputResult.textContent = xhr.responseText;

      var apiResponse = JSON.parse(xhr.responseText);
      // inputResult.textContent = apiResponse;

      
      //for apiResponse

        //create elements

        //append data from object

        //append elements to dom

      console.log(apiResponse);
      // console.log('answer is ' + apiResponse.results[2].vote_count);
      var searchResult = "";
      apiResponse.results.forEach(function(value, index) {
        searchResult += "<h3 id='movieTitle'>" + value.title + "</h3>" + "<p>" + value.overview + "</p>"; 
      });
      document.getElementById('searchResult').innerHTML = searchResult;

    }
  }
  var keyword = document.getElementById('searchText').value;
  xhr.open('POST', 'http://localhost:1337/routes/search', true);
  xhr.send(keyword);
}, false);