Template.lifequality.onCreated(function(){
  var r = Template.instance().data['cityname'];
  this.my_city = new ReactiveVar(Cities.findOne({"city":r}));
});

Template.lifequality.helpers({
  city() {
    var city = Template.instance().my_city.get();
    var name = this.cityname;
    if(name == "boston" ) name = "Boston";
    if(name == "newyork") name = "New York City";
    if(name == "houston") name = "Houston";
    if(name == "seattle") name = "Seattle";
    if(name == "atlanta") name = "Atlanta";
    return name;
  },
  strength() {
    var city = Template.instance().my_city.get();
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
  },
  prediction() {
    var city = Template.instance().my_city.get();
    var sum_c = [];
    var sum_x = [];
    var sum_y = [];
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
    return {y: 100-(((y * c) + x)*10), lwr: 150-((x*150)/10), upr: 150-(((y*100)+x)*150)/10};
  },
  weather() {
    var h = parseInt(Session.get("strength-h"));
    var current = this.cityname;
    var title = "";
    $('paper-checkbox[checked]').each(function() {
      var name = $(this).attr('class').split(' ')[0];
      if(name=="health") title = current+"_w.png";
    });
    return {name: title, random:new Date().getMilliseconds()};
  },
  safety() {
    var s = parseInt(Session.get("strength-s"));
    var current = this.cityname;
    var title = "";
    $('paper-checkbox[checked]').each(function() {
      var name = $(this).attr('class').split(' ')[0];
      if(name=="safety") title = current+"_s.png";
    });
    return {name: title, random:new Date().getMilliseconds()};
  },
  traffic() {
    var t = parseInt(Session.get("strength-t"));
    var current = this.cityname;
    var title = "";
    $('paper-checkbox[checked]').each(function() {
      var name = $(this).attr('class').split(' ')[0];
      if(name=="traffic") title = current+"_t.png";
    });
    return {name: title, random:new Date().getMilliseconds()};
  },
  airqual() {
    var p = parseInt(Session.get("strength-p"));
    var current = this.cityname;
    var title = "";
    $('paper-checkbox[checked]').each(function() {
      var name = $(this).attr('class').split(' ')[0];
      if(name=="polluted") title = current+"_a.png";
    });
    return {name: title, random:new Date().getMilliseconds()};
  }
});
