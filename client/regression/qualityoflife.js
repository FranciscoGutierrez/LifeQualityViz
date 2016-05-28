Template.lifequality.onCreated(function(){
  var r = Template.instance().data['cityname'];
  this.my_city = new ReactiveVar(Cities.findOne({"city":r}));
});

Template.lifequality.helpers({
  city() {
    var city = Template.instance().my_city.get();
    var name = this.cityname;
    if(name == "denver" )  name = "Denver";
    if(name == "angeles" ) name = "Los Angeles";
    if(name == "newyork")  name = "New York";
    if(name == "houston")  name = "Houston";
    if(name == "seattle")  name = "Seattle";
    if(name == "atlanta")  name = "Atlanta";
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

    var sum_upr1 = [];
    var sum_upr2 = [];
    var sum_lwr1 = [];
    var sum_lwr2 = [];

    var h = city.w2 - ((city.w2-city.w1)*(Session.get("strength-h")/100));
    var t = city.t2 - ((city.t2-city.t1)*(Session.get("strength-t")/100));
    var s = city.s2 - ((city.s2-city.s1)*(Session.get("strength-s")/100));
    var p = city.a2 - ((city.a2-city.a1)*(Session.get("strength-p")/100));

    if($(".health").attr("checked")) {
      sum_c.push(h);
      sum_x.push(city.w_m1);
      sum_y.push(city.w_m2);
      sum_upr1.push(city.w_upr_min);
      sum_upr2.push(city.w_upr_max);
      sum_lwr1.push(city.w_lwr_min);
      sum_lwr2.push(city.w_lwr_max);
    }
    if($(".traffic").attr("checked")) {
      sum_c.push(t);
      sum_x.push(city.t_m1);
      sum_y.push(city.t_m2);
      sum_upr1.push(city.t_upr_min);
      sum_upr2.push(city.t_upr_max);
      sum_lwr1.push(city.t_lwr_min);
      sum_lwr2.push(city.t_lwr_max);
    }
    if($(".safety").attr("checked")) {
      sum_c.push(s);
      sum_x.push(city.s_m1);
      sum_y.push(city.s_m2);
      sum_upr1.push(city.s_upr_min);
      sum_upr2.push(city.s_upr_max);
      sum_lwr1.push(city.s_lwr_min);
      sum_lwr2.push(city.s_lwr_max);
    }
    if($(".polluted").attr("checked")) {
      sum_c.push(p);
      sum_x.push(city.a_m1);
      sum_y.push(city.a_m2);
      sum_upr1.push(city.a_upr_min);
      sum_upr2.push(city.a_upr_max);
      sum_lwr1.push(city.a_lwr_min);
      sum_lwr2.push(city.a_lwr_max);
    }
    var c = sum_c.reduce((a,b)=>a+b,0)/sum_c.length;
    var x = sum_x.reduce((a,b)=>a+b,0)/sum_x.length;
    var y = sum_y.reduce((a,b)=>a+b,0)/sum_y.length;
    var upr1 = sum_upr1.reduce((a,b)=>a+b,0)/sum_upr1.length; //min
    var upr2 = sum_upr2.reduce((a,b)=>a+b,0)/sum_upr2.length; //max
    var lwr1 = sum_lwr1.reduce((a,b)=>a+b,0)/sum_lwr1.length; //min
    var lwr2 = sum_lwr2.reduce((a,b)=>a+b,0)/sum_lwr2.length; //max
    var p = upr2-(((y * 100) + x))/5;
    return {
  value: Math.round((((y * c) + x)*10)),
      y: 100-(((y * c) + x)*10),
    lwr: 150-((x*150)/10),
    upr: 150-(((y*100)+x)*150)/10, // uncertainty here...

    ra1: 0   + 150-((x*150)/10), ra2:  0  + 150-(((y*100)+x)*150)/10,
     a1: p   + 150-((x*150)/10),  a2:  p  + 150-(((y*100)+x)*150)/10,
    rb1: p   + 150-((x*150)/10), rb2:  p  + 150-(((y*100)+x)*150)/10,
     b1: p*2 + 150-((x*150)/10),  b2: p*2 + 150-(((y*100)+x)*150)/10,
    rc1: p*2 + 150-((x*150)/10), rc2: p*2 + 150-(((y*100)+x)*150)/10,
     c1: p*3 + 150-((x*150)/10),  c2: p*3 + 150-(((y*100)+x)*150)/10,
    rd1: p*3 + 150-((x*150)/10), rd2: p*3 + 150-(((y*100)+x)*150)/10,
     d1: p*4 + 150-((x*150)/10),  d2: p*4 + 150-(((y*100)+x)*150)/10,
    re1: p*4 + 150-((x*150)/10), re2: p*4 + 150-(((y*100)+x)*150)/10,
     e1: p*5 + 150-((x*150)/10),  e2: p*5 + 150-(((y*100)+x)*150)/10,

     // Second area
     raa1: (150-((x*150)/10)) - 0, raa2:  (150-(((y*100)+x)*150)/10) - 0,
      aa1: (150-((x*150)/10)) - p,  aa2:  (150-(((y*100)+x)*150)/10) - p,
     rbb1: (150-((x*150)/10)) - p, rbb2: (150-(((y*100)+x)*150)/10) -  p,
      bb1: (150-((x*150)/10)) - p*2,  bb2: (150-(((y*100)+x)*150)/10) - p*2,
     rcc1: (150-((x*150)/10)) - p*2, rcc2: (150-(((y*100)+x)*150)/10) - p*2,
      cc1: (150-((x*150)/10)) - p*3,  cc2: (150-(((y*100)+x)*150)/10) - p*3,
     rdd1: (150-((x*150)/10)) - p*3, rdd2: (150-(((y*100)+x)*150)/10) - p*3,
      dd1: (150-((x*150)/10)) - p*4,  dd2: (150-(((y*100)+x)*150)/10) - p*4,
     ree1: (150-((x*150)/10)) - p*4, ree2: (150-(((y*100)+x)*150)/10) - p*4,
      ee1: (150-((x*150)/10)) - p*5,  ee2: (150-(((y*100)+x)*150)/10) - p*5
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
