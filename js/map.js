function myMap() {
  var mapCanvas = document.getElementById("map");
  var myCenter = new google.maps.LatLng(-13.160523494177289, -74.22650003435632); 
  var mapOptions = {center: myCenter, zoom: 13};
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}