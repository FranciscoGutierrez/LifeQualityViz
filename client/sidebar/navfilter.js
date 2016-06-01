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
    var health  = parseInt(Session.get("strength-h"));
    var traffic = parseInt(Session.get("strength-t"));
    var safety  = parseInt(Session.get("strength-s"));
    var airqual = parseInt(Session.get("strength-p"));
    return { h: health, t: traffic, s: safety, p: airqual};
  }
});

Template.navfilter.events({
  'click .health'  (event, template) {
    var sh = Number(Session.get("strength-h"));
    if ($('.health').prop('checked')) {
      $(".im-h, .weather-info, .cr-name-h, .cityrow-health, .crh-health, .crf-health").fadeIn();
      Session.set("strength-h",Number(sh+0.01));
    } else {
      $(".im-h, .weather-info, .cr-name-h, .crf-health, .crh-health, .cityrow-health").fadeOut();
      Session.set("strength-h",Number(sh+0.01));
    }
  },
  'click .safety'  (event, template) {
    var ss = Number(Session.get("strength-s"));
    if ($('.safety').prop('checked')) {
      $(".im-s, .safety-info, .cr-name-s, .crf-safety, .crh-safety, .cityrow-safety").fadeIn();
      Session.set("strength-s",Number(ss+0.01));
    } else {
      $(".im-s, .safety-info, .cr-name-s, .crf-safety, .crh-safety, .cityrow-safety").fadeOut();
      Session.set("strength-s",Number(ss+0.01));
    }
  },
  'click .traffic' (event, template) {
    var st = Number(Session.get("strength-t"));
    if ($('.traffic').prop('checked')) {
      $(".im-t, .traffic-info, .cr-name-t, .crf-traffic, .crh-traffic, .cityrow-traffic").fadeIn();
      Session.set("strength-t",Number(st+0.01));
    } else {
      $(".im-t, .traffic-info, .cr-name-t, .crf-traffic, .crh-traffic, .cityrow-traffic").fadeOut();
      Session.set("strength-t",Number(st+0.01));
    }
  },
  'click .polluted'(event, template) {
    var sp = Number(Session.get("strength-p"));
    if ($('.polluted').prop('checked')) {
      $(".im-p, .airq-info, .cr-name-p, .crf-polution, .crh-polution, .cityrow-polution").fadeIn();
      Session.set("strength-p",Number(sp+0.01));
    } else {
      $(".im-p, .airq-info, .cr-name-p, .crf-polution, .crh-polution, .cityrow-polution").fadeOut();
      Session.set("strength-p",Number(sp+0.01));
    }
  },
  'click paper-checkbox'(event, template) {
    var count = 0;
    $('paper-checkbox[checked]').each(function() { count = count + 1; });
    if(count < 1) {
      if(Session.get("option") == "map") $(".leaflet-marker-icon").fadeOut();
    }
    if(count > 0) {
      if(Session.get("option") == "map") $(".leaflet-marker-icon").fadeIn();
    }
  }

});

Template.navfilter.rendered = function () {
  var health   = $("#health-slider");
  var safety   = $("#safety-slider");
  var polution = $("#polution-slider");
  var traffic  = $("#traffic-slider");


  health.noUiSlider({
    start: 80,
    connect: "lower",
    range: { 'min': 0, 'max': 100 }
  }).on('slide', function (ev, val) {
    Session.set("strength-h",val);
  });

  safety.noUiSlider({
    start: 80,
    connect: "lower",
    range: { 'min': 0, 'max': 100 }
  }).on('slide', function (ev, val) {
    Session.set("strength-s",val);
  });

  polution.noUiSlider({
    start: 80,
    connect: "lower",
    range: { 'min': 0, 'max': 100 }
  }).on('slide', function (ev, val) {
    Session.set("strength-p",val);
  });

  traffic.noUiSlider({
    start: 80,
    connect: "lower",
    range: { 'min': 0, 'max': 100 }
  }).on('slide', function (ev, val) {
    Session.set("strength-t",val);
  });

};
