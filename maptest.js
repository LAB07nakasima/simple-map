// Initialize and add the map
function initMap() {
  // The location of Fukuoka
  const Fukuoka = { lat: 33.580, lng: 130.400 };
  // The map, centered at Fukuoka
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: Fukuoka,
  });
  // The marker, positioned at Fukuoka
  const marker = new google.maps.Marker({
    position: Fukuoka,
    map: map,
  });
}

window.initMap = initMap;