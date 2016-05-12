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
      $(".cr-name-h").fadeIn();
    } else {
      $(".cityrow-health").fadeOut();
      $(".crh-health").fadeOut();
      $(".crf-health").fadeOut();
      $(".cr-name-h").fadeOut();
    }
  },
  'click .safety'  (event, instance) {
    if ($('.safety').prop('checked')) {
      $(".cityrow-safety").fadeIn();
      $(".crh-safety").fadeIn();
      $(".crf-safety").fadeIn();
      $(".cr-name-s").fadeIn();
    } else {
      $(".cityrow-safety").fadeOut();
      $(".crh-safety").fadeOut();
      $(".crf-safety").fadeOut();
      $(".cr-name-s").fadeOut();
    }
  },
  'click .traffic' (event, instance) {
    if ($('.traffic').prop('checked')) {
      $(".cityrow-traffic").fadeIn();
      $(".crh-traffic").fadeIn();
      $(".crf-traffic").fadeIn();
      $(".cr-name-t").fadeIn();
    } else {
      $(".cityrow-traffic").fadeOut();
      $(".crh-traffic").fadeOut();
      $(".crf-traffic").fadeOut();
      $(".cr-name-t").fadeOut();
    }
  },
  'click .polluted'(event, instance) {
    if ($('.polluted').prop('checked')) {
      $(".cityrow-polution").fadeIn();
      $(".crh-polution").fadeIn();
      $(".crf-polution").fadeIn();
      $(".cr-name-p").fadeIn();
    } else {
      $(".cityrow-polution").fadeOut();
      $(".crh-polution").fadeOut();
      $(".crf-polution").fadeOut();
      $(".cr-name-p").fadeOut();
    }
  }
});

Template.navfilter.rendered = function () {
  this.$("#health-slider").noUiSlider({
    start: [80],
    connect: 'lower',
    range: { 'min': 0, 'max': 100 },
    pips: { mode: 'steps', density: 2 }
  }).on('slide', function (ev, val) {
    Session.set("strength-h",val);
  });

  this.$("#safety-slider").noUiSlider({
    start: [80],
    connect: 'lower',
    range: { 'min': 0, 'max': 100 },
    pips: { mode: 'steps', density: 2 }
  }).on('slide', function (ev, val) {
    Session.set("strength-s",val);
  });

  this.$("#polution-slider").noUiSlider({
    start: [80],
    connect: 'lower',
    range: { 'min': 0, 'max': 100 },
    pips: { mode: 'steps', density: 2 }
  }).on('slide', function (ev, val) {
    Session.set("strength-p",val);
  });

  this.$("#traffic-slider").noUiSlider({
    start: [80],
    connect: 'lower',
    range: { 'min': 0, 'max': 100 },
    pips: { mode: 'steps', density: 2 }
  }).on('slide', function (ev, val) {
    Session.set("strength-t",val);
  });
};
