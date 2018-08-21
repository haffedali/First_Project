var service;
var status;
var results;
var cityId;
var coord;
var coords;
var city = "stockton";
var spot = "cafe";
var map;
var lat;
var lng;
var apiKey = "AIzaSyAKaTtDMQ-NxRqw8L_sWUrF-Ep4k9IeZwU";




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

    var request = {
    location: {lat: lat , lng: lng},
    types: [spot],
    radius: 5000,    
}

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
  
  } else {
    alert('Geocode was not successful for the following reason: ' + status);
  }
});


}
function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK){

    for (var i=0; i<results.length; i++) {
      console.log(results[i]);
    }
  }
}




<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAKaTtDMQ-NxRqw8L_sWUrF-Ep4k9IeZwU&libraries=places&callback=initMap" async defer></script>//code here