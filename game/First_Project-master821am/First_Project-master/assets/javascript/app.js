var service;
var status;
var statusdetail;
var results;
var cityId;
//var coord;
//var coords;
var city;
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
        console.log(place);
      };
    });
  };



  } else {
    alert('Geocode was not successful for the following reason: ' + status);
  }
});
}

function callbackdetail(place, statusdetail) {
  if (statusdetail === google.maps.places.PlacesServiceStatus.OK) {
    console.log("works");
    console.log(place);
  }
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK){
    if (detail === false) {
      $("#test").empty();
      for (var i=0; i<results.length; i++) {
        spotId = results[i].place_id;
        spots = $("<div>");
        spotsIcon = $("<img>");
        spotsIcon.attr("src", results[i].icon);
        spotButton = $("<button>");
        spotButton.attr("id", "spotbutton");
        spotButton.attr("value", spotId);
        spots.append(spotsIcon);
        spots.append(results[i].name);
        spots.append(spotButton);
        $("#test").append(spots);
      console.log(results[i]);
      } 
    }
  }
}



$("#submit").on("click", function(event){
  event.preventDefault();  
  city = $("#text").val();
  $("#city-name").html(city);
  initMap();
});

$("#details").on("click", function(event){
  event.preventDefault();
  details = true;
  initMap();
});

$("#submit2").on("click", function(event){
  event.preventDefault();
  spot = $("#text2").val();
  initMap();
});

$("#hotels").on("click", function(event){
    event.preventDefault();
    spot = "hotels";
    initMap();

});

$("#food").on("click", function(event){
  event.preventDefault();
  spot = "restaurant";
  initMap();
})




$(document).on('click', '#spotbutton', function(){ 
  // Your Code
  event.preventDefault();
  //console.log(this.value);
  detail = true;
  detailId = this.value;
  initMap();
  //detail = false;
});

