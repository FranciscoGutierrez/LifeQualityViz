Template.lifequality.helpers({
  strength() {
    var check = $('paper-checkbox[checked]').size();
    var h = parseInt(Session.get("strength-h"));
    var t = parseInt(Session.get("strength-t"));
    var s = parseInt(Session.get("strength-s"));
    var p = parseInt(Session.get("strength-p"));
    var x = (h+t+s+p)/check;
    return  x;
  },
  prediction() {
    var city  = Cities.findOne({"city":Session.get("rowtop")});
    var sum_c = [];
    var sum_x = [];
    var sum_y = [];
    var h = parseInt(Session.get("strength-h"));
    var t = parseInt(Session.get("strength-t"));
    var s = parseInt(Session.get("strength-s"));
    var p = parseInt(Session.get("strength-p"));
    if(h>0) {
      sum_c.push(h);
      sum_x.push(city.w_m1);
      sum_y.push(city.w_m2);
    }
    if(t>0) {
      sum_c.push(t);
      sum_x.push(city.t_m1);
      sum_y.push(city.t_m2);
    }
    if(s>0) {
      sum_c.push(s);
      sum_x.push(city.s_m1);
      sum_y.push(city.s_m2);
    }
    if(p>0) {
      sum_c.push(p);
      sum_x.push(city.a_m1);
      sum_y.push(city.a_m2);
    }
    var c = sum_c.reduce((a,b)=>a+b,0)/sum_c.length;
    var x = sum_x.reduce((a,b)=>a+b,0)/sum_x.length;
    var y = sum_y.reduce((a,b)=>a+b,0)/sum_y.length;
    return {y: 100-(((y * c) + x)*10), lwr: 400-((x*400)/10), upr: 400-(((y * 100) + x)*400)/10};
  },
  weather() {
    var h = parseInt(Session.get("strength-h"));
    var current = Session.get("rowtop");
    var title = "";
    $('paper-checkbox[checked]').each(function() {
      var name = $(this).attr('class').split(' ')[0];
      if(name=="health") title = current+"_w.png";
    });
    return {name: title, opacity:h/100};
  },
  safety() {
    var s = parseInt(Session.get("strength-s"));
    var current = Session.get("rowtop");
    var title = "";
    $('paper-checkbox[checked]').each(function() {
      var name = $(this).attr('class').split(' ')[0];
      if(name=="safety") title = current+"_s.png";
    });
    return {name: title, opacity:s/100};
  },
  traffic() {
    var t = parseInt(Session.get("strength-t"));
    var current = Session.get("rowtop");
    var title = "";
    $('paper-checkbox[checked]').each(function() {
      var name = $(this).attr('class').split(' ')[0];
      if(name=="traffic") title = current+"_t.png";
    });
    return {name: title, opacity:t/100};
  },
  airqual() {
    var p = parseInt(Session.get("strength-p"));
    var current = Session.get("rowtop");
    var title = "";
    $('paper-checkbox[checked]').each(function() {
      var name = $(this).attr('class').split(' ')[0];
      if(name=="polluted") title = current+"_a.png";
    });
    return {name: title, opacity:p/100};
  }
});
