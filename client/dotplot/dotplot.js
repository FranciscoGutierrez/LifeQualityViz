Template.dotplot.onCreated(function(){
  var r = Template.instance().data['cityname'];
  this.my_city = new ReactiveVar(Cities.findOne({"city":r}));
});


Template.dotplot.helpers({
  city() {
    r = this.cityname;
    var city = [];
    if(r=="angeles"){ city = Cities.findOne({city:"angeles"}); city.cityname = "Los Angeles"; }
    if(r=="denver") { city = Cities.findOne({city:"denver" }); city.cityname = "Denver";  }
    if(r=="newyork"){ city = Cities.findOne({city:"newyork"}); city.cityname = "New York";}
    if(r=="houston"){ city = Cities.findOne({city:"houston"}); city.cityname = "Houston"; }
    if(r=="seattle"){ city = Cities.findOne({city:"seattle"}); city.cityname = "Seattle"; }
    if(r=="atlanta"){ city = Cities.findOne({city:"atlanta"}); city.cityname = "Atlanta"; }
    return city;
  },
  prediction() {
    var city = Template.instance().my_city.get();
    var sum_c = [];
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
      sum_x.push(city.w_m1);
      sum_y.push(city.w_m2);
      sum_upr1.push(city.w_upr_min);
      sum_upr2.push(city.w_upr_max);
      sum_lwr1.push(city.w_lwr_min);
      sum_lwr2.push(city.w_lwr_max);
    }
    if($(".traffic").attr("checked")) {
      sum_c.push(traffic);
      sum_x.push(city.t_m1);
      sum_y.push(city.t_m2);
      sum_upr1.push(city.t_upr_min);
      sum_upr2.push(city.t_upr_max);
      sum_lwr1.push(city.t_lwr_min);
      sum_lwr2.push(city.t_lwr_max);
    }
    if($(".safety").attr("checked")) {
      sum_c.push(safety);
      sum_x.push(city.s_m1);
      sum_y.push(city.s_m2);
      sum_upr1.push(city.s_upr_min);
      sum_upr2.push(city.s_upr_max);
      sum_lwr1.push(city.s_lwr_min);
      sum_lwr2.push(city.s_lwr_max);
    }
    if($(".polluted").attr("checked")) {
      sum_c.push(pollution);
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

    var p = upr2-(((y * 100) + x))/5;
    p = p*1.2;
    var dots = (((y * c) + x)*20);
    var px = 9;
    var text = Math.round(((dots/20)*10));
    var qol  = Math.round(c);

    if(isNaN(text)) text = 0;
    if(isNaN(qol))   qol = 0;

    var upr = (y*100)+x;
    var lwr = x;

    var r_upr2 = ((((upr2 - upr )/5) * 150)/10);
    var r_upr1 = ((((upr1 - lwr )/5) * 150)/10);
    var r_lwr2 = ((((upr  - lwr2)/5) * 150)/10);
    var r_lwr1 = ((((lwr  - lwr1)/5) * 150)/10);

    return {
      a1: (dots-px)-(r_upr2*5),
      a2: dots-p*4-px,
      a3: dots-p*3-px,
      a4: dots-p*2-px,
      a5: dots-p-px,
      a6: dots-px,
      a7: dots+p-px,
      a8: dots+p*2-px,
      a9: dots+p*3-px,
      a10:dots+p*4-px,
      a11:dots+p*5-px,
      text: text,
      qol: qol
    }
  }
});
