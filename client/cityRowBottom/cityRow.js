Template.cityrowbottom.helpers({
  city() {
    var r = Session.get("row2");
    var city = [];
    if(r=="boston") { city  = Cities.findOne({city:"boston" });  city.cityname = "Boston"; }
    if(r=="newyork"){ city  = Cities.findOne({city:"newyork" }); city.cityname = "New York City";}
    if(r=="houston"){ city  = Cities.findOne({city:"houston" }); city.cityname = "Houston";}
    if(r=="seattle"){ city  = Cities.findOne({city:"seattle" }); city.cityname = "Seattle";}
    if(r=="atlanta"){ city  = Cities.findOne({city:"atlanta" }); city.cityname = "Atlanta"; }

    return city;
  }
});
