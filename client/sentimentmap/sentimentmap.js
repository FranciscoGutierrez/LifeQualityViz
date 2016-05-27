Template.sentimentmap.onRendered(function() {
  $(document).ready(function() {
    var bounds = L.latLngBounds(
      L.latLng(25.499550, -127.276413), //Southwest
      L.latLng(53.162102, -62.233040)  //Northeast
    );

    var mymap = L.map('map',{
      maxBounds: bounds,
      zoomControl: false
    }).setView([32.8, -96.5], 4);

    L.tileLayer('https://api.mapbox.com/styles/v1/franciscoghz/ciomqnsgf000wasm4xcshhfdp/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      minZoom: 3,
      maxZoom: 4,
      id: 'franciscoghz.026h6h3d',
      accessToken: 'pk.eyJ1IjoiZnJhbmNpc2NvZ2h6IiwiYSI6ImNpbnV1Z3J4eTAwb3R2c2tscXgwMWs2eHEifQ.OrlG9so4YihIM4ccw59cHw'
    }).addTo(mymap);


    if (mymap.tap) mymap.tap.disable();
    mymap.dragging.disable();
    mymap.touchZoom.disable();
    mymap.doubleClickZoom.disable();
    mymap.scrollWheelZoom.disable();
    mymap.keyboard.disable();

    mymap.on('zoomend',function (e) {
      if(mymap.getZoom() == 3) $(".vp-vertical-container").fadeOut();
      if(mymap.getZoom() == 4) $(".vp-vertical-container").fadeIn();
    });

    var atlanta_css = L.divIcon({className: 'atlanta_css',iconSize: [50, 50],popupAnchor: [0, -51]});
    var denver_css  = L.divIcon({className: 'denver_css',iconSize: [50, 50],popupAnchor: [0, -51]});
    var houston_css = L.divIcon({className: 'houston_css',iconSize: [50, 50],popupAnchor: [0, -51]});
    var angeles_css = L.divIcon({className: 'angeles_css',iconSize: [50, 50],popupAnchor: [0, -51]});
    var seattle_css = L.divIcon({className: 'seattle_css',iconSize: [50, 50],popupAnchor: [0, -51]});
    var newyork_css = L.divIcon({className: 'newyork_css',iconSize: [50, 50],popupAnchor: [0, -51]});

    var atlanta = L.marker([33.749048, -84.388147],{clickable: false, icon: atlanta_css});
    var denver  = L.marker([39.739760, -104.98893],{clickable: false, icon: denver_css });
    var houston = L.marker([29.760957, -95.369576],{clickable: false, icon: houston_css});
    var angeles = L.marker([34.053578, -118.24264],{clickable: false, icon: angeles_css});
    var seattle = L.marker([47.606129, -122.33232],{clickable: false, icon: seattle_css});
    var newyork = L.marker([40.713071, -74.006270],{clickable: false, icon: newyork_css});

    atlanta.addTo(mymap);
    denver.addTo(mymap);
    houston.addTo(mymap);
    angeles.addTo(mymap);
    seattle.addTo(mymap);
    newyork.addTo(mymap);

    $(".atlanta_css").append("<p>Atlanta</p>");
    $(".denver_css").append("<p>Denver</p>");
    $(".houston_css").append("<p>Houston</p>");
    $(".angeles_css").append("<p>Los Ángeles</p>");
    $(".seattle_css").append("<p>Seattle</p>");
    $(".newyork_css").append("<p>New York</p>");

    $(".atlanta_css").append(""+
    "<div class='vp-vertical-container'>" +
    "<span>Happiness</span>" +
    "<div class='ubox-container'>"+
    "<div class='ubox ua1'></div><div class='ubox ua2'></div><div class='ubox ua3'></div><div class='ubox ua4'></div><div class='ubox ua5'></div><div class='ubox ua6'></div>" +
    "<div class='ubox ua5'></div><div class='ubox ua4'></div><div class='ubox ua3'></div><div class='ubox ua2'></div><div class='ubox ua1'></div>" +
    "</div>"+
    "<div class='vp-vertical'>"+
    "<div class='vp-upr css_atlanta-upr'>86</div>"+
    "<div class='vp-mdl css_atlanta-mdl'>79<div class='vp-d'>%</div></div>"+
    "<div class='vp-lwr css_atlanta-lwr'>35</div>"+
    "</div>"+
    "</div>")

    $(".denver_css").append(""+
    "<div class='vp-vertical-container'>" +
    "<span>Happiness</span>" +
    "<div class='ubox-container'>"+
    "<div class='ubox ua1'></div><div class='ubox ua2'></div><div class='ubox ua3'></div><div class='ubox ua4'></div><div class='ubox ua5'></div><div class='ubox ua6'></div>" +
    "<div class='ubox ua5'></div><div class='ubox ua4'></div><div class='ubox ua3'></div><div class='ubox ua2'></div><div class='ubox ua1'></div>" +
    "</div>"+
    "<div class='vp-vertical'>"+
    "<div class='vp-upr css_denver-upr'>86</div>"+
    "<div class='vp-mdl css_denver-mdl'>79<div class='vp-d'>%</div></div>"+
    "<div class='vp-lwr css_denver-lwr'>35</div>"+
    "</div>"+
    "</div>")

    $(".houston_css").append(""+
    "<div class='vp-vertical-container'>" +
    "<span>Happiness</span>" +
    "<div class='ubox-container'>"+
    "<div class='ubox ua1'></div><div class='ubox ua2'></div><div class='ubox ua3'></div><div class='ubox ua4'></div><div class='ubox ua5'></div><div class='ubox ua6'></div>" +
    "<div class='ubox ua5'></div><div class='ubox ua4'></div><div class='ubox ua3'></div><div class='ubox ua2'></div><div class='ubox ua1'></div>" +
    "</div>"+
    "<div class='vp-vertical'>"+
    "<div class='vp-upr css_houston-upr'>86</div>"+
    "<div class='vp-mdl css_houston-mdl'>79<div class='vp-d'>%</div></div>"+
    "<div class='vp-lwr css_houston-lwr'>35</div>"+
    "</div>"+
    "</div>")

    $(".angeles_css").append(""+
    "<div class='vp-vertical-container'>" +
    "<span>Happiness</span>" +
    "<div class='ubox-container'>"+
    "<div class='ubox ua1'></div><div class='ubox ua2'></div><div class='ubox ua3'></div><div class='ubox ua4'></div><div class='ubox ua5'></div><div class='ubox ua6'></div>" +
    "<div class='ubox ua5'></div><div class='ubox ua4'></div><div class='ubox ua3'></div><div class='ubox ua2'></div><div class='ubox ua1'></div>" +
    "</div>"+
    "<div class='vp-vertical'>"+
    "<div class='vp-upr css_angeles-upr'>86</div>"+
    "<div class='vp-mdl css_angeles-mdl'>79<div class='vp-d'>%</div></div>"+
    "<div class='vp-lwr css_angeles-lwr'>35</div>"+
    "</div>"+
    "</div>")

    $(".seattle_css").append(""+
    "<div class='vp-vertical-container'>" +
    "<span>Happiness</span>" +
    "<div class='ubox-container'>"+
    "<div class='ubox ua1'></div><div class='ubox ua2'></div><div class='ubox ua3'></div><div class='ubox ua4'></div><div class='ubox ua5'></div><div class='ubox ua6'></div>" +
    "<div class='ubox ua5'></div><div class='ubox ua4'></div><div class='ubox ua3'></div><div class='ubox ua2'></div><div class='ubox ua1'></div>" +
    "</div>"+
    "<div class='vp-vertical'>"+
    "<div class='vp-upr css_seattle-upr'>86</div>"+
    "<div class='vp-mdl css_seattle-mdl'>79<div class='vp-d'>%</div></div>"+
    "<div class='vp-lwr css_seattle-lwr'>35</div>"+
    "</div>"+
    "</div>")

    $(".newyork_css").append(""+
    "<div class='vp-vertical-container'>" +
    "<span>Happiness</span>" +
    "<div class='ubox-container'>"+
    "<div class='ubox ua1'></div><div class='ubox ua2'></div><div class='ubox ua3'></div><div class='ubox ua4'></div><div class='ubox ua5'></div><div class='ubox ua6'></div>" +
    "<div class='ubox ua5'></div><div class='ubox ua4'></div><div class='ubox ua3'></div><div class='ubox ua2'></div><div class='ubox ua1'></div>" +
    "</div>"+
    "<div class='vp-vertical'>"+
    "<div class='vp-upr css_newyork-upr'>86</div>"+
    "<div class='vp-mdl css_newyork-mdl'>79<div class='vp-d'>%</div></div>"+
    "<div class='vp-lwr css_newyork-lwr'>35</div>"+
    "</div>"+
    "</div>");

  });
});

