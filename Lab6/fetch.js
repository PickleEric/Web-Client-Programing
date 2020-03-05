let url = 'https://api.wheretheiss.at/v1/satellites/25544'

let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')

let issMarker
let update = 10000

let map = L.map('iss-map').setView([0, 0], 1)
// you can change the style layer by changing the link
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', 
{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
id:'mapbox.streets',
accessToken: 'pk.eyJ1IjoiZXJ1ZHppbnNraSIsImEiOiJjazZzOTVtdG4wMTc2M2xzMTJqOTl6aWl1In0.oLLnwr775fx_QReZjgtgbQ'})
.addTo(map)

let timeElement = document.querySelector('#set-time')

setInterval(() => {
    let date = Date()
    timeElement.innerHTML = date
}, 1000)

let issIcon = L.icon({
    iconUrl:'iss.png',
    iconSize:[20, 40],
    iconAnchor:[22, 94],
    popupAnchor:  [-3, -76]

})
let maxFailedAttempts = 3
iss(maxFailedAttempts)
setInterval(iss, update)

function iss(attempts){
    if (attempts <= 0) {
        console.log('Too many errors, abandoning requests to get ISS position.')
        return
    }
fetch(url)
    .then( (res) => res.json())
    .then( issData => {
        console.log(issData)
        let lat = issData.latitude
        let long = issData.longitude
        issLat.innerHTML = lat
        issLong.innerHTML = long
        
        if(!issMarker) {
            issMarker= L.marker([lat, long], {icon: issIcon}).addTo(map)
        } else {
            issMarker.setLatLng([lat, Long])
        }
    })
    .catch ( err => {
        console.log(err)
    })
    .finally( () => {
        setTimeout(iss, update, attempts)
    })
}