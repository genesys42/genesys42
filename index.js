var map = L.map('map').setView([22, 92], 10);
var tileurl= 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
var attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
var layer= L.tileLayer(tileurl,{attribution})
layer.addTo(map)

// Create the marker
//var singleMarker = L.marker([22, 92]);

// Bind a popup to the marker and open it
//singleMarker.bindPopup('This is hilly').openPopup();

// Add the marker to the map
//singleMarker.addTo(map);

//create the marker
//var singleMarekr=L.marker([22,92])
//bind a popup to the marker and open it
//singleMarekr.bindPopup('This is billy').openPopup();
//add the marker to the map
//singleMarker.addTo(map);

var greenIcon = L.icon({
    iconUrl: 'icon.png',
    shadowUrl: 'icon.png',
});

var insertMarker= L.marker([22,92],{icon:greenIcon,draggable:true});
insertMarker.bindPopup('ESRI').openPopup();
insertMarker.addTo(map)

