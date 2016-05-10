Template.cityrowbottom.helpers({
  city() {
    var r = Session.get("rowbottom");
    var city = [];
    if(r=="boston") { city  = Cities.findOne({city:"boston"  }); city.cityname = "Boston"; }
    if(r=="newyork"){ city  = Cities.findOne({city:"newyork" }); city.cityname = "New York City";}
    if(r=="houston"){ city  = Cities.findOne({city:"houston" }); city.cityname = "Houston";}
    if(r=="seattle"){ city  = Cities.findOne({city:"seattle" }); city.cityname = "Seattle";}
    if(r=="atlanta"){ city  = Cities.findOne({city:"atlanta" }); city.cityname = "Atlanta"; }
    return city;
  }
});

Template.cityrowbottom.events({
  'click .cb-seattle'(event, instance) { Session.set("rowbottom", "seattle"); },
  'click .cb-boston' (event, instance) { Session.set("rowbottom", "boston");  },
  'click .cb-newyork'(event, instance) { Session.set("rowbottom", "newyork"); },
  'click .cb-houston'(event, instance) { Session.set("rowbottom", "houston"); },
  'click .cb-atlanta'(event, instance) { Session.set("rowbottom", "atlanta"); }
});
