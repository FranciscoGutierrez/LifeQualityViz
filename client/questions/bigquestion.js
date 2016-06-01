Template.bigquestion.onCreated(function(){
  this.questions = new ReactiveVar(1);
});

Template.bigquestion.helpers({
  legend() {
    return Session.get("qnumber");
  },
  question() {
    var option = Session.get("option");
    var number = Session.get("qnumber");
    return {
      option: option,
       intro: "When Quality of Life is around 80% in New York,",
        body: "The Level of Happiness is between...",
     heckbox: false,
       radio: false,
      slider: true,
      number: number
    };
  },
  slider() {
      var val1 = 20;
      var val2 = 80;
      val1 = Session.get("answr1");
      val2 = Session.get("answr2");
      if(val1<5) { $(".slider-zero").css("visibility","hidden");  } else { $(".slider-zero").css("visibility","visible"); }
      if(val2>95){ $(".slider-hound").css("visibility","hidden"); } else { $(".slider-hound").css("visibility","visible"); }
      return {a: val1, b: val2, x: val1-3, y: val2-3};
  }
});

Template.bigquestion.events({
  "click .big-hide"  (event, instance) {
    $(".big-question-container").fadeOut();
  },
  "click .big-send"  (event, instance) {
    var current = Session.get("qnumber");
    Session.set("qnumber",current+1);
    if (current == 5) $(".big-send").fadeOut(function(){$(".big-finish").fadeIn();});
    $(".big-question-container").fadeOut(function(){
      $(".big-question-container").delay(100).fadeIn();
    });

  },
  "click .big-finish" (event, instance) {
    $(".inner-question-container").fadeOut(function(){
      $(".big-question-container").css("background","rgba(255,255,255,1)");
    });
  }
});



Template.bigquestion.rendered = function () {
  this.$("#question-slider").noUiSlider({
    start: [20,80],
    tooltips: true,
    connect:  true,
    range: {'min': 0, 'max': 100}
  }).on('slide', function (ev, val) {
    Session.set("answr1",val[0]);
    Session.set("answr2",val[1]);
  });
};
