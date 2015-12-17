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
      inputResult.textContent = xhr.responseText;
    }
  }
  var keyword = document.getElementById('searchText').value;
  xhr.open('POST', 'http://localhost:1337/routes/api', true);
  xhr.send(keyword);
}, false);