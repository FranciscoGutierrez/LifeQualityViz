Template.sentimentmap.onRendered(function() {
  $(document).ready(function() {
    var mymap = L.map('map').setView([40.7128, -74.0059], 12);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      maxZoom: 18,
      id: 'franciscoghz.026h6h3d',
      accessToken: 'pk.eyJ1IjoiZnJhbmNpc2NvZ2h6IiwiYSI6ImNpbnV1Z3J4eTAwb3R2c2tscXgwMWs2eHEifQ.OrlG9so4YihIM4ccw59cHw'
    }).addTo(mymap);

    var iconPositive = L.divIcon({className: 'tweet-icon-positive'});
    var iconNegative = L.divIcon({className: 'tweet-icon-negative'});

    L.marker([40.7128, -74.0059],{clickable: false, icon: iconPositive}).addTo(mymap);
    L.marker([40.7314, -74.0159],{clickable: false, icon: iconPositive}).addTo(mymap);
    L.marker([40.7251, -74.0379],{clickable: false, icon: iconPositive}).addTo(mymap);
    L.marker([40.739434, -74.041878],{clickable: false, icon: iconNegative}).addTo(mymap);
  });
});
