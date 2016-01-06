$(document).ready(function(){

var clickNowPlaying = document.getElementById('nowPlaying');
var searchResult = document.getElementById('searchResult');
var clickPopular = document.getElementById('popular');
var clickSearch = document.getElementById('searchButton');
var clickTopRated = document.getElementById('topRated');
var clickUpComing = document.getElementById('upComing');

var apiCall = function(route) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
    if(xhr.status ===200) {
      var apiResponse = JSON.parse(xhr.responseText);
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
        divThree.setAttribute('class', 'col-md-6 info');
        divEight.appendChild(divThree);

        var imageOne = document.createElement('img');
        imageOne.setAttribute('class', 'image');
        imageOne.setAttribute('src', 'http://image.tmdb.org/t/p/w500' + apiResponse.results[i].poster_path)
        divTwo.appendChild(imageOne);

        var divSeven = document.createElement('div');
        divSeven.setAttribute('class', 'titleRating');
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

        var divNine = document.createElement('div');
        divNine.setAttribute('class', 'col-md-12');
        var paraThree = document.createElement('p');
        paraThree.setAttribute('class', 'genres');
        divNine.appendChild(paraThree);
        divThree.appendChild(divNine);

        for (var j = 0; j < apiResponse.results[i].genre_ids.length; j++){
          var value = apiResponse.results[i].genre_ids[j];
          if (value==28) {
            paraThree.textContent += 'Action, ';
          }else if (value ==12) {
            paraThree.textContent += 'Adventure, ';
          }else if (value ==16) {
            paraThree.textContent += 'Animation, ';
          }else if (value ==35) {
            paraThree.textContent += 'Comedy, ';
          }else if (value ==80) {
            paraThree.textContent += 'Crime, ';
          }else if (value ==99) {
            paraThree.textContent += 'Documentary, ';
          }else if (value ==18) {
            paraThree.textContent += 'Drama, ';
          }else if (value ==10751) {
            paraThree.textContent += 'Family, ';
          }else if (value ==14) {
            paraThree.textContent += 'Fantasy, ';
          }else if (value ==10769) {
            paraThree.textContent += 'Foreign, ';
          }else if (value ==36) {
            paraThree.textContent += 'History, ';
          }else if (value ==27) {
            paraThree.textContent += 'Horror, ';
          }else if (value ==10402) {
            paraThree.textContent += 'Music, ';
          }else if (value ==9648) {
            paraThree.textContent += 'Mystery, ';
          }else if (value ==10749) {
            paraThree.textContent += 'Romance, ';
          }else if (value ==878) {
            paraThree.textContent += 'Science Fiction, ';
          }else if (value ==10770) {
            paraThree.textContent += 'TV Movie, ';
          }else if (value ==53) {
            paraThree.textContent += 'Thriller, ';
          }else if (value ==10752) {
            paraThree.textContent += 'War, ';
          }else if (value ==37) {
            paraThree.textContent += 'Western, ';
          }
        }
        
        var divSix = document.createElement('div')
        divSix.setAttribute('class', 'col-md-12');
        var paraOne = document.createElement('p');
        paraOne.setAttribute('class', 'overview');
        paraOne.textContent = apiResponse.results[i].overview;
        divSix.appendChild(paraOne);
        divThree.appendChild(divSix);

      }

    }
  };
  console.log('http://localhost:1337/movie/' + route);
  xhr.open('POST', 'http://localhost:1337/movie/' + route, true);
  xhr.send(null);
}

window.onload = function() {
  apiCall("nowPlaying");
}

clickNowPlaying.addEventListener('click', function(e) {
  apiCall("nowPlaying");
}, false);

clickPopular.addEventListener('click', function(e) {
  apiCall("popular");
}, false);

clickTopRated.addEventListener('click', function(e) {
  apiCall("top_Rated");
}, false);

clickUpComing.addEventListener('click', function(e) {
  apiCall("upComing");
}, false);


clickSearch.addEventListener('click', function(e) {
  e.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if(xhr.status ===200) {
      var apiResponse = JSON.parse(xhr.responseText);
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
        divThree.setAttribute('class', 'col-md-6 info');
        divEight.appendChild(divThree);

        var imageOne = document.createElement('img');
        imageOne.setAttribute('class', 'image');
        imageOne.setAttribute('src', 'http://image.tmdb.org/t/p/w500' + apiResponse.results[i].poster_path)
        divTwo.appendChild(imageOne);

        var divSeven = document.createElement('div');
        divSeven.setAttribute('class', 'titleRating');
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

        var divNine = document.createElement('div');
        divNine.setAttribute('class', 'col-md-12');
        var paraThree = document.createElement('p');
        paraThree.setAttribute('class', 'genres');
        divNine.appendChild(paraThree);
        divThree.appendChild(divNine);

        for (var j = 0; j < apiResponse.results[i].genre_ids.length; j++){
          var value = apiResponse.results[i].genre_ids[j];
          if (value==28) {
            paraThree.textContent += 'Action, ';
          }else if (value ==12) {
            paraThree.textContent += 'Adventure, ';
          }else if (value ==16) {
            paraThree.textContent += 'Animation, ';
          }else if (value ==35) {
            paraThree.textContent += 'Comedy, ';
          }else if (value ==80) {
            paraThree.textContent += 'Crime, ';
          }else if (value ==99) {
            paraThree.textContent += 'Documentary, ';
          }else if (value ==18) {
            paraThree.textContent += 'Drama, ';
          }else if (value ==10751) {
            paraThree.textContent += 'Family, ';
          }else if (value ==14) {
            paraThree.textContent += 'Fantasy, ';
          }else if (value ==10769) {
            paraThree.textContent += 'Foreign, ';
          }else if (value ==36) {
            paraThree.textContent += 'History, ';
          }else if (value ==27) {
            paraThree.textContent += 'Horror, ';
          }else if (value ==10402) {
            paraThree.textContent += 'Music, ';
          }else if (value ==9648) {
            paraThree.textContent += 'Mystery, ';
          }else if (value ==10749) {
            paraThree.textContent += 'Romance, ';
          }else if (value ==878) {
            paraThree.textContent += 'Science Fiction, ';
          }else if (value ==10770) {
            paraThree.textContent += 'TV Movie, ';
          }else if (value ==53) {
            paraThree.textContent += 'Thriller, ';
          }else if (value ==10752) {
            paraThree.textContent += 'War, ';
          }else if (value ==37) {
            paraThree.textContent += 'Western, ';
          }
        }
        
        var divSix = document.createElement('div')
        divSix.setAttribute('class', 'col-md-12');
        var paraOne = document.createElement('p');
        paraOne.setAttribute('class', 'overview');
        paraOne.textContent = apiResponse.results[i].overview;
        divSix.appendChild(paraOne);
        divThree.appendChild(divSix);

      }

    }
  };
  var keyword = document.getElementById('searchText').value;
  xhr.open('POST', 'http://localhost:1337/movie/search', true);
  xhr.send(keyword);
}, false);

var hidden = function(){
$('#now-playing').hide();
$('#popular-movies').hide();
$('#top-movies').hide();
$('#upcoming-movies').hide();
$('#search-results').hide();
};
hidden();
$('#now-playing').show();


$('#nowPlaying').click(function(){
  hidden();
  $('#now-playing').show();
})

$('#popular').click(function(){
  hidden();
  $('#popular-movies').show();
})

$('#topRated').click(function(){
  hidden();
  $('#top-movies').show();
})

$('#upComing').click(function(){
  hidden();
  $('#upcoming-movies').show();
})

$('#searchButton').click(function(){
  hidden();
  $('#search-results').show();
})


});
