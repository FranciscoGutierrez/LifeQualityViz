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
    } else {
      $(".cityrow-health").css("visibility","hidden");
      $(".crh-health").css("visibility","hidden");
    }
  },
  'click .safety'  (event, instance) {
    if ($('.safety').prop('checked')) {
      $(".cityrow-safety").css("visibility","visible");
      $(".crh-safety").css("visibility","visible");
    } else {
      $(".cityrow-safety").css("visibility","hidden");
      $(".crh-safety").css("visibility","hidden");
    }
  },
  'click .traffic' (event, instance) {
    if ($('.traffic').prop('checked')) {
      $(".cityrow-traffic").css("visibility","visible");
      $(".crh-traffic").css("visibility","visible");
    } else {
      $(".cityrow-traffic").css("visibility","hidden");
      $(".crh-traffic").css("visibility","hidden");
    }
  },
  'click .polluted'(event, instance) {
    if ($('.polluted').prop('checked')) {
      $(".cityrow-polution").css("visibility","visible");
      $(".crh-polution").css("visibility","visible");
    } else {
      $(".cityrow-polution").css("visibility","hidden");
      $(".crh-polution").css("visibility","hidden");
    }
  }
});

Template.navfilter.rendered = function () {
  this.$("#slider").noUiSlider({
    start: [80],
    range: {
      'min': [0],
      'max': [100]
    },
    pips: { // Show a scale with the slider
      mode: 'range',
      density: 2
    }
  }).on('slide', function (ev, val) {
    Session.set("strength",val);
    // var v  = parseFloat(val).toFixed(1);
    // $('circle').css("fill","#b0b0b0").promise().done(function(){
    //   for(var i=0; i<10; i++) {
    //     var a = (parseFloat(v)-(i/10)).toFixed(1);
    //     var b = (parseFloat(v)+(i/10)).toFixed(1);
    //     $('circle[cx="'+a+'%"]').each(function() { $(this).css("fill","#B45C7E"); });
    //     $('circle[cx="'+b+'%"]').each(function() { $(this).css("fill","#B45C7E"); });
    //   }
    //});
    // $(".main-circle").css("fill","#8c3d5e");
    // if(val<0) val=0;
    // Session.set("performance",val);
    // Session.get("upr");
    // Session.get("p");
    // Session.get("lwr");
    // var size = _.random(6, 6);
    // $(".ua5:lt("+size+")").css("opacity","1");
    // /******/
    // Session.set("size", size);
  });
};
