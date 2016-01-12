var clickYear = document.getElementById('yearInput');
var clickSort = document.getElementById('sortInput');

clickYear.addEventListener('change', function(e) {
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

        var poster;
        if (apiResponse.results[i].poster_path == null) {
          poster = '/image/image-not-found.jpg'
        } else {
          poster = 'http://image.tmdb.org/t/p/w500' + apiResponse.results[i].poster_path;
        }

        imageOne.setAttribute('src', poster)
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
        paraTwo.setAttribute('class', 'rateNumber, text-center');
        paraTwo.setAttribute('style', 'width: 150px')
        paraTwo.textContent = apiResponse.results[i].vote_average;
        divSeven.appendChild(divFour);
        divFour.appendChild(paraTwo);

        var rating = document.createElement('span');
        rating.setAttribute('class', 'fa fa-star rateIcon');
        paraTwo.appendChild(rating);

        var divNine = document.createElement('div');
        divNine.setAttribute('class', 'col-md-12');
        var paraThree = document.createElement('p');
        paraThree.setAttribute('class', 'genres');
        divNine.appendChild(paraThree);
        divThree.appendChild(divNine);

        var divTen = document.createElement('div');
        divTen.setAttribute('class', 'col-sm-12');
        var paraFour = document.createElement('p');
        var paraFive = document.createElement('span');
        paraFive.setAttribute('class', 'date');
        paraFour.setAttribute('class', 'dateRelease');
        var pTagOne = document.createTextNode('Date Release:  ');
        paraFive.textContent = apiResponse.results[i].release_date;
        divThree.appendChild(divTen);
        divTen.appendChild(paraFour);
        paraFour.appendChild(pTagOne);
        paraFour.appendChild(paraFive);

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
  
  // var object = {
  //   var yearSelect = clickYear.options[clickYear.selectedIndex].value,
  // }
  var yearSelect = clickYear.options[clickYear.selectedIndex].value;
  xhr.open('POST', 'http://localhost:1337/movie/filterYear', true);
  xhr.send(yearSelect);
}, false);


clickSort.addEventListener('change', function(e) {
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

        var poster;
        if (apiResponse.results[i].poster_path == null) {
          poster = '/image/image-not-found.jpg'
        } else {
          poster = 'http://image.tmdb.org/t/p/w500' + apiResponse.results[i].poster_path;
        }

        imageOne.setAttribute('src', poster)
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
        paraTwo.setAttribute('class', 'rateNumber, text-center');
        paraTwo.setAttribute('style', 'width: 150px')
        paraTwo.textContent = apiResponse.results[i].vote_average;
        divSeven.appendChild(divFour);
        divFour.appendChild(paraTwo);

        var rating = document.createElement('span');
        rating.setAttribute('class', 'fa fa-star rateIcon');
        paraTwo.appendChild(rating);

        var divNine = document.createElement('div');
        divNine.setAttribute('class', 'col-md-12');
        var paraThree = document.createElement('p');
        paraThree.setAttribute('class', 'genres');
        divNine.appendChild(paraThree);
        divThree.appendChild(divNine);

        var divTen = document.createElement('div');
        divTen.setAttribute('class', 'col-sm-12');
        var paraFour = document.createElement('p');
        var paraFive = document.createElement('span');
        paraFive.setAttribute('class', 'date');
        paraFour.setAttribute('class', 'dateRelease');
        var pTagOne = document.createTextNode('Date Release:  ');
        paraFive.textContent = apiResponse.results[i].release_date;
        divThree.appendChild(divTen);
        divTen.appendChild(paraFour);
        paraFour.appendChild(pTagOne);
        paraFour.appendChild(paraFive);

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
  

  var sortSelect = clickSort.options[clickSort.selectedIndex].value;
  
  xhr.open('POST', 'http://localhost:1337/movie/filterSort', true);
  xhr.send(sortSelect);
}, false);



