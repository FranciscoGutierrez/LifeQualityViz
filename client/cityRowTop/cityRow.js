Template.cityrowtop.helpers({
  city() {
    var r = Session.get("row2");
    var city = [];
    if(r=="boston")  city  = Cities.findOne({city:"boston" });
    if(r=="newyork") city  = Cities.findOne({city:"newyork" });
    if(r=="houston") city  = Cities.findOne({city:"houston" });
    if(r=="seattle") city  = Cities.findOne({city:"seattle" });
    if(r=="atlanta") city  = Cities.findOne({city:"atlanta" });

    city.cityname = "New York City";
    city.cityname = "Boston";
    city.cityname = "Houston";
    city.cityname = "Seattle";
    city.cityname = "Atlanta";
    return city;
  }
});
