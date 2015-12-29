var clickPopular = document.getElementById('popular');
var searchResult = document.getElementById('searchResult');
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

      searchResult.innerHTML = "";

      for (i=0; i<apiResponse.results.length; i++) {
        var divOne = document.createElement('div');
        divOne.setAttribute('class', 'col-md-6');
        searchResult.appendChild(divOne);

        var divEight = document.createElement('div');
        divEight.setAttribute('class', 'col-md-12 mainPopular');
        divOne.appendChild(divEight);

        var divTwo = document.createElement('div');
        divTwo.setAttribute('class', 'col-md-6');
        divEight.appendChild(divTwo);

        var divThree = document.createElement('div');
        divThree.setAttribute('class', 'col-md-6');
        divEight.appendChild(divThree);

        var imageOne = document.createElement('img');
        imageOne.setAttribute('class', 'image');
        imageOne.setAttribute('src', 'http://image.tmdb.org/t/p/w500' + apiResponse.results[i].poster_path)
        divTwo.appendChild(imageOne);

        var divSeven = document.createElement('div');
        divSeven.setAttribute('id', 'seven');
        divThree.appendChild(divSeven);

        var divFive = document.createElement('div');
        divFive.setAttribute('class', 'col-md-8');
        var headerOne = document.createElement('h4');
        headerOne.setAttribute('class', 'title');
        headerOne.textContent = apiResponse.results[i].title;
        divSeven.appendChild(divFive);
        divFive.appendChild(headerOne);

        var divFour = document.createElement('div');
        divFour.setAttribute('class', 'rating col-md-4');
        var paraTwo = document.createElement('p');
        paraTwo.textContent = apiResponse.results[i].vote_average;
        divSeven.appendChild(divFour);
        divFour.appendChild(paraTwo);

        var rating = document.createElement('span');
        rating.setAttribute('class', 'fa fa-star');
        paraTwo.appendChild(rating);

        var divSix = document.createElement('div')
        divSix.setAttribute('class', 'col-md-12');
        var paraOne = document.createElement('p');
        paraOne.setAttribute('class', 'overview');
        paraOne.textContent = apiResponse.results[i].overview;
        divSix.appendChild(paraOne);
        divThree.appendChild(divSix);

        

  //     var searchResult = "";
  //     apiResponse.results.forEach(function(value, index) {
  //     searchResult += "<div class='col-md-6'>" +
  //                     "<div class='col-md-5'>" +
  //                     "<img class='thumbnail img-responsive' src='http://image.tmdb.org/t/p/w500/"
  //                      +  value.poster_path + "' width='185px' height='275px'>" +
  //                     "</div>" + value.vote_average + 
  //                     "<span class='fa fa-star'>" + "</span>" +
  //                     "<h4 id='movieTitle'>" + value.title + "</h4>" + 
  //                     "<p id='overview'>" + value.overview + "</p>" +
  //                     "</div>";
                       
  //     })

  //     document.getElementById('searchResult').innerHTML = searchResult;
  //   }
  // };

      }

    }
  };
  xhr.open('POST', 'http://localhost:1337/movie/popular', true);
  xhr.send(null);
}, false);


var clickSearch = document.getElementById('searchButton');
var searchResult = document.getElementById('searchResult');
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

      searchResult.innerHTML = "";

      for (i=0; i<apiResponse.results.length; i++) {
        
        var divOne = document.createElement('div');
        divOne.setAttribute('class', 'col-md-6');
        searchResult.appendChild(divOne);

        var divTwo = document.createElement('div');
        divTwo.setAttribute('class', 'col-md-6 img-responsive thumbnail');
        divOne.appendChild(divTwo);

        var divThree = document.createElement('div');
        divThree.setAttribute('class', 'col-md-6');
        divOne.appendChild(divThree);

        var imageOne = document.createElement('img');
        imageOne.setAttribute('src', 'http://image.tmdb.org/t/p/w500' + apiResponse.results[i].poster_path)
        divTwo.appendChild(imageOne);

        var divFive = document.createElement('div');
        divFive.setAttribute('class', 'col-md-10');
        var headerOne = document.createElement('h4');
        headerOne.textContent = apiResponse.results[i].title;
        divThree.appendChild(divFive);
        divFive.appendChild(headerOne);
        

        var paraOne = document.createElement('p');
        divThree.appendChild(paraOne);
        paraOne.textContent = apiResponse.results[i].overview;

  //     var searchResult = "";
  //     apiResponse.results.forEach(function(value, index) {
  //     searchResult += "<div class='col-md-6'>" +
  //                     "<div class='col-md-5'>" +
  //                     "<img class='thumbnail img-responsive' src='http://image.tmdb.org/t/p/w500/"
  //                      +  value.poster_path + "' width='185px' height='275px'>" +
  //                     "</div>" + value.vote_average + 
  //                     "<span class='fa fa-star'>" + "</span>" +
  //                     "<h4 id='movieTitle'>" + value.title + "</h4>" + 
  //                     "<p id='overview'>" + value.overview + "</p>" +
  //                     "</div>";
                       
  //     })

  //     document.getElementById('searchResult').innerHTML = searchResult;
  //   }
  // };

      }

    }
  };
  var keyword = document.getElementById('searchText').value;
  xhr.open('POST', 'http://localhost:1337/movie/search', true);
  xhr.send(keyword);
}, false);


