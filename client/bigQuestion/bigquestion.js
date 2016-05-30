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
      radio: false,
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
    $(".big-send-container").fadeOut(function(){
      if (current == 4) {
        $(".big-send-p").text("(will take you to the last question)");
      }
      if (current == 5) {
        $(".big-send").text("Finish");
        $(".big-send").fadeOut();
        $(".big-finish").fadeIn();
        $(".big-send-p").text("(will take you to the Google Form)");
      }
    });

    $(".inner-question-container").fadeOut(function(){
      $(".inner-question-container").delay(100).fadeIn(function(){
        Session.set("qnumber",current+1);
      });
    });
  },
  "click .big-finish" (event, instance) {
    $(".big-question-container").background("css","rgba(255,255,255,1)");
    $(".inner-question-container").fadeOut();
  }
});
