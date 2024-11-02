// where in the world?
// customize these numbers

let mapCenter = [45, -93]
let zoomLevel = 4

let bridgeMap = L.map('bridge-map').setView(mapCenter, zoomLevel)

// how much are we zoomed in/out?

// tiles - the pictures that make up the map

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',
}).addTo(bridgeMap)

// when we have a set of objects, and they are all similar...
// it's common to store these as an array of objects.

// { name: Golden gate bridge',
//   city: 'San Francisco',
//   span: '1234m',
//   location: {35, -105},
//   }

// define all bridges for our bridgeMap
let bridgeList = [
    {name: 'Verrazano-Narrows Bridge', location: 'New York, NY', span: '1298.4', coordinates: [40.6066, -74.0447]},
    {name: 'Golden Gate Bridge', location: 'San Francisco and Marin, CA', span: '1280.2', coordinates: [37.8199, -122.4783] },
    {name: 'Mackinac Bridge', location: 'Saint Ignace, Michigan', span: '1158.0', coordinates: [45.8174, -84.7278]},
    {name: 'George Washington Bridge', location: 'Fort Lee, New Jersey', span: '1067.0', coordinates: [40.8517, -73.9527]},
    {name: 'Tacoma Narrows Bridge', location: 'Tacoma, Washington', span: '853.44', coordinates: [47.2690, -122.5517] }
]

let longestSpan = bridgeList[0]
// initialize longestSpan variable to find the longest bridge within bridgeList object

bridgeList.forEach(function(bridgeObject) {
    // iterate over bridgeList array
    // need to convert span to float to compare...
    // using if-else statement to compare elements in bridgeList
    if (parseFloat(bridgeObject.span) > parseFloat(longestSpan.span)) {
        // comparing sizes of span elements in bridgeObject
        longestSpan = bridgeObject;
    }       // end of if-else statement to find the longest span in bridgeList
});


bridgeList.forEach(function(bridgeObject) {
    let bridgeName = bridgeObject.name
    let bridgeCoordinates = bridgeObject.coordinates
    let bridgeSpan = bridgeObject.span

    // draw a marker
    // todo- add a popup label - see videos or leaflet docs

    if (bridgeObject === longestSpan) {     // if-else statement to decide what icon to use!
        bridgeIcon = L.icon({
            iconUrl: 'redBridgeIcon.png',       // red bridge icon for the longest bridge on list
            iconSize: [38, 55],             // resizing the bridge icon
        })
    } else {
        bridgeIcon = L.icon({
            iconUrl: 'bridgeIcon.png',      // regular bridge icon for the other 4 bridges on the list
            iconSize: [38, 55],         // resizing the bridge icon
        })
    }
    // format popup for bridge marker's using HTML below...
    let popupContent = `<b>${bridgeObject.name}</b> <br> Longest Main Span: ${bridgeObject.span}`
    // add our popup content to our bridge markers
    let bridgeMarker = L.marker(bridgeCoordinates, {icon: bridgeIcon}).bindPopup(popupContent).addTo(bridgeMap)
    // add our bridge markers to our Leaflet map.
    // must define our custom icon along with our Leaflet marker...
    // define our popupContent for our popups...
    // and finally, add to bridgeMap.

})  // end of bridgeList function

// Bridge Data
let bridges = [
    { name: "Verrazzano-Narrows Bridge", city: "New York, NY", span: 1298.4 },
    { name: "Golden Gate Bridge", city: "San Francisco and Marin, CA", span: 1280.2 },
    { name: "Mackinac Bridge", city: "Mackinaw and St Ignace, MI", span: 1158.0 },
    { name: "George Washington Bridge", city: "New York, NY and New Jersey, NJ", span: 1067.0 },
    { name: "Tacoma Narrows Bridge", city: "Tacoma and Kitsap, WA", span: 853.44 }
];

let bridgeNames = bridges.map(bridge => bridge.name);
let bridgeSpans = bridges.map(bridge => bridge.span);

// Set up the Chart.js bar chart
let ctx = document.getElementById('bar-chart').getContext('2d');
let bridgeChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: bridgeNames,
        datasets: [{
            label: 'Span Length (meters)',
            data: bridgeSpans,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
