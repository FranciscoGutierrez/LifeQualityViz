Template.sentimentmap.onRendered(function() {
  $(document).ready(function() {
    var mymap = L.map('map').setView([40.7128, -74.0059], 12);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      maxZoom: 18,
      id: 'franciscoghz.026h6h3d',
      accessToken: 'pk.eyJ1IjoiZnJhbmNpc2NvZ2h6IiwiYSI6ImNpbnV1Z3J4eTAwb3R2c2tscXgwMWs2eHEifQ.OrlG9so4YihIM4ccw59cHw'
    }).addTo(mymap);

    var smiley = L.divIcon({
      className: 'tweet-face',
      iconSize: [50, 50],
      //iconAnchor: [20, 51],
      popupAnchor: [0, -51]
    });

    L.marker([33.749048, -84.388147],{clickable: false, icon: smiley}).addTo(mymap);
    L.marker([42.360331, -71.057971],{clickable: false, icon: smiley}).addTo(mymap);
    L.marker([41.879193, -87.631809],{clickable: false, icon: smiley}).addTo(mymap);
    L.marker([32.776804, -96.797404],{clickable: false, icon: smiley}).addTo(mymap);
    L.marker([39.739163, -104.990301],{clickable: false, icon: smiley}).addTo(mymap);
    L.marker([29.760957, -95.369576],{clickable: false, icon: smiley}).addTo(mymap);
    L.marker([34.053578, -118.242646],{clickable: false, icon: smiley}).addTo(mymap);
    L.marker([37.775034, -122.419311],{clickable: false, icon: smiley}).addTo(mymap);
    L.marker([47.606129, -122.332329],{clickable: false, icon: smiley}).addTo(mymap);
    L.marker([40.713071, -74.006270],{clickable: false, icon: smiley}).addTo(mymap);
  });
});
