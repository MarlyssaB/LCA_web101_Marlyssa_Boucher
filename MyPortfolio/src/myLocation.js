var myLocation = document.getElementById("my-coordinates");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayPosition);
  }
  else {
    myLocation.innerHTML = "Not Available";
  }
}
function displayPosition(position) {
  myLocation.innerHTML = "Longitude: " + position.coords.longitude + "Latitude: " + position.coords.latitiude;
}
