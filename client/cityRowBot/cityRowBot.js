Template.cityrowbot.onCreated(function() {
  this.health = new ReactiveVar();
  this.safety = new ReactiveVar();
  this.qlindx = new ReactiveVar();
  this.pollut = new ReactiveVar();
  this.traffi = new ReactiveVar();
});

Template.cityrowbot.helpers({
  city() {
    var r = Session.get("rowbot");
    var city = [];
    if(r=="boston") { city  = Cities.findOne({city:"boston"  }); city.cityname = "Boston"; }
    if(r=="newyork"){ city  = Cities.findOne({city:"newyork" }); city.cityname = "New York City";}
    if(r=="houston"){ city  = Cities.findOne({city:"houston" }); city.cityname = "Houston";}
    if(r=="seattle"){ city  = Cities.findOne({city:"seattle" }); city.cityname = "Seattle";}
    if(r=="atlanta"){ city  = Cities.findOne({city:"atlanta" }); city.cityname = "Atlanta"; }
    return city;
  },
  pred() {
    var temp = Template.instance();
    var norm = Session.get("strength");
    var traf = Session.get("strength-t");
    var polu = Session.get("strength-p");
    var safe = Session.get("strength-s");
    var heal = Session.get("strength-h");
    var c  = 0;
    var rh = 0;
    var rs = 0;
    var rq = 0;
    var rp = 0;
    var rt = 0;
    c = Cities.findOne({city:Session.get("rowbot")});
    if(c) {
      rh = ((c.h_m1 * heal) + c.h_m2)*100;
      rs = ((c.s_m1 * safe) + c.s_m2)*100;
      rq = ((c.q_m1 * norm) + c.q_m2)*100;
      rp = ((c.p_m1 * polu) + c.p_m2)*100;
      rt = ((c.t_m1 * traf) + c.t_m2)*100;
      temp.health.set(rh);
      temp.safety.set(rs);
      temp.qlindx.set(rq);
      temp.pollut.set(rp);
      temp.traffi.set(rt);
    }
    return {
      rh:100-rh,
      rs:100-rs,
      rq:100-rq,
      rp:100-rp,
      rt:100-rt,
      gh: rh.toFixed(2),
      gs: rs.toFixed(2),
      gq: rq.toFixed(2),
      gp: rp.toFixed(2),
      gt: rt.toFixed(2),
    };
  },
  strength() {
    return {
      norm: Session.get("strength"),
      traf: Session.get("strength-t"),
      polu: Session.get("strength-p"),
      safe: Session.get("strength-s"),
      heal: Session.get("strength-h")
    };
  }
});

Template.cityrowbot.events({
  'click .cb-seattle'(event, instance) { Session.set("rowbot", "seattle"); },
  'click .cb-boston' (event, instance) { Session.set("rowbot", "boston");  },
  'click .cb-newyork'(event, instance) { Session.set("rowbot", "newyork"); },
  'click .cb-houston'(event, instance) { Session.set("rowbot", "houston"); },
  'click .cb-atlanta'(event, instance) { Session.set("rowbot", "atlanta"); }
});


Template.cityrowbot.rendered = function () {};
