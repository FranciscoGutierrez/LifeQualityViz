Template.sentimentmap.onRendered(function() {
  $(document).ready(function() {
    var mymap = L.map('map',{zoomControl: false}).setView([42.7, -99.5], 4);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      maxZoom: 18,
      id: 'franciscoghz.026h6h3d',
      accessToken: 'pk.eyJ1IjoiZnJhbmNpc2NvZ2h6IiwiYSI6ImNpbnV1Z3J4eTAwb3R2c2tscXgwMWs2eHEifQ.OrlG9so4YihIM4ccw59cHw'
    }).addTo(mymap);

    if (mymap.tap) mymap.tap.disable();
    mymap.dragging.disable();
    mymap.touchZoom.disable();
    mymap.doubleClickZoom.disable();
    mymap.scrollWheelZoom.disable();
    mymap.keyboard.disable();

    var atlanta_css = L.divIcon({className: 'tweet-face',iconSize: [50, 50],popupAnchor: [0, -51]});
    var boston_css  = L.divIcon({className: 'tweet-face',iconSize: [50, 50],popupAnchor: [0, -51]});
    var chicago_css = L.divIcon({className: 'tweet-face',iconSize: [50, 50],popupAnchor: [0, -51]});
    var dallas_css  = L.divIcon({className: 'tweet-face',iconSize: [50, 50],popupAnchor: [0, -51]});
    var denver_css  = L.divIcon({className: 'tweet-face',iconSize: [50, 50],popupAnchor: [0, -51]});
    var houston_css = L.divIcon({className: 'tweet-face',iconSize: [50, 50],popupAnchor: [0, -51]});
    var angeles_css = L.divIcon({className: 'tweet-face',iconSize: [50, 50],popupAnchor: [0, -51]});
    var francis_css = L.divIcon({className: 'tweet-face',iconSize: [50, 50],popupAnchor: [0, -51]});
    var seattle_css = L.divIcon({className: 'tweet-face',iconSize: [50, 50],popupAnchor: [0, -51]});
    var newyork_css = L.divIcon({className: 'tweet-face',iconSize: [50, 50],popupAnchor: [0, -51]});

    var atlanta = L.marker([33.749048, -84.388147],{clickable: false, icon: atlanta_css});
    var boston  = L.marker([42.360331, -71.057971],{clickable: false, icon: boston_css });
    var chicago = L.marker([41.879193, -87.631809],{clickable: false, icon: chicago_css});
    var dallas  = L.marker([32.776804, -96.797404],{clickable: false, icon: dallas_css });
    var denver  = L.marker([39.739163, -104.99030],{clickable: false, icon: denver_css });
    var houston = L.marker([29.760957, -95.369576],{clickable: false, icon: houston_css});
    var angeles = L.marker([34.053578, -118.24264],{clickable: false, icon: angeles_css});
    var francis = L.marker([37.775034, -122.41931],{clickable: false, icon: francis_css});
    var seattle = L.marker([47.606129, -122.33232],{clickable: false, icon: seattle_css});
    var newyork = L.marker([40.713071, -74.006270],{clickable: false, icon: newyork_css});

    atlanta.addTo(mymap); boston.addTo(mymap);
    chicago.addTo(mymap); dallas.addTo(mymap);
    denver.addTo(mymap);  houston.addTo(mymap);
    angeles.addTo(mymap); francis.addTo(mymap);
    seattle.addTo(mymap); newyork.addTo(mymap);
  });
});

Template.sentimentmap.helpers({
  strength() {
    var sum_c = [];
    var h = city.w2 - ((city.w2-city.w1)*(Session.get("strength-h")/100));
    var t = city.t2 - ((city.t2-city.t1)*(Session.get("strength-t")/100));
    var s = city.s2 - ((city.s2-city.s1)*(Session.get("strength-s")/100));
    var p = city.a2 - ((city.a2-city.a1)*(Session.get("strength-p")/100));
    if($(".health").attr("checked"))   sum_c.push(h);
    if($(".traffic").attr("checked"))  sum_c.push(t);
    if($(".safety").attr("checked"))   sum_c.push(s);
    if($(".polluted").attr("checked")) sum_c.push(p);
    return  sum_c.reduce((a,b)=>a+b,0)/sum_c.length;
  }
});
