Template.lifequality.onCreated(function(){
  var r = Template.instance().data['cityname'];
  this.my_city = new ReactiveVar(Cities.findOne({"city":r}));
});

Template.lifequality.helpers({
  city() {
    var city = Template.instance().my_city.get();
    var name = this.cityname;
    if(name == "denver" ) name = "Denver";
    if(name == "angeles") name = "Los Angeles";
    if(name == "newyork") name = "New York";
    if(name == "houston") name = "Houston";
    if(name == "seattle") name = "Seattle";
    if(name == "atlanta") name = "Atlanta";
    return name;
  },
  pred() {
    var city = Template.instance().my_city.get();
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
    if(isNaN(p)) p = 0;
    if(isNaN(upr1)) upr1 = 0;
    if(isNaN(upr2)) upr2 = 0;
    if(isNaN(lwr1)) lwr1 = 0;
    if(isNaN(lwr2)) lwr2 = 0;

    var upr = (y*100)+x;
    var lwr = x;

    var r_upr2 = ((((upr2 - upr )/5) * 150)/10);
    var r_upr1 = ((((upr1 - lwr )/5) * 150)/10);
    var r_lwr2 = ((((upr  - lwr2)/5) * 150)/10);
    var r_lwr1 = ((((lwr  - lwr1)/5) * 150)/10);

    return {
      value: Math.round((((y * c) + x)*10)),
        y: 100-(((y * c) + x)*10),
      upr: 150-(((y*100)+x)*150)/10,
      lwr: 150-((x*150)/10),
      upr1: 150-(upr1*150)/10,
      upr2: 150-(upr2*150)/10,
      lwr1: 150-(lwr1*150)/10,
      lwr2: 150-(lwr2*150)/10,
      c: c,
      //
      ra1: 0   + 150-((x*150)/10),      ra2:  0  + 150-(((y*100)+x)*150)/10,
       a1: r_lwr1   + 150-((x*150)/10),  a2: r_lwr2  + 150-(((y*100)+x)*150)/10,
      rb1: r_lwr1   + 150-((x*150)/10), rb2: r_lwr2  + 150-(((y*100)+x)*150)/10,
       b1: r_lwr1*2 + 150-((x*150)/10),  b2: r_lwr2*2 + 150-(((y*100)+x)*150)/10,
      rc1: r_lwr1*2 + 150-((x*150)/10), rc2: r_lwr2*2 + 150-(((y*100)+x)*150)/10,
       c1: r_lwr1*3 + 150-((x*150)/10),  c2: r_lwr2*3 + 150-(((y*100)+x)*150)/10,
      rd1: r_lwr1*3 + 150-((x*150)/10), rd2: r_lwr2*3 + 150-(((y*100)+x)*150)/10,
       d1: r_lwr1*4 + 150-((x*150)/10),  d2: r_lwr2*4 + 150-(((y*100)+x)*150)/10,
      re1: r_lwr1*4 + 150-((x*150)/10), re2: r_lwr2*4 + 150-(((y*100)+x)*150)/10,
       e1: r_lwr1*5 + 150-((x*150)/10),  e2: r_lwr2*5 + 150-(((y*100)+x)*150)/10,

      // Second area
      raa1: (150-((x*150)/10)) - 0,        raa2: (150-(((y*100)+x)*150)/10) - 0,
       aa1: (150-((x*150)/10)) - r_upr1,    aa2: (150-(((y*100)+x)*150)/10) - r_upr2,
      rbb1: (150-((x*150)/10)) - r_upr1,   rbb2: (150-(((y*100)+x)*150)/10) - r_upr2,
       bb1: (150-((x*150)/10)) - r_upr1*2,  bb2: (150-(((y*100)+x)*150)/10) - r_upr2*2,
      rcc1: (150-((x*150)/10)) - r_upr1*2, rcc2: (150-(((y*100)+x)*150)/10) - r_upr2*2,
       cc1: (150-((x*150)/10)) - r_upr1*3,  cc2: (150-(((y*100)+x)*150)/10) - r_upr2*3,
      rdd1: (150-((x*150)/10)) - r_upr1*3, rdd2: (150-(((y*100)+x)*150)/10) - r_upr2*3,
       dd1: (150-((x*150)/10)) - r_upr1*4,  dd2: (150-(((y*100)+x)*150)/10) - r_upr2*4,
      ree1: (150-((x*150)/10)) - r_upr1*4, ree2: (150-(((y*100)+x)*150)/10) - r_upr2*4,
       ee1: (150-((x*150)/10)) - r_upr1*5,  ee2: (150-(((y*100)+x)*150)/10) - r_upr2*5
    };
  },
  weather() {
    var h = parseInt(Session.get("strength-h"));
    var current = this.cityname;
    var title = "dummy.png";
    $('paper-checkbox[checked]').each(function() {
      var name = $(this).attr('class').split(' ')[0];
      if(name=="health") title = current+"_w.png";
    });
    return {name: title};
  },
  safety() {
    var s = parseInt(Session.get("strength-s"));
    var current = this.cityname;
    var title = "dummy.png";
    $('paper-checkbox[checked]').each(function() {
      var name = $(this).attr('class').split(' ')[0];
      if(name=="safety") title = current+"_s.png";
    });
    return {name: title};
  },
  traffic() {
    var t = parseInt(Session.get("strength-t"));
    var current = this.cityname;
    var title = "dummy.png";
    $('paper-checkbox[checked]').each(function() {
      var name = $(this).attr('class').split(' ')[0];
      if(name=="traffic") title = current+"_t.png";
    });
    return {name: title};
  },
  airqual() {
    var p = parseInt(Session.get("strength-p"));
    var current = this.cityname;
    var title = "dummy.png";
    $('paper-checkbox[checked]').each(function() {
      var name = $(this).attr('class').split(' ')[0];
      if(name=="polluted") title = current+"_a.png";
    });
    return {name: title};
  }
});