Template.sentimentmap.helpers({
  atlanta() {
    var sum_city = [];
    var city_css = ".atlanta_css";
    var city = Cities.findOne({city:"atlanta"});
    var sum_x = [];
    var sum_y = [];
    var city_h = city.w2 - ((city.w2-city.w1)*(Session.get("strength-h")/100));
    var city_t = city.t2 - ((city.t2-city.t1)*(Session.get("strength-t")/100));
    var city_s = city.s2 - ((city.s2-city.s1)*(Session.get("strength-s")/100));
    var city_p = city.a2 - ((city.a2-city.a1)*(Session.get("strength-p")/100));

    if($(".health").attr("checked")) {
      sum_city.push(city_h);
      sum_x.push(city.w_m1);
      sum_y.push(city.w_m2);
    }

    if($(".traffic").attr("checked")) {
      sum_city.push(city_t);
      sum_x.push(city.t_m1);
      sum_y.push(city.t_m2);
    }

    if($(".safety").attr("checked")) {
      sum_city.push(city_s);
      sum_x.push(city.s_m1);
      sum_y.push(city.s_m2);
    }

    if($(".polluted").attr("checked")) {
      sum_city.push(city_p);
      sum_x.push(city.a_m1);
      sum_y.push(city.a_m2);
    }
    var city = sum_city.reduce((a,b)=>a+b,0)/sum_city.length;
    var x = sum_x.reduce((a,b)=>a+b,0)/sum_x.length;
    var y = sum_y.reduce((a,b)=>a+b,0)/sum_y.length;
    var pred = ((y * city) + x)*10;
    if(city  >  0) {
      $(city_css).css("background-image","url('/faces/33.png')");
      if(pred>33)  $(city_css).css("background-image","url('/faces/32.png')");
      if(pred>66)  $(city_css).css("background-image","url('/faces/31.png')");
    }
    if(city  > 33) {
      $(city_css).css("background-image","url('/faces/23.png')");
      if(pred>33)  $(city_css).css("background-image","url('/faces/22.png')");
      if(pred>66)  $(city_css).css("background-image","url('/faces/21.png')");
    }
    if(city  > 66) {
      $(city_css).css("background-image","url('/faces/13.png')");
      if(pred>33)  $(city_css).css("background-image","url('/faces/12.png')");
      if(pred>66)  $(city_css).css("background-image","url('/faces/11.png')");
    }
    $(".css_atlanta-upr").text(Math.round(pred+10));
    $(".css_atlanta-mdl").text(Math.round(pred));
    $(".css_atlanta-lwr").text(Math.round(pred-10));
    return city;
  },
  denver() {
    var sum_city = [];
    var city_css = ".denver_css";
    var city = Cities.findOne({city:"denver"});
    var sum_x = [];
    var sum_y = [];
    var city_h = city.w2 - ((city.w2-city.w1)*(Session.get("strength-h")/100));
    var city_t = city.t2 - ((city.t2-city.t1)*(Session.get("strength-t")/100));
    var city_s = city.s2 - ((city.s2-city.s1)*(Session.get("strength-s")/100));
    var city_p = city.a2 - ((city.a2-city.a1)*(Session.get("strength-p")/100));

    if($(".health").attr("checked")) {
      sum_city.push(city_h);
      sum_x.push(city.w_m1);
      sum_y.push(city.w_m2);
    }

    if($(".traffic").attr("checked")) {
      sum_city.push(city_t);
      sum_x.push(city.t_m1);
      sum_y.push(city.t_m2);
    }

    if($(".safety").attr("checked")) {
      sum_city.push(city_s);
      sum_x.push(city.s_m1);
      sum_y.push(city.s_m2);
    }

    if($(".polluted").attr("checked")) {
      sum_city.push(city_p);
      sum_x.push(city.a_m1);
      sum_y.push(city.a_m2);
    }
    var city = sum_city.reduce((a,b)=>a+b,0)/sum_city.length;
    var x = sum_x.reduce((a,b)=>a+b,0)/sum_x.length;
    var y = sum_y.reduce((a,b)=>a+b,0)/sum_y.length;

    var pred = ((y * city) + x)*10;

    if(city  >  0) {
      $(city_css).css("background-image","url('/faces/33.png')");
      if(pred>33)  $(city_css).css("background-image","url('/faces/32.png')");
      if(pred>66)  $(city_css).css("background-image","url('/faces/31.png')");
    }
    if(city  > 33) {
      $(city_css).css("background-image","url('/faces/23.png')");
      if(pred>33)  $(city_css).css("background-image","url('/faces/22.png')");
      if(pred>66)  $(city_css).css("background-image","url('/faces/21.png')");
    }
    if(city  > 66) {
      $(city_css).css("background-image","url('/faces/13.png')");
      if(pred>33)  $(city_css).css("background-image","url('/faces/12.png')");
      if(pred>66)  $(city_css).css("background-image","url('/faces/11.png')");
    }
    $(".css_denver-upr").text(Math.round(pred+10));
    $(".css_denver-mdl").text(Math.round(pred));
    $(".css_denver-lwr").text(Math.round(pred-10));
    return city;
  },
  seattle() {
    var sum_city = [];
    var city_css = ".seattle_css";
    var city = Cities.findOne({city:"seattle"});
    var sum_x = [];
    var sum_y = [];
    var city_h = city.w2 - ((city.w2-city.w1)*(Session.get("strength-h")/100));
    var city_t = city.t2 - ((city.t2-city.t1)*(Session.get("strength-t")/100));
    var city_s = city.s2 - ((city.s2-city.s1)*(Session.get("strength-s")/100));
    var city_p = city.a2 - ((city.a2-city.a1)*(Session.get("strength-p")/100));

    if($(".health").attr("checked")) {
      sum_city.push(city_h);
      sum_x.push(city.w_m1);
      sum_y.push(city.w_m2);
    }

    if($(".traffic").attr("checked")) {
      sum_city.push(city_t);
      sum_x.push(city.t_m1);
      sum_y.push(city.t_m2);
    }

    if($(".safety").attr("checked")) {
      sum_city.push(city_s);
      sum_x.push(city.s_m1);
      sum_y.push(city.s_m2);
    }

    if($(".polluted").attr("checked")) {
      sum_city.push(city_p);
      sum_x.push(city.a_m1);
      sum_y.push(city.a_m2);
    }
    var city = sum_city.reduce((a,b)=>a+b,0)/sum_city.length;
    var x = sum_x.reduce((a,b)=>a+b,0)/sum_x.length;
    var y = sum_y.reduce((a,b)=>a+b,0)/sum_y.length;

    var pred = ((y * city) + x)*10;
    if(city  >  0) {
      $(city_css).css("background-image","url('/faces/33.png')");
      if(pred>33)  $(city_css).css("background-image","url('/faces/32.png')");
      if(pred>66)  $(city_css).css("background-image","url('/faces/31.png')");
    }
    if(city  > 33) {
      $(city_css).css("background-image","url('/faces/23.png')");
      if(pred>33)  $(city_css).css("background-image","url('/faces/22.png')");
      if(pred>66)  $(city_css).css("background-image","url('/faces/21.png')");
    }
    if(city  > 66) {
      $(city_css).css("background-image","url('/faces/13.png')");
      if(pred>33)  $(city_css).css("background-image","url('/faces/12.png')");
      if(pred>66)  $(city_css).css("background-image","url('/faces/11.png')");
    }
    $(".css_seattle-upr").text(Math.round(pred+10));
    $(".css_seattle-mdl").text(Math.round(pred));
    $(".css_seattle-lwr").text(Math.round(pred-10));
    return city;
  },
  angeles() {
    var sum_city = [];
    var city_css = ".angeles_css";
    var city = Cities.findOne({city:"angeles"});
    var sum_x = [];
    var sum_y = [];
    var city_h = city.w2 - ((city.w2-city.w1)*(Session.get("strength-h")/100));
    var city_t = city.t2 - ((city.t2-city.t1)*(Session.get("strength-t")/100));
    var city_s = city.s2 - ((city.s2-city.s1)*(Session.get("strength-s")/100));
    var city_p = city.a2 - ((city.a2-city.a1)*(Session.get("strength-p")/100));

    if($(".health").attr("checked")) {
      sum_city.push(city_h);
      sum_x.push(city.w_m1);
      sum_y.push(city.w_m2);
    }

    if($(".traffic").attr("checked")) {
      sum_city.push(city_t);
      sum_x.push(city.t_m1);
      sum_y.push(city.t_m2);
    }

    if($(".safety").attr("checked")) {
      sum_city.push(city_s);
      sum_x.push(city.s_m1);
      sum_y.push(city.s_m2);
    }

    if($(".polluted").attr("checked")) {
      sum_city.push(city_p);
      sum_x.push(city.a_m1);
      sum_y.push(city.a_m2);
    }
    var city = sum_city.reduce((a,b)=>a+b,0)/sum_city.length;
    var x = sum_x.reduce((a,b)=>a+b,0)/sum_x.length;
    var y = sum_y.reduce((a,b)=>a+b,0)/sum_y.length;

    var pred = ((y * city) + x)*10;
    if(city  >  0) {
      $(city_css).css("background-image","url('/faces/33.png')");
      if(pred>33)  $(city_css).css("background-image","url('/faces/32.png')");
      if(pred>66)  $(city_css).css("background-image","url('/faces/31.png')");
    }
    if(city  > 33) {
      $(city_css).css("background-image","url('/faces/23.png')");
      if(pred>33)  $(city_css).css("background-image","url('/faces/22.png')");
      if(pred>66)  $(city_css).css("background-image","url('/faces/21.png')");
    }
    if(city  > 66) {
      $(city_css).css("background-image","url('/faces/13.png')");
      if(pred>33)  $(city_css).css("background-image","url('/faces/12.png')");
      if(pred>66)  $(city_css).css("background-image","url('/faces/11.png')");
    }
    $(".css_angeles-upr").text(Math.round(pred+10));
    $(".css_angeles-mdl").text(Math.round(pred));
    $(".css_angeles-lwr").text(Math.round(pred-10));
    return city;
  },
  houston() {
    var sum_city = [];
    var city_css = ".houston_css";
    var city = Cities.findOne({city:"houston"});
    var sum_x = [];
    var sum_y = [];
    var city_h = city.w2 - ((city.w2-city.w1)*(Session.get("strength-h")/100));
    var city_t = city.t2 - ((city.t2-city.t1)*(Session.get("strength-t")/100));
    var city_s = city.s2 - ((city.s2-city.s1)*(Session.get("strength-s")/100));
    var city_p = city.a2 - ((city.a2-city.a1)*(Session.get("strength-p")/100));

    if($(".health").attr("checked")) {
      sum_city.push(city_h);
      sum_x.push(city.w_m1);
      sum_y.push(city.w_m2);
    }

    if($(".traffic").attr("checked")) {
      sum_city.push(city_t);
      sum_x.push(city.t_m1);
      sum_y.push(city.t_m2);
    }

    if($(".safety").attr("checked")) {
      sum_city.push(city_s);
      sum_x.push(city.s_m1);
      sum_y.push(city.s_m2);
    }

    if($(".polluted").attr("checked")) {
      sum_city.push(city_p);
      sum_x.push(city.a_m1);
      sum_y.push(city.a_m2);
    }
    var city = sum_city.reduce((a,b)=>a+b,0)/sum_city.length;
    var x = sum_x.reduce((a,b)=>a+b,0)/sum_x.length;
    var y = sum_y.reduce((a,b)=>a+b,0)/sum_y.length;

    var pred = ((y * city) + x)*10;
    if(city  >  0) {
      $(city_css).css("background-image","url('/faces/33.png')");
      if(pred>33)  $(city_css).css("background-image","url('/faces/32.png')");
      if(pred>66)  $(city_css).css("background-image","url('/faces/31.png')");
    }
    if(city  > 33) {
      $(city_css).css("background-image","url('/faces/23.png')");
      if(pred>33)  $(city_css).css("background-image","url('/faces/22.png')");
      if(pred>66)  $(city_css).css("background-image","url('/faces/21.png')");
    }
    if(city  > 66) {
      $(city_css).css("background-image","url('/faces/13.png')");
      if(pred>33)  $(city_css).css("background-image","url('/faces/12.png')");
      if(pred>66)  $(city_css).css("background-image","url('/faces/11.png')");
    }
    $(".css_houston-upr").text(Math.round(pred+10));
    $(".css_houston-mdl").text(Math.round(pred));
    $(".css_houston-lwr").text(Math.round(pred-10));
    return city;
  },
  newyork() {
    var sum_city = [];
    var city_css = ".newyork_css";
    var city = Cities.findOne({city:"newyork"});
    var sum_x = [];
    var sum_y = [];
    var city_h = city.w2 - ((city.w2-city.w1)*(Session.get("strength-h")/100));
    var city_t = city.t2 - ((city.t2-city.t1)*(Session.get("strength-t")/100));
    var city_s = city.s2 - ((city.s2-city.s1)*(Session.get("strength-s")/100));
    var city_p = city.a2 - ((city.a2-city.a1)*(Session.get("strength-p")/100));

    if($(".health").attr("checked")) {
      sum_city.push(city_h);
      sum_x.push(city.w_m1);
      sum_y.push(city.w_m2);
    }

    if($(".traffic").attr("checked")) {
      sum_city.push(city_t);
      sum_x.push(city.t_m1);
      sum_y.push(city.t_m2);
    }

    if($(".safety").attr("checked")) {
      sum_city.push(city_s);
      sum_x.push(city.s_m1);
      sum_y.push(city.s_m2);
    }

    if($(".polluted").attr("checked")) {
      sum_city.push(city_p);
      sum_x.push(city.a_m1);
      sum_y.push(city.a_m2);
    }
    var city = sum_city.reduce((a,b)=>a+b,0)/sum_city.length;
    var x = sum_x.reduce((a,b)=>a+b,0)/sum_x.length;
    var y = sum_y.reduce((a,b)=>a+b,0)/sum_y.length;

    var pred = ((y * city) + x)*10;
    if(city  >  0) {
      $(city_css).css("background-image","url('/faces/33.png')");
      if(pred>33)  $(city_css).css("background-image","url('/faces/32.png')");
      if(pred>66)  $(city_css).css("background-image","url('/faces/31.png')");
    }
    if(city  > 33) {
      $(city_css).css("background-image","url('/faces/23.png')");
      if(pred>33)  $(city_css).css("background-image","url('/faces/22.png')");
      if(pred>66)  $(city_css).css("background-image","url('/faces/21.png')");
    }
    if(city  > 66) {
      $(city_css).css("background-image","url('/faces/13.png')");
      if(pred>33)  $(city_css).css("background-image","url('/faces/12.png')");
      if(pred>66)  $(city_css).css("background-image","url('/faces/11.png')");
    }
    $(".css_newyork-upr").text(Math.round(pred+10));
    $(".css_newyork-mdl").text(Math.round(pred));
    $(".css_newyork-lwr").text(Math.round(pred-10));
    return city;
  }

});
