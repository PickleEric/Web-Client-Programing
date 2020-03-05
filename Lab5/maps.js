let metroAreaCenterCoordinates = [44.96, -93.2]
let zoomLevel = 9

let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)
// you can change the style layer by changing the link
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', 
{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
id:'mapbox.streets',
accessToken: 'pk.eyJ1IjoiZXJ1ZHppbnNraSIsImEiOiJjazZsaXAyM3kwZmdrM2RudjE5NWp3dnI4In0.nPLjqzttFfpCRXJsdD3M4A'})
.addTo(map)
// add some markers 
let mctcCoordinates = [44.9724, -93.2844]
let mctcMarker = L.marker(mctcCoordinates).addTo(map)
    .bindPopup('Minneapolis College<br><a href="https://minneapolis.edu">Website</a>')
    .addTo(map)
let stPaulCoordinates = [44.94839, -93.1099]
let stpMarker = L.marker(stPaulCoordinates).addTo(map)
    .bindPopup('Saint Paul College<br><a href="https://saintpaul.edu">Website</a>')
    .addTo(map)

let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
    color: 'green',
    radius: 3000,
    fillOpacity: 0.2
})
let campuses = [
{'name': 'Minneapolis College', 'website': 'https://minneapolis.edu', 'coordinates': [44.9724, -93.2844] },
{'name': 'Saint Paul College', 'website': 'https://saintpaul.edu', 'coordinates': [44.94839, -93.1099] },
{'name': 'Normandale Community College', 'website': 'https://normandale.edu', 'coordinates': [44.8297, -93.3312] },
{'name': 'North Hennepin Community College', 'website': 'https://nhcc.edu', 'coordinates': [45.1054232,-93.3767558] },
{'name': 'Century College', 'website': 'http//century.edu', 'coordinates': [45.0438494, -92.9862026]},
]
for (let x = 0; x < campuses.length; x++){
    let campusMarker= L.marker(campuses[x].coordinates).bindPopup(`${campuses[x].name}<br><a href = '${campuses[x].website}'>Website</a>`).addTo(map)
}