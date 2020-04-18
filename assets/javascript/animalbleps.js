// Need to change name of div from cats to something else
// Recommend setting a max image width

var originalURL = "https://mlem.tech/api/randommlem";
var queryURL = "https://cors-anywhere.herokuapp.com/" + originalURL

$.ajax({
  url: queryURL,
  method: "GET",
  dataType: "json",
  // this headers section is necessary for CORS-anywhere
  headers: {
    "x-requested-with": "xhr",
    "x-rapidapi-host": "mlemapi.p.rapidapi.com",
    "x-rapidapi-key": "27adf78284mshc7c79769720b212p1855e4jsn34c40ae604b1"
  }
}).done(function(response) {
  console.log('CORS anywhere response', response);

  var imageURL = response.url;
    
  var animalImage = $('<img>');
  animalImage.attr('src', imageURL);

  $('#cats').append(animalImage);
  
}).fail(function(jqXHR, textStatus) { 
  console.error(textStatus)
});