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
      return {a: Math.round(val1), b: Math.round(val2), x: val1-3, y: val2-3};
  }
});

Template.bigquestion.events({
  "click .big-next"  (event, instance) {
    var current = Session.get("qnumber");
    $(".question-"+current).fadeOut(function(){
        Session.set("qnumber",current+1);
        $(".question-"+current+1).fadeIn();
    });
  },
  "click .big-finish" (event, instance) {
    $(".inner-question-container").fadeOut(function(){
      $(".big-question-container").css("background","rgba(255,255,255,1)");
    });
  }
});



// Template.bigquestion.rendered = function () {
//   this.$("#question-slider").noUiSlider({
//     start: [20,80],
//     animate: true,
//     step: 1,
//     tooltips: true,
//     connect:  true,
//     range: {'min': 0, 'max': 100}
//   }).on('slide', function (ev, val) {
//     Session.set("answr1",val[0]);
//     Session.set("answr2",val[1]);
//   });
// };
