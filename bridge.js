// where in the world?

// customize these numbers

let mapCenter = [45, -93]
let zoomLevel = 5

let bridgeMap = L.map('bridge-map').setView(mapCenter, zoomLevel)

// how much are we zoomed in/out?


// tiles - the pictures that make up the map

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',
}).addTo(bridgeMap)

// when we have a set of objects, and they are all similar...
// it's common to o store these as an array of objects.

// { name: Golden gate bridge',
//   city: 'San Franciso',
//   span: '1234m',
//   location: {35, -105},
//   }


let bridgeList = [
    {name: 'Verrazano-Narrows Bridge', location: 'New York, NY', span: '1298.4', coordinates: [40.6066, -74.0447]}
]

bridgeList.forEach(function(bridgeObject) {
    let bridgeName = bridgeObject.name
    let bridgeCoordinates = bridgeObject.coordinates

    // draw a marker
    // todo- add a popup label - see videos or leaflet docs

    let bridgeMarker = L.marker(bridgeCoordinates)
    bridgeMarker.addTo(bridgeMap)


})