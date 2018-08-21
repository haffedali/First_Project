var service;
var status;
var statusdetail;
var results;
var cityId;
var city="Berkeley";
var spot;
var spots;
var map;
var lat;
var lng;
var spottest;
var spotbutton;
var detail = false;
var spotId;
var detailId;
var scroll = $("<div>")
//var detailDiv = $("<div>")
var apiKey = "AIzaSyAKaTtDMQ-NxRqw8L_sWUrF-Ep4k9IeZwU";


//scroll
scroll.attr("class", ".overlay .over-content .overlay a .overlay a:hover .overlay a:focus .overlay .closebtn");

//google map function
function initMap() {
var geocoder = new google.maps.Geocoder();


map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 0, lng: 0},
  zoom: 8
});

///Uses search to input city and retrieve latlng as well as centering the map
geocoder.geocode({'address': city}, function(results, status) {
  if (status === 'OK') {
    map.setCenter(results[0].geometry.location);
    cityId = results[0].place_id;
    lat = results[0].geometry.location.lat();
    lng = results[0].geometry.location.lng();
    //console.log(results[0]);


  ////spot list
  if (spot && detail === false) {
    var request = {
      location: {lat: lat , lng: lng},
      types: [spot],
      radius: 5000,    
  }

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
  }

  if (detail === true) {
    //console.log("poo");
    var request = {
      placeId: detailId,
      //fields: ['name', 'rating', 'formatted_phone_number', 'geometry', 'price-level', 'review']
    }
    //console.log("details");
    service = new google.maps.places.PlacesService(map);
    service.getDetails(request, function(place, status) {
      console.log(status);
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        // $('#mainDisplay').empty();
        
        $("#temp").empty();
        $("#minutely").empty();
      $(".spots").empty();
      $(".more-details").empty();
        // console.log(place);
        //var detailImg = $("<img>");
        //detailImg.attr("src", place.photos[0].html_attributions[0]);
        var detailDiv = $("<div>");
        detailDiv.attr("class", "more-details");
        //detailDiv.append(detailImg);
        //detailDiv.append(place.photos[0].html_attributions[0]);
        detailDiv.append(place.name);
        detailDiv.append(place.rating);
        detailDiv.append(place.formatted_address);
        detailDiv.append(place.formatted_phone_number);
        detailDiv.append(place.reviews[0].text)
        $("#mainDisplay").append(detailDiv);
      };
    });
  };



  } else {
    alert('Geocode was not successful for the following reason: ' + status);
  }
});
}

/*
function callbackdetail(place, statusdetail) {
  if (statusdetail === google.maps.places.PlacesServiceStatus.OK) {
    console.log("works");
    console.log(place);
    $('#test').empty();
    //var detailImg = $("<img>");
    //detailImg.attr("src", place.photos[0].html_attributions[0]);
    //console.log(detailImg);
    var detailDiv = $("#<div>");
    detailDiv.append(detailImg);
    detailDiv.append(place.name);
    detailDiv.append(place.rating);
    detailDiv.append(place.formatted_address);
    detailDiv.append(place.formatted_phone_number);
    $("#test").append(detailDiv);
  }
}
*/
function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK){
    if (detail === false) {
      $("#temp").empty();
        $("#minutely").empty();
      $(".spots").empty();
      $(".more-details").empty();
      for (var i=0; i<results.length; i++) {
        console.log(results[0]);
        spotId = results[i].place_id;
        spots = $("<div>");
        spotsIcon = $("<img>");
        spotsIcon.attr("src", results[i].icon);
        spotsIcon.attr("id", "pic");
        spotButton = $("<button>");
        spotButton.attr("id", "details");
        spotButton.attr("value", spotId);
        var spotName = $("<div>")
        spotName.text(results[i].name);
        spotName.attr('id', "name");
        spots.append(spotsIcon);
        spots.append(spotName);
        spots.append(spotButton);
        spots.attr("class", "spots");
        $("#mainDisplay").append(spots);
      console.log(results[i]);
      } 
    }
  }
}



$(".fa-search").on("click", function(event){
  event.preventDefault();  
  city = $(".search-data").val();
  $(".current-city").text(city);
  initMap();
});

// $("#details").on("click", function(event){
//   event.preventDefault();
//   details = true;
//   initMap();
// });

/*
$("#submit2").on("click", function(event){
  event.preventDefault();
  spot = $("#text2").val();
  initMap();
});
*/

$("#hotels").on("click", function(event){
    event.preventDefault();
    detail = false;

    $("#temp").empty();
    $("#minutely").empty();
  $(".spots").empty();
  $(".more-details").empty();
    spot = "hotels";
    initMap();

});

$("#food").on("click", function(event){
  
  event.preventDefault();
  detail = false;

  $("#temp").empty();
  $("#minutely").empty();
$(".spots").empty();
$(".more-details").empty();
  spot = "restaurant";
  console.log(spot)
  initMap();
})




$(document).on('click', '#details', function(){ 
  // Your Code
  event.preventDefault();
  $("#temp").empty();
        $("#minutely").empty();
      $(".spots").empty();
      $(".more-details").empty();// console.log(this.value);
  detail = true;
  detailId = this.value;
  //$("test").append(detailDiv);
  initMap();
});

