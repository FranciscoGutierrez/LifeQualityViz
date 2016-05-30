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
      checkbox: false,
      radio:  false,
      slider: true,
      number: number
    };
  }
});

Template.bigquestion.events({
  "click .big-hide"  (event, instance) {
    $(".big-question-container").fadeOut();
  },
  "click .big-send"  (event, instance) {
    var current = Session.get("qnumber");
    $(".question-control").fadeOut();
    $(".big-send-container").fadeOut(function(){
      if (current == 4) {
        $(".big-send-p").text("(will take you to the last question)");
      }
      if (current == 5) {
        $(".big-send-p").text("(will take you to the Google Form)");
        $(".big-send").fadeOut(function(){
          $(".big-finish").fadeIn();
        });
      }
    })
    $(".inner-question-container").fadeOut(function(){
      $(".inner-question-container").delay(100).fadeIn(function(){
        Session.set("qnumber",current+1);
      });
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
    connect: true,
    range: { 'min': 0, 'max': 100 }
  }).on('slide', function (ev, val) {
    Session.set("answr1",val);
    Session.set("answr2",val);
  });
};
