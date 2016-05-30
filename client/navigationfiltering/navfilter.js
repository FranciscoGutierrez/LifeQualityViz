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
  },
  importance() {
    return {
      h:parseInt(Session.get("strength-h")),
      t:parseInt(Session.get("strength-t")),
      s:parseInt(Session.get("strength-s")),
      p:parseInt(Session.get("strength-p"))
    };
  },
  qnumber() {
    return Session.get("qnumber");
  },
  question() {
    var option = Session.get("option");
    var number = Session.get("qnumber");
    return {
      option: option,
      intro: "When Quality of Life is around 80% in New York,",
      body: "The Level of Happiness is between...",
      checkbox: false,
      radio: false,
      slider: true,
      number: number
    };
  }
});

Template.navfilter.events({
  'click .health'  (event, instance) {
    if ($('.health').prop('checked')) {
      $(".im-h, .weather-info, .cr-name-h, .cityrow-health, .crh-health, .crf-health").fadeIn();
      Session.set("strength-h",80);
    } else {
      $(".im-h, .weather-info, .cr-name-h, .crf-health, .crh-health, .cityrow-health").fadeOut();
      Session.set("strength-h",0)
    }
  },
  'click .safety'  (event, instance) {
    if ($('.safety').prop('checked')) {
      $(".im-s, .safety-info, .cr-name-s, .crf-safety, .crh-safety, .cityrow-safety").fadeIn();
      Session.set("strength-s",80)
    } else {
      $(".im-s, .safety-info, .cr-name-s, .crf-safety, .crh-safety, .cityrow-safety").fadeOut();
      Session.set("strength-s",0);
    }
  },
  'click .traffic' (event, instance) {
    if ($('.traffic').prop('checked')) {
      $(".im-t, .traffic-info, .cr-name-t, .crf-traffic, .crh-traffic, .cityrow-traffic").fadeIn();
      Session.set("strength-t",80);
    } else {
      $(".im-t, .traffic-info, .cr-name-t, .crf-traffic, .crh-traffic, .cityrow-traffic").fadeOut();
      Session.set("strength-t",0);
    }
  },
  'click .polluted'(event, instance) {
    if ($('.polluted').prop('checked')) {
      $(".im-p, .airq-info, .cr-name-p, .crf-polution, .crh-polution, .cityrow-polution").fadeIn();
      Session.set("strength-p",80);
    } else {
      $(".im-p, .airq-info, .cr-name-p, .crf-polution, .crh-polution, .cityrow-polution").fadeOut();
      Session.set("strength-p",0);
    }
  },
  'click paper-checkbox'(event, instance) {
    var count = 0;
    $('paper-checkbox[checked]').each(function() { count = count + 1; });
    if(count < 1) {
      if(Session.get("option") == "map") $(".leaflet-marker-icon").fadeOut();
    }
    if(count > 0) {
      if(Session.get("option") == "map") $(".leaflet-marker-icon").fadeIn();
    }
  },
  'click .q-show-answer' (event, instance) {
    $(".big-question-container").fadeIn();
    $(".big-question-container").css("background","rgba(255,255,255,0.7)");
    $(".big-send-container").css("display","flex");
  }
});

Template.navfilter.rendered = function () {
  this.$("#health-slider").noUiSlider({
    start: 80,
    connect: "lower",
    range: { 'min': 0, 'max': 100 }
  }).on('slide', function (ev, val) {
    Session.set("strength-h",val);
  });

  this.$("#safety-slider").noUiSlider({
    start: 80,
    connect: "lower",
    range: { 'min': 0, 'max': 100 }
  }).on('slide', function (ev, val) {
    Session.set("strength-s",val);
  });

  this.$("#polution-slider").noUiSlider({
    start: 80,
    connect: "lower",
    range: { 'min': 0, 'max': 100 }
  }).on('slide', function (ev, val) {
    Session.set("strength-p",val);
  });

  this.$("#traffic-slider").noUiSlider({
    start: 80,
    connect: "lower",
    range: { 'min': 0, 'max': 100 }
  }).on('slide', function (ev, val) {
    Session.set("strength-t",val);
  });
};
