Template.navfilter.helpers({
  city() {
    var r = Session.get("rowtop");
    var city = [];
    if(r=="boston") { city  = Cities.findOne({city:"boston" });  city.cityname = "Boston"; }
    if(r=="newyork"){ city  = Cities.findOne({city:"newyork" }); city.cityname = "New York City";}
    if(r=="houston"){ city  = Cities.findOne({city:"houston" }); city.cityname = "Houston";}
    if(r=="seattle"){ city  = Cities.findOne({city:"seattle" }); city.cityname = "Seattle";}
    if(r=="atlanta"){ city  = Cities.findOne({city:"atlanta" }); city.cityname = "Atlanta"; }

    return city;
  }
});

Template.navfilter.events({
  'click .health'  (event, instance) {
    if ($('.health').prop('checked')) {
      $(".cityrow-health").css("visibility","visible");
      $(".crh-health").css("visibility","visible");
      $(".crf-health").css("visibility","visible");
    } else {
      $(".cityrow-health").css("visibility","hidden");
      $(".crh-health").css("visibility","hidden");
      $(".crf-health").css("visibility","hidden");
    }
  },
  'click .safety'  (event, instance) {
    if ($('.safety').prop('checked')) {
      $(".cityrow-safety").css("visibility","visible");
      $(".crh-safety").css("visibility","visible");
      $(".crf-safety").css("visibility","visible");
    } else {
      $(".cityrow-safety").css("visibility","hidden");
      $(".crh-safety").css("visibility","hidden");
      $(".crf-safety").css("visibility","hidden");
    }
  },
  'click .traffic' (event, instance) {
    if ($('.traffic').prop('checked')) {
      $(".cityrow-traffic").css("visibility","visible");
      $(".crh-traffic").css("visibility","visible");
      $(".crf-traffic").css("visibility","visible");
    } else {
      $(".cityrow-traffic").css("visibility","hidden");
      $(".crh-traffic").css("visibility","hidden");
      $(".crf-traffic").css("visibility","hidden");
    }
  },
  'click .polluted'(event, instance) {
    if ($('.polluted').prop('checked')) {
      $(".cityrow-polution").css("visibility","visible");
      $(".crh-polution").css("visibility","visible");
      $(".crf-polution").css("visibility","visible");
    } else {
      $(".cityrow-polution").css("visibility","hidden");
      $(".crh-polution").css("visibility","hidden");
      $(".crf-polution").css("visibility","hidden");
    }
  }
});

Template.navfilter.rendered = function () {
  this.$("#slider").noUiSlider({
    start: [80],
    connect: 'lower',
    range: { 'min': 0, 'max': 100 },
    pips: { mode: 'steps', density: 2 }
  }).on('slide', function (ev, val) {
    Session.set("strength",val);
  });
};
