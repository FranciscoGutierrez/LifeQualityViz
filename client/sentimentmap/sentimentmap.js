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
    "<div class='vp-vertical-container vp-atlanta'>" +
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
    "<div class='vp-vertical-container vp-denver'>" +
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
    "<div class='vp-vertical-container vp-houston'>" +
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
    "<div class='vp-vertical-container vp-angeles'>" +
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
    "<div class='vp-vertical-container vp-seattle'>" +
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
    "<div class='vp-vertical-container vp-newyork'>" +
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
    var sum_c = [];
    var sum_b = [];
    var sum_x = [];
    var sum_y = [];
    var sum_upr1 = [];
    var sum_upr2 = [];
    var sum_lwr1 = [];
    var sum_lwr2 = [];
    var r_w = Session.get("strength-h")/100;
    var r_t = Session.get("strength-t")/100;
    var r_s = Session.get("strength-s")/100;
    var r_p = Session.get("strength-p")/100;
    var weather   = ((city.w1 + city.w2)/2) * r_w;
    var traffic   = ((city.t1 + city.t2)/2) * r_t;
    var safety    = ((city.s1 + city.s2)/2) * r_s;
    var pollution = ((city.a1 + city.a2)/2) * r_p;
    if($('paper-checkbox[checked]').length == 1) {
      if($(".health").attr("checked")) {
        var mean = ((city.w1 + city.w2)/2);
        weather = city.w2 - ((city.w2-city.w1)*(r_w));
        if(mean > 50) weather  = city.w1 - ((city.w1-city.w2)*(r_w));
      }
      if($(".traffic").attr("checked")) {
        var mean = ((city.t1 + city.t2)/2);
        traffic = city.t2 - ((city.t2-city.t1)*(r_t));
        if(mean > 50) traffic = city.t1 - ((city.t1-city.t2)*(r_t));
      }
      if($(".safety").attr("checked")) {
        var mean = ((city.s1 + city.s2)/2);
        safety = city.s2 - ((city.s2-city.s1)*(r_s));
        if(mean > 50) safety = city.s1 - ((city.s1-city.s2)*(r_s));
      }
      if($(".polluted").attr("checked")) {
        var mean = ((city.a1 + city.a2)/2);
        pollution = city.a2 - ((city.a2-city.a1)*(r_p));
        if(mean > 50) pollution = city.a1 - ((city.a1-city.a2)*(r_p));
      }
    }
    if($(".health").attr("checked")) {
      sum_c.push(weather);
      sum_b.push(r_w);
      sum_x.push(city.w_m1);
      sum_y.push(city.w_m2);
      sum_upr1.push(city.w_upr_min);
      sum_upr2.push(city.w_upr_max);
      sum_lwr1.push(city.w_lwr_min);
      sum_lwr2.push(city.w_lwr_max);
    }
    if($(".traffic").attr("checked")) {
      sum_c.push(traffic);
      sum_b.push(r_t);
      sum_x.push(city.t_m1);
      sum_y.push(city.t_m2);
      sum_upr1.push(city.t_upr_min);
      sum_upr2.push(city.t_upr_max);
      sum_lwr1.push(city.t_lwr_min);
      sum_lwr2.push(city.t_lwr_max);
    }
    if($(".safety").attr("checked")) {
      sum_c.push(safety);
      sum_b.push(r_s);
      sum_x.push(city.s_m1);
      sum_y.push(city.s_m2);
      sum_upr1.push(city.s_upr_min);
      sum_upr2.push(city.s_upr_max);
      sum_lwr1.push(city.s_lwr_min);
      sum_lwr2.push(city.s_lwr_max);
    }
    if($(".polluted").attr("checked")) {
      sum_c.push(pollution);
      sum_b.push(r_p);
      sum_x.push(city.a_m1);
      sum_y.push(city.a_m2);
      sum_upr1.push(city.a_upr_min);
      sum_upr2.push(city.a_upr_max);
      sum_lwr1.push(city.a_lwr_min);
      sum_lwr2.push(city.a_lwr_max);
    }
    var c = (sum_c.reduce((a,b)=>a+b,0))/(sum_b.reduce((a,b)=>a+b,0));
    if($('paper-checkbox[checked]').length == 1) c = (sum_c.reduce((a,b)=>a+b,0));
    var x = sum_x.reduce((a,b)=>a+b,0)/sum_x.length;
    var y = sum_y.reduce((a,b)=>a+b,0)/sum_y.length;
    var upr1 = sum_upr1.reduce((a,b)=>a+b,0)/sum_upr1.length; //min
    var upr2 = sum_upr2.reduce((a,b)=>a+b,0)/sum_upr2.length; //max
    var lwr1 = sum_lwr1.reduce((a,b)=>a+b,0)/sum_lwr1.length; //min
    var lwr2 = sum_lwr2.reduce((a,b)=>a+b,0)/sum_lwr2.length; //max
    if(isNaN(c)) c = 0;
    if(isNaN(x)) x = 0;
    if(isNaN(y)) y = 0;
    if(isNaN(upr1)) upr1 = 0;
    if(isNaN(upr2)) upr2 = 0;
    if(isNaN(lwr1)) lwr1 = 0;
    if(isNaN(lwr2)) lwr2 = 0;
    var upr = (y*100)+x;
    var lwr = x;
    var r_upr2 = (((upr2 - upr )/5) * 20);
    var r_upr1 = (((upr1 - lwr )/5) * 20);
    var r_lwr2 = (((upr  - lwr2)/5) * 20);
    var r_lwr1 = (((lwr  - lwr1)/5) * 20);
    var p = (upr2-(((y * 100) + x))/5)*1.2;
    var dots = (((y * c) + x)*20);
    var text = Math.round(((dots/20)*10));
    var qol  = Math.round(c);
    if(isNaN(text)) text = 0;
    if(isNaN(qol))   qol = 0;
    var upr = (y*100)+x;
    var lwr = x;
    var top = (((upr2 - upr1)/100) * (qol)) + upr1;
    var bot = (((lwr2 - lwr1)/100) * (qol)) + lwr1;
    var top_p = ((top-(dots/20))*20)/5;
    var bot_p = (((dots/20)-bot)*20)/5;
    var top_round = Math.round(top*10);
    var bot_round = Math.round(bot*10);
    if(top_round > 100) top_round = 100;
    if(bot_round <   0) bot_round = 0;
    $(".css_atlanta-upr").text(top_round);
    $(".css_atlanta-mdl").text(Math.round(dots/2));
    $(".css_atlanta-lwr").text(bot_round);
    $(".vp-atlanta").css("height",(100-((bot_round+(100-top_round))))*1.2+"px");
    if(c  >  0) {
      if(Math.round(dots/2)>0)  $(city_css).css("background-image","url('/faces/33.png')");
      if(Math.round(dots/2)>33) $(city_css).css("background-image","url('/faces/32.png')");
      if(Math.round(dots/2)>66) $(city_css).css("background-image","url('/faces/31.png')");
    }
    if(c  > 33) {
      if(Math.round(dots/2)>0)  $(city_css).css("background-image","url('/faces/23.png')");
      if(Math.round(dots/2)>33) $(city_css).css("background-image","url('/faces/22.png')");
      if(Math.round(dots/2)>66) $(city_css).css("background-image","url('/faces/21.png')");
    }
    if(c  > 66) {
      if(Math.round(dots/2)>0)  $(city_css).css("background-image","url('/faces/13.png')");
      if(Math.round(dots/2)>33) $(city_css).css("background-image","url('/faces/12.png')");
      if(Math.round(dots/2)>66) $(city_css).css("background-image","url('/faces/11.png')");
    }
    return c;
  },
  seattle() {
    var sum_city = [];
    var city_css = ".seattle_css";
    var city = Cities.findOne({city:"seattle"});
    var sum_c = [];
    var sum_b = [];
    var sum_x = [];
    var sum_y = [];
    var sum_upr1 = [];
    var sum_upr2 = [];
    var sum_lwr1 = [];
    var sum_lwr2 = [];
    var r_w = Session.get("strength-h")/100;
    var r_t = Session.get("strength-t")/100;
    var r_s = Session.get("strength-s")/100;
    var r_p = Session.get("strength-p")/100;
    var weather   = ((city.w1 + city.w2)/2) * r_w;
    var traffic   = ((city.t1 + city.t2)/2) * r_t;
    var safety    = ((city.s1 + city.s2)/2) * r_s;
    var pollution = ((city.a1 + city.a2)/2) * r_p;
    if($('paper-checkbox[checked]').length == 1) {
      if($(".health").attr("checked")) {
        var mean = ((city.w1 + city.w2)/2);
        weather = city.w2 - ((city.w2-city.w1)*(r_w));
        if(mean > 50) weather  = city.w1 - ((city.w1-city.w2)*(r_w));
      }
      if($(".traffic").attr("checked")) {
        var mean = ((city.t1 + city.t2)/2);
        traffic = city.t2 - ((city.t2-city.t1)*(r_t));
        if(mean > 50) traffic = city.t1 - ((city.t1-city.t2)*(r_t));
      }
      if($(".safety").attr("checked")) {
        var mean = ((city.s1 + city.s2)/2);
        safety = city.s2 - ((city.s2-city.s1)*(r_s));
        if(mean > 50) safety = city.s1 - ((city.s1-city.s2)*(r_s));
      }
      if($(".polluted").attr("checked")) {
        var mean = ((city.a1 + city.a2)/2);
        pollution = city.a2 - ((city.a2-city.a1)*(r_p));
        if(mean > 50) pollution = city.a1 - ((city.a1-city.a2)*(r_p));
      }
    }
    if($(".health").attr("checked")) {
      sum_c.push(weather);
      sum_b.push(r_w);
      sum_x.push(city.w_m1);
      sum_y.push(city.w_m2);
      sum_upr1.push(city.w_upr_min);
      sum_upr2.push(city.w_upr_max);
      sum_lwr1.push(city.w_lwr_min);
      sum_lwr2.push(city.w_lwr_max);
    }
    if($(".traffic").attr("checked")) {
      sum_c.push(traffic);
      sum_b.push(r_t);
      sum_x.push(city.t_m1);
      sum_y.push(city.t_m2);
      sum_upr1.push(city.t_upr_min);
      sum_upr2.push(city.t_upr_max);
      sum_lwr1.push(city.t_lwr_min);
      sum_lwr2.push(city.t_lwr_max);
    }
    if($(".safety").attr("checked")) {
      sum_c.push(safety);
      sum_b.push(r_s);
      sum_x.push(city.s_m1);
      sum_y.push(city.s_m2);
      sum_upr1.push(city.s_upr_min);
      sum_upr2.push(city.s_upr_max);
      sum_lwr1.push(city.s_lwr_min);
      sum_lwr2.push(city.s_lwr_max);
    }
    if($(".polluted").attr("checked")) {
      sum_c.push(pollution);
      sum_b.push(r_p);
      sum_x.push(city.a_m1);
      sum_y.push(city.a_m2);
      sum_upr1.push(city.a_upr_min);
      sum_upr2.push(city.a_upr_max);
      sum_lwr1.push(city.a_lwr_min);
      sum_lwr2.push(city.a_lwr_max);
    }
    var c = (sum_c.reduce((a,b)=>a+b,0))/(sum_b.reduce((a,b)=>a+b,0));
    if($('paper-checkbox[checked]').length == 1) c = (sum_c.reduce((a,b)=>a+b,0));
    var x = sum_x.reduce((a,b)=>a+b,0)/sum_x.length;
    var y = sum_y.reduce((a,b)=>a+b,0)/sum_y.length;
    var upr1 = sum_upr1.reduce((a,b)=>a+b,0)/sum_upr1.length; //min
    var upr2 = sum_upr2.reduce((a,b)=>a+b,0)/sum_upr2.length; //max
    var lwr1 = sum_lwr1.reduce((a,b)=>a+b,0)/sum_lwr1.length; //min
    var lwr2 = sum_lwr2.reduce((a,b)=>a+b,0)/sum_lwr2.length; //max
    if(isNaN(c)) c = 0;
    if(isNaN(x)) x = 0;
    if(isNaN(y)) y = 0;
    if(isNaN(upr1)) upr1 = 0;
    if(isNaN(upr2)) upr2 = 0;
    if(isNaN(lwr1)) lwr1 = 0;
    if(isNaN(lwr2)) lwr2 = 0;
    var upr = (y*100)+x;
    var lwr = x;
    var r_upr2 = (((upr2 - upr )/5) * 20);
    var r_upr1 = (((upr1 - lwr )/5) * 20);
    var r_lwr2 = (((upr  - lwr2)/5) * 20);
    var r_lwr1 = (((lwr  - lwr1)/5) * 20);
    var p = (upr2-(((y * 100) + x))/5)*1.2;
    var dots = (((y * c) + x)*20);
    var text = Math.round(((dots/20)*10));
    var qol  = Math.round(c);
    if(isNaN(text)) text = 0;
    if(isNaN(qol))   qol = 0;
    var upr = (y*100)+x;
    var lwr = x;
    var top = (((upr2 - upr1)/100) * (qol)) + upr1;
    var bot = (((lwr2 - lwr1)/100) * (qol)) + lwr1;
    var top_p = ((top-(dots/20))*20)/5;
    var bot_p = (((dots/20)-bot)*20)/5;
    var top_round = Math.round(top*10);
    var bot_round = Math.round(bot*10);
    if(top_round > 100) top_round = 100;
    if(bot_round <   0) bot_round = 0;
    $(".css_seattle-upr").text(top_round);
    $(".css_seattle-mdl").text(Math.round(dots/2));
    $(".css_seattle-lwr").text(bot_round);
    $(".vp-seattle").css("height",(100-((bot_round+(100-top_round))))*1.2+"px");
    if(c  >  0) {
      if(Math.round(dots/2)>0)  $(city_css).css("background-image","url('/faces/33.png')");
      if(Math.round(dots/2)>33) $(city_css).css("background-image","url('/faces/32.png')");
      if(Math.round(dots/2)>66) $(city_css).css("background-image","url('/faces/31.png')");
    }
    if(c  > 33) {
      if(Math.round(dots/2)>0)  $(city_css).css("background-image","url('/faces/23.png')");
      if(Math.round(dots/2)>33) $(city_css).css("background-image","url('/faces/22.png')");
      if(Math.round(dots/2)>66) $(city_css).css("background-image","url('/faces/21.png')");
    }
    if(c  > 66) {
      if(Math.round(dots/2)>0)  $(city_css).css("background-image","url('/faces/13.png')");
      if(Math.round(dots/2)>33) $(city_css).css("background-image","url('/faces/12.png')");
      if(Math.round(dots/2)>66) $(city_css).css("background-image","url('/faces/11.png')");
    }
    return c;
  },
  angeles() {
    var sum_city = [];
    var city_css = ".angeles_css";
    var city = Cities.findOne({city:"angeles"});
    var sum_c = [];
    var sum_b = [];
    var sum_x = [];
    var sum_y = [];
    var sum_upr1 = [];
    var sum_upr2 = [];
    var sum_lwr1 = [];
    var sum_lwr2 = [];
    var r_w = Session.get("strength-h")/100;
    var r_t = Session.get("strength-t")/100;
    var r_s = Session.get("strength-s")/100;
    var r_p = Session.get("strength-p")/100;
    var weather   = ((city.w1 + city.w2)/2) * r_w;
    var traffic   = ((city.t1 + city.t2)/2) * r_t;
    var safety    = ((city.s1 + city.s2)/2) * r_s;
    var pollution = ((city.a1 + city.a2)/2) * r_p;
    if($('paper-checkbox[checked]').length == 1) {
      if($(".health").attr("checked")) {
        var mean = ((city.w1 + city.w2)/2);
        weather = city.w2 - ((city.w2-city.w1)*(r_w));
        if(mean > 50) weather  = city.w1 - ((city.w1-city.w2)*(r_w));
      }
      if($(".traffic").attr("checked")) {
        var mean = ((city.t1 + city.t2)/2);
        traffic = city.t2 - ((city.t2-city.t1)*(r_t));
        if(mean > 50) traffic = city.t1 - ((city.t1-city.t2)*(r_t));
      }
      if($(".safety").attr("checked")) {
        var mean = ((city.s1 + city.s2)/2);
        safety = city.s2 - ((city.s2-city.s1)*(r_s));
        if(mean > 50) safety = city.s1 - ((city.s1-city.s2)*(r_s));
      }
      if($(".polluted").attr("checked")) {
        var mean = ((city.a1 + city.a2)/2);
        pollution = city.a2 - ((city.a2-city.a1)*(r_p));
        if(mean > 50) pollution = city.a1 - ((city.a1-city.a2)*(r_p));
      }
    }
    if($(".health").attr("checked")) {
      sum_c.push(weather);
      sum_b.push(r_w);
      sum_x.push(city.w_m1);
      sum_y.push(city.w_m2);
      sum_upr1.push(city.w_upr_min);
      sum_upr2.push(city.w_upr_max);
      sum_lwr1.push(city.w_lwr_min);
      sum_lwr2.push(city.w_lwr_max);
    }
    if($(".traffic").attr("checked")) {
      sum_c.push(traffic);
      sum_b.push(r_t);
      sum_x.push(city.t_m1);
      sum_y.push(city.t_m2);
      sum_upr1.push(city.t_upr_min);
      sum_upr2.push(city.t_upr_max);
      sum_lwr1.push(city.t_lwr_min);
      sum_lwr2.push(city.t_lwr_max);
    }
    if($(".safety").attr("checked")) {
      sum_c.push(safety);
      sum_b.push(r_s);
      sum_x.push(city.s_m1);
      sum_y.push(city.s_m2);
      sum_upr1.push(city.s_upr_min);
      sum_upr2.push(city.s_upr_max);
      sum_lwr1.push(city.s_lwr_min);
      sum_lwr2.push(city.s_lwr_max);
    }
    if($(".polluted").attr("checked")) {
      sum_c.push(pollution);
      sum_b.push(r_p);
      sum_x.push(city.a_m1);
      sum_y.push(city.a_m2);
      sum_upr1.push(city.a_upr_min);
      sum_upr2.push(city.a_upr_max);
      sum_lwr1.push(city.a_lwr_min);
      sum_lwr2.push(city.a_lwr_max);
    }
    var c = (sum_c.reduce((a,b)=>a+b,0))/(sum_b.reduce((a,b)=>a+b,0));
    if($('paper-checkbox[checked]').length == 1) c = (sum_c.reduce((a,b)=>a+b,0));
    var x = sum_x.reduce((a,b)=>a+b,0)/sum_x.length;
    var y = sum_y.reduce((a,b)=>a+b,0)/sum_y.length;
    var upr1 = sum_upr1.reduce((a,b)=>a+b,0)/sum_upr1.length; //min
    var upr2 = sum_upr2.reduce((a,b)=>a+b,0)/sum_upr2.length; //max
    var lwr1 = sum_lwr1.reduce((a,b)=>a+b,0)/sum_lwr1.length; //min
    var lwr2 = sum_lwr2.reduce((a,b)=>a+b,0)/sum_lwr2.length; //max
    if(isNaN(c)) c = 0;
    if(isNaN(x)) x = 0;
    if(isNaN(y)) y = 0;
    if(isNaN(upr1)) upr1 = 0;
    if(isNaN(upr2)) upr2 = 0;
    if(isNaN(lwr1)) lwr1 = 0;
    if(isNaN(lwr2)) lwr2 = 0;
    var upr = (y*100)+x;
    var lwr = x;
    var r_upr2 = (((upr2 - upr )/5) * 20);
    var r_upr1 = (((upr1 - lwr )/5) * 20);
    var r_lwr2 = (((upr  - lwr2)/5) * 20);
    var r_lwr1 = (((lwr  - lwr1)/5) * 20);
    var p = (upr2-(((y * 100) + x))/5)*1.2;
    var dots = (((y * c) + x)*20);
    var text = Math.round(((dots/20)*10));
    var qol  = Math.round(c);
    if(isNaN(text)) text = 0;
    if(isNaN(qol))   qol = 0;
    var upr = (y*100)+x;
    var lwr = x;
    var top = (((upr2 - upr1)/100) * (qol)) + upr1;
    var bot = (((lwr2 - lwr1)/100) * (qol)) + lwr1;
    var top_p = ((top-(dots/20))*20)/5;
    var bot_p = (((dots/20)-bot)*20)/5;
    var top_round = Math.round(top*10);
    var bot_round = Math.round(bot*10);
    if(top_round > 100) top_round = 100;
    if(bot_round <   0) bot_round = 0;
    //console.log("city: " + city.city + " t: " + top + " b: " + bot + " d:" + dots/20);
    $(".css_angeles-upr").text(top_round);
    $(".css_angeles-mdl").text(Math.round(dots/2));
    $(".css_angeles-lwr").text(bot_round);
    $(".vp-angeles").css("height",(100-((bot_round+(100-top_round))))*1.2+"px");
    if(c  >  0) {
      if(Math.round(dots/2)>0)  $(city_css).css("background-image","url('/faces/33.png')");
      if(Math.round(dots/2)>33) $(city_css).css("background-image","url('/faces/32.png')");
      if(Math.round(dots/2)>66) $(city_css).css("background-image","url('/faces/31.png')");
    }
    if(c  > 33) {
      if(Math.round(dots/2)>0)  $(city_css).css("background-image","url('/faces/23.png')");
      if(Math.round(dots/2)>33) $(city_css).css("background-image","url('/faces/22.png')");
      if(Math.round(dots/2)>66) $(city_css).css("background-image","url('/faces/21.png')");
    }
    if(c  > 66) {
      if(Math.round(dots/2)>0)  $(city_css).css("background-image","url('/faces/13.png')");
      if(Math.round(dots/2)>33) $(city_css).css("background-image","url('/faces/12.png')");
      if(Math.round(dots/2)>66) $(city_css).css("background-image","url('/faces/11.png')");
    }
    return c;
  },
  houston() {
    var sum_city = [];
    var city_css = ".houston_css";
    var city = Cities.findOne({city:"houston"});
    var sum_c = [];
    var sum_b = [];
    var sum_x = [];
    var sum_y = [];
    var sum_upr1 = [];
    var sum_upr2 = [];
    var sum_lwr1 = [];
    var sum_lwr2 = [];
    var r_w = Session.get("strength-h")/100;
    var r_t = Session.get("strength-t")/100;
    var r_s = Session.get("strength-s")/100;
    var r_p = Session.get("strength-p")/100;
    var weather   = ((city.w1 + city.w2)/2) * r_w;
    var traffic   = ((city.t1 + city.t2)/2) * r_t;
    var safety    = ((city.s1 + city.s2)/2) * r_s;
    var pollution = ((city.a1 + city.a2)/2) * r_p;
    if($('paper-checkbox[checked]').length == 1) {
      if($(".health").attr("checked")) {
        var mean = ((city.w1 + city.w2)/2);
        weather = city.w2 - ((city.w2-city.w1)*(r_w));
        if(mean > 50) weather  = city.w1 - ((city.w1-city.w2)*(r_w));
      }
      if($(".traffic").attr("checked")) {
        var mean = ((city.t1 + city.t2)/2);
        traffic = city.t2 - ((city.t2-city.t1)*(r_t));
        if(mean > 50) traffic = city.t1 - ((city.t1-city.t2)*(r_t));
      }
      if($(".safety").attr("checked")) {
        var mean = ((city.s1 + city.s2)/2);
        safety = city.s2 - ((city.s2-city.s1)*(r_s));
        if(mean > 50) safety = city.s1 - ((city.s1-city.s2)*(r_s));
      }
      if($(".polluted").attr("checked")) {
        var mean = ((city.a1 + city.a2)/2);
        pollution = city.a2 - ((city.a2-city.a1)*(r_p));
        if(mean > 50) pollution = city.a1 - ((city.a1-city.a2)*(r_p));
      }
    }
    if($(".health").attr("checked")) {
      sum_c.push(weather);
      sum_b.push(r_w);
      sum_x.push(city.w_m1);
      sum_y.push(city.w_m2);
      sum_upr1.push(city.w_upr_min);
      sum_upr2.push(city.w_upr_max);
      sum_lwr1.push(city.w_lwr_min);
      sum_lwr2.push(city.w_lwr_max);
    }
    if($(".traffic").attr("checked")) {
      sum_c.push(traffic);
      sum_b.push(r_t);
      sum_x.push(city.t_m1);
      sum_y.push(city.t_m2);
      sum_upr1.push(city.t_upr_min);
      sum_upr2.push(city.t_upr_max);
      sum_lwr1.push(city.t_lwr_min);
      sum_lwr2.push(city.t_lwr_max);
    }
    if($(".safety").attr("checked")) {
      sum_c.push(safety);
      sum_b.push(r_s);
      sum_x.push(city.s_m1);
      sum_y.push(city.s_m2);
      sum_upr1.push(city.s_upr_min);
      sum_upr2.push(city.s_upr_max);
      sum_lwr1.push(city.s_lwr_min);
      sum_lwr2.push(city.s_lwr_max);
    }
    if($(".polluted").attr("checked")) {
      sum_c.push(pollution);
      sum_b.push(r_p);
      sum_x.push(city.a_m1);
      sum_y.push(city.a_m2);
      sum_upr1.push(city.a_upr_min);
      sum_upr2.push(city.a_upr_max);
      sum_lwr1.push(city.a_lwr_min);
      sum_lwr2.push(city.a_lwr_max);
    }
    var c = (sum_c.reduce((a,b)=>a+b,0))/(sum_b.reduce((a,b)=>a+b,0));
    if($('paper-checkbox[checked]').length == 1) c = (sum_c.reduce((a,b)=>a+b,0));
    var x = sum_x.reduce((a,b)=>a+b,0)/sum_x.length;
    var y = sum_y.reduce((a,b)=>a+b,0)/sum_y.length;
    var upr1 = sum_upr1.reduce((a,b)=>a+b,0)/sum_upr1.length; //min
    var upr2 = sum_upr2.reduce((a,b)=>a+b,0)/sum_upr2.length; //max
    var lwr1 = sum_lwr1.reduce((a,b)=>a+b,0)/sum_lwr1.length; //min
    var lwr2 = sum_lwr2.reduce((a,b)=>a+b,0)/sum_lwr2.length; //max
    if(isNaN(c)) c = 0;
    if(isNaN(x)) x = 0;
    if(isNaN(y)) y = 0;
    if(isNaN(upr1)) upr1 = 0;
    if(isNaN(upr2)) upr2 = 0;
    if(isNaN(lwr1)) lwr1 = 0;
    if(isNaN(lwr2)) lwr2 = 0;
    var upr = (y*100)+x;
    var lwr = x;
    var r_upr2 = (((upr2 - upr )/5) * 20);
    var r_upr1 = (((upr1 - lwr )/5) * 20);
    var r_lwr2 = (((upr  - lwr2)/5) * 20);
    var r_lwr1 = (((lwr  - lwr1)/5) * 20);
    var p = (upr2-(((y * 100) + x))/5)*1.2;
    var dots = (((y * c) + x)*20);
    var text = Math.round(((dots/20)*10));
    var qol  = Math.round(c);
    if(isNaN(text)) text = 0;
    if(isNaN(qol))   qol = 0;
    var upr = (y*100)+x;
    var lwr = x;
    var top = (((upr2 - upr1)/100) * (qol)) + upr1;
    var bot = (((lwr2 - lwr1)/100) * (qol)) + lwr1;
    var top_p = ((top-(dots/20))*20)/5;
    var bot_p = (((dots/20)-bot)*20)/5;
    var top_round = Math.round(top*10);
    var bot_round = Math.round(bot*10);
    if(top_round > 100) top_round = 100;
    if(bot_round <   0) bot_round = 0;
    $(".css_houston-upr").text(top_round);
    $(".css_houston-mdl").text(Math.round(dots/2));
    $(".css_houston-lwr").text(bot_round);
    $(".vp-houston").css("height",(100-((bot_round+(100-top_round))))*1.2+"px");
    if(c  >  0) {
      if(Math.round(dots/2)>0)  $(city_css).css("background-image","url('/faces/33.png')");
      if(Math.round(dots/2)>33) $(city_css).css("background-image","url('/faces/32.png')");
      if(Math.round(dots/2)>66) $(city_css).css("background-image","url('/faces/31.png')");
    }
    if(c  > 33) {
      if(Math.round(dots/2)>0)  $(city_css).css("background-image","url('/faces/23.png')");
      if(Math.round(dots/2)>33) $(city_css).css("background-image","url('/faces/22.png')");
      if(Math.round(dots/2)>66) $(city_css).css("background-image","url('/faces/21.png')");
    }
    if(c  > 66) {
      if(Math.round(dots/2)>0)  $(city_css).css("background-image","url('/faces/13.png')");
      if(Math.round(dots/2)>33) $(city_css).css("background-image","url('/faces/12.png')");
      if(Math.round(dots/2)>66) $(city_css).css("background-image","url('/faces/11.png')");
    }
    return city;
  },
  newyork() {
    var sum_city = [];
    var city_css = ".newyork_css";
    var city = Cities.findOne({city:"newyork"});
    var sum_c = [];
    var sum_b = [];
    var sum_x = [];
    var sum_y = [];
    var sum_upr1 = [];
    var sum_upr2 = [];
    var sum_lwr1 = [];
    var sum_lwr2 = [];
    var r_w = Session.get("strength-h")/100;
    var r_t = Session.get("strength-t")/100;
    var r_s = Session.get("strength-s")/100;
    var r_p = Session.get("strength-p")/100;
    var weather   = ((city.w1 + city.w2)/2) * r_w;
    var traffic   = ((city.t1 + city.t2)/2) * r_t;
    var safety    = ((city.s1 + city.s2)/2) * r_s;
    var pollution = ((city.a1 + city.a2)/2) * r_p;
    if($('paper-checkbox[checked]').length == 1) {
      if($(".health").attr("checked")) {
        var mean = ((city.w1 + city.w2)/2);
        weather = city.w2 - ((city.w2-city.w1)*(r_w));
        if(mean > 50) weather  = city.w1 - ((city.w1-city.w2)*(r_w));
      }
      if($(".traffic").attr("checked")) {
        var mean = ((city.t1 + city.t2)/2);
        traffic = city.t2 - ((city.t2-city.t1)*(r_t));
        if(mean > 50) traffic = city.t1 - ((city.t1-city.t2)*(r_t));
      }
      if($(".safety").attr("checked")) {
        var mean = ((city.s1 + city.s2)/2);
        safety = city.s2 - ((city.s2-city.s1)*(r_s));
        if(mean > 50) safety = city.s1 - ((city.s1-city.s2)*(r_s));
      }
      if($(".polluted").attr("checked")) {
        var mean = ((city.a1 + city.a2)/2);
        pollution = city.a2 - ((city.a2-city.a1)*(r_p));
        if(mean > 50) pollution = city.a1 - ((city.a1-city.a2)*(r_p));
      }
    }
    if($(".health").attr("checked")) {
      sum_c.push(weather);
      sum_b.push(r_w);
      sum_x.push(city.w_m1);
      sum_y.push(city.w_m2);
      sum_upr1.push(city.w_upr_min);
      sum_upr2.push(city.w_upr_max);
      sum_lwr1.push(city.w_lwr_min);
      sum_lwr2.push(city.w_lwr_max);
    }
    if($(".traffic").attr("checked")) {
      sum_c.push(traffic);
      sum_b.push(r_t);
      sum_x.push(city.t_m1);
      sum_y.push(city.t_m2);
      sum_upr1.push(city.t_upr_min);
      sum_upr2.push(city.t_upr_max);
      sum_lwr1.push(city.t_lwr_min);
      sum_lwr2.push(city.t_lwr_max);
    }
    if($(".safety").attr("checked")) {
      sum_c.push(safety);
      sum_b.push(r_s);
      sum_x.push(city.s_m1);
      sum_y.push(city.s_m2);
      sum_upr1.push(city.s_upr_min);
      sum_upr2.push(city.s_upr_max);
      sum_lwr1.push(city.s_lwr_min);
      sum_lwr2.push(city.s_lwr_max);
    }
    if($(".polluted").attr("checked")) {
      sum_c.push(pollution);
      sum_b.push(r_p);
      sum_x.push(city.a_m1);
      sum_y.push(city.a_m2);
      sum_upr1.push(city.a_upr_min);
      sum_upr2.push(city.a_upr_max);
      sum_lwr1.push(city.a_lwr_min);
      sum_lwr2.push(city.a_lwr_max);
    }
    var c = (sum_c.reduce((a,b)=>a+b,0))/(sum_b.reduce((a,b)=>a+b,0));
    if($('paper-checkbox[checked]').length == 1) c = (sum_c.reduce((a,b)=>a+b,0));
    var x = sum_x.reduce((a,b)=>a+b,0)/sum_x.length;
    var y = sum_y.reduce((a,b)=>a+b,0)/sum_y.length;
    var upr1 = sum_upr1.reduce((a,b)=>a+b,0)/sum_upr1.length; //min
    var upr2 = sum_upr2.reduce((a,b)=>a+b,0)/sum_upr2.length; //max
    var lwr1 = sum_lwr1.reduce((a,b)=>a+b,0)/sum_lwr1.length; //min
    var lwr2 = sum_lwr2.reduce((a,b)=>a+b,0)/sum_lwr2.length; //max
    if(isNaN(c)) c = 0;
    if(isNaN(x)) x = 0;
    if(isNaN(y)) y = 0;
    if(isNaN(upr1)) upr1 = 0;
    if(isNaN(upr2)) upr2 = 0;
    if(isNaN(lwr1)) lwr1 = 0;
    if(isNaN(lwr2)) lwr2 = 0;
    var upr = (y*100)+x;
    var lwr = x;
    var r_upr2 = (((upr2 - upr )/5) * 20);
    var r_upr1 = (((upr1 - lwr )/5) * 20);
    var r_lwr2 = (((upr  - lwr2)/5) * 20);
    var r_lwr1 = (((lwr  - lwr1)/5) * 20);
    var p = (upr2-(((y * 100) + x))/5)*1.2;
    var dots = (((y * c) + x)*20);
    var text = Math.round(((dots/20)*10));
    var qol  = Math.round(c);
    if(isNaN(text)) text = 0;
    if(isNaN(qol))   qol = 0;
    var upr = (y*100)+x;
    var lwr = x;
    var top = (((upr2 - upr1)/100) * (qol)) + upr1;
    var bot = (((lwr2 - lwr1)/100) * (qol)) + lwr1;
    var top_p = ((top-(dots/20))*20)/5;
    var bot_p = (((dots/20)-bot)*20)/5;
    var top_round = Math.round(top*10);
    var bot_round = Math.round(bot*10);
    if(top_round > 100) top_round = 100;
    if(bot_round <   0) bot_round = 0;
    $(".css_newyork-upr").text(top_round);
    $(".css_newyork-mdl").text(Math.round(dots/2));
    $(".css_newyork-lwr").text(bot_round);
    $(".vp-newyork").css("height",(100-((bot_round+(100-top_round))))*1.2+"px");
    if(c  >  0) {
      if(Math.round(dots/2)>0)  $(city_css).css("background-image","url('/faces/33.png')");
      if(Math.round(dots/2)>33) $(city_css).css("background-image","url('/faces/32.png')");
      if(Math.round(dots/2)>66) $(city_css).css("background-image","url('/faces/31.png')");
    }
    if(c  > 33) {
      if(Math.round(dots/2)>0)  $(city_css).css("background-image","url('/faces/23.png')");
      if(Math.round(dots/2)>33) $(city_css).css("background-image","url('/faces/22.png')");
      if(Math.round(dots/2)>66) $(city_css).css("background-image","url('/faces/21.png')");
    }
    if(c  > 66) {
      if(Math.round(dots/2)>0)  $(city_css).css("background-image","url('/faces/13.png')");
      if(Math.round(dots/2)>33) $(city_css).css("background-image","url('/faces/12.png')");
      if(Math.round(dots/2)>66) $(city_css).css("background-image","url('/faces/11.png')");
    }
    return c;
  },
  denver() {
    var sum_city = [];
    var city_css = ".denver_css";
    var city = Cities.findOne({city:"denver"});
    var sum_c = [];
    var sum_b = [];
    var sum_x = [];
    var sum_y = [];
    var sum_upr1 = [];
    var sum_upr2 = [];
    var sum_lwr1 = [];
    var sum_lwr2 = [];
    var r_w = Session.get("strength-h")/100;
    var r_t = Session.get("strength-t")/100;
    var r_s = Session.get("strength-s")/100;
    var r_p = Session.get("strength-p")/100;
    var weather   = ((city.w1 + city.w2)/2) * r_w;
    var traffic   = ((city.t1 + city.t2)/2) * r_t;
    var safety    = ((city.s1 + city.s2)/2) * r_s;
    var pollution = ((city.a1 + city.a2)/2) * r_p;
    if($('paper-checkbox[checked]').length == 1) {
      if($(".health").attr("checked")) {
        var mean = ((city.w1 + city.w2)/2);
        weather = city.w2 - ((city.w2-city.w1)*(r_w));
        if(mean > 50) weather  = city.w1 - ((city.w1-city.w2)*(r_w));
      }
      if($(".traffic").attr("checked")) {
        var mean = ((city.t1 + city.t2)/2);
        traffic = city.t2 - ((city.t2-city.t1)*(r_t));
        if(mean > 50) traffic = city.t1 - ((city.t1-city.t2)*(r_t));
      }
      if($(".safety").attr("checked")) {
        var mean = ((city.s1 + city.s2)/2);
        safety = city.s2 - ((city.s2-city.s1)*(r_s));
        if(mean > 50) safety = city.s1 - ((city.s1-city.s2)*(r_s));
      }
      if($(".polluted").attr("checked")) {
        var mean = ((city.a1 + city.a2)/2);
        pollution = city.a2 - ((city.a2-city.a1)*(r_p));
        if(mean > 50) pollution = city.a1 - ((city.a1-city.a2)*(r_p));
      }
    }
    if($(".health").attr("checked")) {
      sum_c.push(weather);
      sum_b.push(r_w);
      sum_x.push(city.w_m1);
      sum_y.push(city.w_m2);
      sum_upr1.push(city.w_upr_min);
      sum_upr2.push(city.w_upr_max);
      sum_lwr1.push(city.w_lwr_min);
      sum_lwr2.push(city.w_lwr_max);
    }
    if($(".traffic").attr("checked")) {
      sum_c.push(traffic);
      sum_b.push(r_t);
      sum_x.push(city.t_m1);
      sum_y.push(city.t_m2);
      sum_upr1.push(city.t_upr_min);
      sum_upr2.push(city.t_upr_max);
      sum_lwr1.push(city.t_lwr_min);
      sum_lwr2.push(city.t_lwr_max);
    }
    if($(".safety").attr("checked")) {
      sum_c.push(safety);
      sum_b.push(r_s);
      sum_x.push(city.s_m1);
      sum_y.push(city.s_m2);
      sum_upr1.push(city.s_upr_min);
      sum_upr2.push(city.s_upr_max);
      sum_lwr1.push(city.s_lwr_min);
      sum_lwr2.push(city.s_lwr_max);
    }
    if($(".polluted").attr("checked")) {
      sum_c.push(pollution);
      sum_b.push(r_p);
      sum_x.push(city.a_m1);
      sum_y.push(city.a_m2);
      sum_upr1.push(city.a_upr_min);
      sum_upr2.push(city.a_upr_max);
      sum_lwr1.push(city.a_lwr_min);
      sum_lwr2.push(city.a_lwr_max);
    }
    var c = (sum_c.reduce((a,b)=>a+b,0))/(sum_b.reduce((a,b)=>a+b,0));
    if($('paper-checkbox[checked]').length == 1) c = (sum_c.reduce((a,b)=>a+b,0));
    var x = sum_x.reduce((a,b)=>a+b,0)/sum_x.length;
    var y = sum_y.reduce((a,b)=>a+b,0)/sum_y.length;
    var upr1 = sum_upr1.reduce((a,b)=>a+b,0)/sum_upr1.length; //min
    var upr2 = sum_upr2.reduce((a,b)=>a+b,0)/sum_upr2.length; //max
    var lwr1 = sum_lwr1.reduce((a,b)=>a+b,0)/sum_lwr1.length; //min
    var lwr2 = sum_lwr2.reduce((a,b)=>a+b,0)/sum_lwr2.length; //max
    if(isNaN(c)) c = 0;
    if(isNaN(x)) x = 0;
    if(isNaN(y)) y = 0;
    if(isNaN(upr1)) upr1 = 0;
    if(isNaN(upr2)) upr2 = 0;
    if(isNaN(lwr1)) lwr1 = 0;
    if(isNaN(lwr2)) lwr2 = 0;
    var upr = (y*100)+x;
    var lwr = x;
    var r_upr2 = (((upr2 - upr )/5) * 20);
    var r_upr1 = (((upr1 - lwr )/5) * 20);
    var r_lwr2 = (((upr  - lwr2)/5) * 20);
    var r_lwr1 = (((lwr  - lwr1)/5) * 20);
    var p = (upr2-(((y * 100) + x))/5)*1.2;
    var dots = (((y * c) + x)*20);
    var text = Math.round(((dots/20)*10));
    var qol  = Math.round(c);
    if(isNaN(text)) text = 0;
    if(isNaN(qol))   qol = 0;
    var upr = (y*100)+x;
    var lwr = x;
    var top = (((upr2 - upr1)/100) * (qol)) + upr1;
    var bot = (((lwr2 - lwr1)/100) * (qol)) + lwr1;
    var top_p = ((top-(dots/20))*20)/5;
    var bot_p = (((dots/20)-bot)*20)/5;
    var top_round = Math.round(top*10);
    var bot_round = Math.round(bot*10);
    if(top_round > 100) top_round = 100;
    if(bot_round <   0) bot_round = 0;
    $(".css_denver-upr").text(top_round);
    $(".css_denver-mdl").text(Math.round(dots/2));
    $(".css_denver-lwr").text(bot_round);
    $(".vp-denver").css("height",(100-((bot_round+(100-top_round))))*1.2+"px");
    if(c  >  0) {
      if(Math.round(dots/2)>0)  $(city_css).css("background-image","url('/faces/33.png')");
      if(Math.round(dots/2)>33) $(city_css).css("background-image","url('/faces/32.png')");
      if(Math.round(dots/2)>66) $(city_css).css("background-image","url('/faces/31.png')");
    }
    if(c  > 33) {
      if(Math.round(dots/2)>0)  $(city_css).css("background-image","url('/faces/23.png')");
      if(Math.round(dots/2)>33) $(city_css).css("background-image","url('/faces/22.png')");
      if(Math.round(dots/2)>66) $(city_css).css("background-image","url('/faces/21.png')");
    }
    if(c  > 66) {
      if(Math.round(dots/2)>0)  $(city_css).css("background-image","url('/faces/13.png')");
      if(Math.round(dots/2)>33) $(city_css).css("background-image","url('/faces/12.png')");
      if(Math.round(dots/2)>66) $(city_css).css("background-image","url('/faces/11.png')");
    }
    return c;
  }

});
