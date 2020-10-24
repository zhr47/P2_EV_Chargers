// Creating map object
var myMap = L.map("map", {
    center: [38.51073, -96.4247],
    zoom: 4
  });
  
  // Adding tile layer to the map
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);

// Grab the data with d3
d3.json("/newlocations").then(function(response) {
  
  // console.log(response);
  
  // Create a new marker cluster group
  var markers = L.markerClusterGroup();

  // Loop through data
  for (var i = 0; i < response.length; i++) {

    // Set the data location property to a variable
    var location = response[i];
    console.log(location);
    // // Check for location property
    if (location) {
      // Add a new marker to the cluster group and bind a pop-up
      // console.log("Adding Marker");
      markers.addLayer(L.marker([location["lat"], location["lon"]]).bindPopup(location["address"] + '<br>' + location["city"] + ", " + location["state"] + " " +  location["zip"] + '<br>' + location["network"] + '<br>' + location["ctype"]));
      // console.log(markers)
    }
  }
  // Add our marker cluster layer to the map
  myMap.addLayer(markers);
});


// d3.json("/locations").then(function (data) {
//   console.log(data);

//   var markers = L.markerClusterGroup();

//   for (var i = 0; i < data.length; i++){
//     var location = data[i].location;
//     console.log(location)
//     if (location){
//       markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
//         .bindPopup(data[i].descrptor));    
//     }
//   }
//   myMap.addLayer(markers);

// var AKcluster = L.MarkerCluster()

// var statesDict = {
//     "AK": AKcluster,
// };

// whichState = result ['state'];
// satesDict[whichState].addLayer(L.marker([lat,lon]).bindPopup("whatever"));