var clickPopular = document.getElementById('topRated');
var searchResult = document.getElementById('searchResult');
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

      searchResult.innerHTML = "";
      
      for (i=0; i<apiResponse.results.length; i++) {
        
        var divOne = document.createElement('div');
        divOne.setAttribute('class', 'col-md-6');
        searchResult.appendChild(divOne);

        var divTwo = document.createElement('div');
        divTwo.setAttribute('class', 'col-md-6 img-responsive thumbnail');
        divOne.appendChild(divTwo);

        var divThree = document.createElement('div');
        divThree.setAttribute('class', 'col-md-6');
        divOne.appendChild(divThree);

        var imageOne = document.createElement('img');
        imageOne.setAttribute('src', 'http://image.tmdb.org/t/p/w500' + apiResponse.results[i].poster_path)
        divTwo.appendChild(imageOne);

        var headerOne = document.createElement('h4');
        divThree.appendChild(headerOne);
        headerOne.textContent = apiResponse.results[i].title;

        var paraOne = document.createElement('p');
        divThree.appendChild(paraOne);
        paraOne.textContent = apiResponse.results[i].overview;

  //     var searchResult = "";
  //     apiResponse.results.forEach(function(value, index) {
  //     searchResult += "<div class='col-md-6'>" +
  //                     "<div class='col-md-5'>" +
  //                     "<img class='thumbnail img-responsive' src='http://image.tmdb.org/t/p/w500/"
  //                      +  value.poster_path + "' width='185px' height='275px'>" +
  //                     "</div>" + value.vote_average + 
  //                     "<span class='fa fa-star'>" + "</span>" +
  //                     "<h4 id='movieTitle'>" + value.title + "</h4>" + 
  //                     "<p id='overview'>" + value.overview + "</p>" +
  //                     "</div>";
                       
  //     })

  //     document.getElementById('searchResult').innerHTML = searchResult;
  //   }
  // };

      }

    }
  };
  xhr.open('POST', 'http://localhost:1337/movie/top_Rated', true);
  xhr.send(null);
}, false);

var clickUpComing = document.getElementById('upComing');
var searchResult = document.getElementById('searchResult');
clickUpComing.addEventListener('click', function(e) {
  e.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if(xhr.status ===200) {
      var inputResult = document.getElementById('searchResult');  
      var apiResponse = JSON.parse(xhr.responseText);

      searchResult.innerHTML = "";
  
      for (i=0; i<apiResponse.results.length; i++) {
        
        var divOne = document.createElement('div');
        divOne.setAttribute('class', 'col-md-6');
        searchResult.appendChild(divOne);

        var divTwo = document.createElement('div');
        divTwo.setAttribute('class', 'col-md-6 img-responsive thumbnail');
        divOne.appendChild(divTwo);

        var divThree = document.createElement('div');
        divThree.setAttribute('class', 'col-md-6');
        divOne.appendChild(divThree);

        var imageOne = document.createElement('img');
        imageOne.setAttribute('src', 'http://image.tmdb.org/t/p/w500' + apiResponse.results[i].poster_path)
        divTwo.appendChild(imageOne);

        var headerOne = document.createElement('h4');
        divThree.appendChild(headerOne);
        headerOne.textContent = apiResponse.results[i].title;

        var paraOne = document.createElement('p');
        divThree.appendChild(paraOne);
        paraOne.textContent = apiResponse.results[i].overview;

  //     var searchResult = "";
  //     apiResponse.results.forEach(function(value, index) {
  //     searchResult += "<div class='col-md-6'>" +
  //                     "<div class='col-md-5'>" +
  //                     "<img class='thumbnail img-responsive' src='http://image.tmdb.org/t/p/w500/"
  //                      +  value.poster_path + "' width='185px' height='275px'>" +
  //                     "</div>" + value.vote_average + 
  //                     "<span class='fa fa-star'>" + "</span>" +
  //                     "<h4 id='movieTitle'>" + value.title + "</h4>" + 
  //                     "<p id='overview'>" + value.overview + "</p>" +
  //                     "</div>";
                       
  //     })

  //     document.getElementById('searchResult').innerHTML = searchResult;
  //   }
  // };

      }

    }
  };
  xhr.open('POST', 'http://localhost:1337/movie/upComing', true);
  xhr.send(null);
}, false);