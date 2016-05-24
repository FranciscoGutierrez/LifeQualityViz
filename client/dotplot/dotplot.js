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
    var sum_u1  = [];
    var sum_u2  = [];
    var sum_ru1 = [];
    var sum_ru2 = [];
    var h = city.w2 - ((city.w2-city.w1)*(Session.get("strength-h")/100));
    var t = city.t2 - ((city.t2-city.t1)*(Session.get("strength-t")/100));
    var s = city.s2 - ((city.s2-city.s1)*(Session.get("strength-s")/100));
    var p = city.a2 - ((city.a2-city.a1)*(Session.get("strength-p")/100));
    if($(".health").attr("checked")) {
      sum_c.push(h);
      sum_x.push(city.w_m1);
      sum_y.push(city.w_m2);
    }
    if($(".traffic").attr("checked")) {
      sum_c.push(t);
      sum_x.push(city.t_m1);
      sum_y.push(city.t_m2);
    }
    if($(".safety").attr("checked")) {
      sum_c.push(s);
      sum_x.push(city.s_m1);
      sum_y.push(city.s_m2);
    }
    if($(".polluted").attr("checked")) {
      sum_c.push(p);
      sum_x.push(city.a_m1);
      sum_y.push(city.a_m2);
    }
    var c = sum_c.reduce((a,b)=>a+b,0)/sum_c.length;
    var x = sum_x.reduce((a,b)=>a+b,0)/sum_x.length;
    var y = sum_y.reduce((a,b)=>a+b,0)/sum_y.length;
    var dots = (((y * c) + x)*20);
    var px = 9;
    return {
      a1: dots-50-px,
      a2: dots-40-px,
      a3: dots-30-px,
      a4: dots-20-px,
      a5: dots-10-px,
      a6: dots-px,
      a7: dots+10-px,
      a8: dots+20-px,
      a9: dots+30-px,
      a10:dots+40-px,
      a11:dots+50-px,
      text: Math.round(((dots/20)*10)),
      qol: Math.round(c)
    }
  }
});
