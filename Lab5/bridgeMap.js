let USACoordinates = [37.0902, -95.7129]
let zoomLevel = 5

let map = L.map('bridge-map').setView(USACoordinates, zoomLevel)
// you can change the style layer by changing the link
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', 
{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
id:'mapbox.streets',
accessToken: 'pk.eyJ1IjoiZXJ1ZHppbnNraSIsImEiOiJjazZzOTVtdG4wMTc2M2xzMTJqOTl6aWl1In0.oLLnwr775fx_QReZjgtgbQ'})
.addTo(map)
// creates an object with stored properties  

let bridges = [
{'bridgeName': 'Varrazano-Narrows Bridge', 'cityState': 'New York, NY', 'span': '1298.4', 'coordinates': [40.6066, -74.0447] },
{'bridgeName': 'Golden Gate Bridge', 'cityState': 'San Francisco and Marin, CA', 'span': '1280.2', 'coordinates': [37.8199, -122.4783] },
{'bridgeName': 'Mackinac Bridge,', 'cityState': 'Mackinaw and St. Ignace, MI', 'span': '1158', 'coordinates': [45.8174, -84.7278] },
{'bridgeName': 'George Washington Bridge', 'cityState': 'New York, NY and New Jersey, NJ', 'span': '1067', 'coordinates': [40.8517, -73.9527] },
{'bridgeName': 'Tacoma Narrows Bridge', 'cityState':'Tacoma and Kitsap, WA', 'span': '853.44', 'coordinates': [47.269, -122.5517]},
]
let bridgeIcon = L.icon({
    iconUrl:'conBridge.jpg',
    iconSize:[38, 95],
    iconAnchor:[22, 94],
    popupAnchor:  [-3, -76]

})
//The for statement sets and incroments x and then uses it to count through our bridges object
for (let x = 0; x < bridges.length; x++){
    //this accesses each part of the object and assigns it a task
    let bridgeMarker= L.marker(bridges[x].coordinates, {icon: bridgeIcon}).bindPopup(`${bridges[x].bridgeName}<br>Located: ${bridges[x].cityState}<br>Bridge Span(Meters):${bridges[x].span}`).addTo(map)
}