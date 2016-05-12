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
      $(".cityrow-health").fadeIn();
      $(".crh-health").fadeIn();
      $(".crf-health").fadeIn();
    } else {
      $(".cityrow-health").fadeOut();
      $(".crh-health").fadeOut();
      $(".crf-health").fadeOut();
    }
  },
  'click .safety'  (event, instance) {
    if ($('.safety').prop('checked')) {
      $(".cityrow-safety").fadeIn();
      $(".crh-safety").fadeIn();
      $(".crf-safety").fadeIn();
    } else {
      $(".cityrow-safety").fadeOut();
      $(".crh-safety").fadeOut();
      $(".crf-safety").fadeOut();
    }
  },
  'click .traffic' (event, instance) {
    if ($('.traffic').prop('checked')) {
      $(".cityrow-traffic").fadeIn();
      $(".crh-traffic").fadeIn();
      $(".crf-traffic").fadeIn();
    } else {
      $(".cityrow-traffic").fadeOut();
      $(".crh-traffic").fadeOut();
      $(".crf-traffic").fadeOut();
    }
  },
  'click .polluted'(event, instance) {
    if ($('.polluted').prop('checked')) {
      $(".cityrow-polution").fadeIn();
      $(".crh-polution").fadeIn();
      $(".crf-polution").fadeIn();
    } else {
      $(".cityrow-polution").fadeOut();
      $(".crh-polution").fadeOut();
      $(".crf-polution").fadeOut();
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
