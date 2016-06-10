Template.bigquestion.onCreated(function(){
  this.questions = new ReactiveVar(1);
});

Template.bigquestion.helpers({
  factors() {
    var w = Math.round(Session.get("strength-h"));
    var s = Math.round(Session.get("strength-s"));
    var t = Math.round(Session.get("strength-t"));
    var a = Math.round(Session.get("strength-p"));

    if (w == 0) w = "0"; if (s == 0) s = "0";
    if (t == 0) t = "0"; if (a == 0) a = "0";

    if(!$(".health"  ).attr("checked")) w = false
    if(!$(".safety"  ).attr("checked")) s = false
    if(!$(".traffic" ).attr("checked")) t = false
    if(!$(".polluted").attr("checked")) a = false

    return { w: w, s: s, t: t, a: a };
  },
  legend() {
    return Session.get("qnumber");
  },
  question() {
    var option = Session.get("option");
    var current = Number(Session.get("qnumber"));
    $(".question-container").fadeOut(function(){
      $(".question-"+Number(Session.get("qnumber"))).fadeIn();
    });
    return {option: option,number: number};
  },
  slider() {
    var val = 100;
    var q = Number(Session.get("qnumber"));
    if(q > 1 && q < 3 ) val = Number(Session.get("gold1"));
    if(q > 3 && q < 5 ) val = Number(Session.get("gold2"));
    if(q > 5 && q < 7 ) val = Number(Session.get("gold3"));
    if(q > 7 && q < 9 ) val = Number(Session.get("gold4"));
    return {a: Math.round(val), x: val-2};
  }
});

Template.bigquestion.events({
  "click .question-answers" (event,instance) {
    $(".question-buttons").css("visibility","visible");
  },
  "click .big-golden"(event, instance) {
    var current = Number(Session.get("qnumber"));
    // Reset the sidebar...
    Session.set("strength-t",100);
    Session.set("strength-p",100);
    Session.set("strength-s",100);
    Session.set("strength-h",100);
    // Clear the sidebar
    $(".content-left").empty();
    Blaze.render(Template.navfilter,$(".content-left")[0]);
    $(".question-answers").css("visibility","hidden");
    $(".question-buttons").css("visibility","hidden");

    $(".golden").fadeOut(function(){
      setTimeout(function() {
        Session.set("qnumber",current+1);
        $(".question-"+(current+1)).fadeIn();
        $(".start-question-container").fadeIn( function() {
          $(".start-question").fadeIn();
        });
      }, 700);
    });

  },
  "click .big-next"  (event, instance) {
    var current = Number(Session.get("qnumber"));
    var timeend = Date.now();
    var weather = Math.round(Session.get("strength-h"));
    var safety  = Math.round(Session.get("strength-s"));
    var traffic = Math.round(Session.get("strength-t"));
    var air     = Math.round(Session.get("strength-p"));
    var gold1 = Session.get("gold1");
    var gold2 = Session.get("gold2");
    var gold3 = Session.get("gold3");
    var gold4 = Session.get("gold4");
    var trust = 5;
    if(Number(gold1) != 60  && current > 2) trust = trust - 1;
    if(Number(gold2) != 35  && current > 3) trust = trust - 1;
    if(Number(gold3) != 25  && current > 5) trust = trust - 1;
    if(Number(gold4) != 75  && current > 7) trust = trust - 1;
    var actions_sw = Session.get("actions_sw",0);
    var actions_ss = Session.get("actions_ss",0);
    var actions_st = Session.get("actions_st",0);
    var actions_sa = Session.get("actions_sa",0);
    var actions_cw = Session.get("actions_cw",0);
    var actions_cs = Session.get("actions_cs",0);
    var actions_ct = Session.get("actions_ct",0);
    var actions_ca = Session.get("actions_ca",0);
    var actions = actions_sw + actions_ss + actions_st + actions_sa + actions_cw + actions_cs + actions_ct + actions_ca;
    var correct = false;
    var ans_a = "";
    var ans_b = "";

    if(weather == 0) weather = "0"; if(safety == 0) safety = "0";
    if(traffic == 0) traffic = "0"; if(air    == 0) air    = "0";

    if(!$(".health"  ).attr("checked")) weather = false;
    if(!$(".safety"  ).attr("checked")) safety  = false;
    if(!$(".traffic" ).attr("checked")) traffic = false;
    if(!$(".polluted").attr("checked")) air     = false;

    if(current==1) {
      ans_a = $(".control-a-1 option:selected").text();
      ans_b = $(".control-b-1 option:selected").text();
      if(ans_a == "Traffic" && ans_b == "Safety")  correct = true;
      if(ans_a == "Safety"  && ans_b == "Traffic") correct = true;
    }

    if(current==2) {
      ans_a = $("input[name=cities]:checked").val();
      ans_b = "";
      if(ans_a == "houston")  correct = true;
    }

    if(current==3) {
      ans_a = "";
      ans_b = "";
      if(weather== "0" && !safety && traffic=="0" && air == 100)  correct = true;
    }

    if(current==4) {
      ans_a = $("input[name=cities]:checked").val();
      ans_b = "";
      if(ans_a == "seattle")  correct = true;
    }

    if(current==5) {
      ans_a = $("input[name=cities]:checked").val();
      ans_b = "";
      if(ans_a == "angeles")  correct = true;
    }

    if(current==6) {
      ans_a = $("input[name=cities]:checked").val();
      ans_b = "";
      if(ans_a == "atlanta")  correct = true;
    }

    if(current==7) {
      ans_a = $("input[name=cities]:checked").val();
      ans_b = "";
      if(ans_a == "atlanta")  correct = true;
    }

    if(current==8) {
      ans_a = $(".control-a-8 option:selected").text();
      ans_b = "";
      var a1 = false;
      var a2 = false;
      var a3 = false;
      var ax = 0;
      $("input[name=cities]:checked").each(function() {
        ans_b = ans_b + $(this).attr('value') + "-";
        if($(this).attr('value') == "denver")  a1 = true;
        if($(this).attr('value') == "atlanta") a2 = true;
        if($(this).attr('value') == "seattle") a3 = true;
      });

      ax = a1 * a2 * a3;
      if(ans_a == "Traffic" && ax == 1)  correct = true;
    }

    if(current==9) {
      var ans_a = $("input[name=cities]:checked").val();
      var ans_b = "";
      if(ans_a == "seattle")  correct = true;
    }

    $("input:radio").removeAttr("checked");
    $("input:checkbox").removeAttr("checked");

    console.log({
      userid:    Session.get("ssid"),
      timestart: Session.get("qstart"),
      timeend:   timeend,
      timespent: timeend - Session.get("qstart"),
      actions_sw: actions_sw,
      actions_ss: actions_ss,
      actions_st: actions_st,
      actions_sa: actions_sa,
      actions_cw: actions_cw,
      actions_cs: actions_cs,
      actions_ct: actions_ct,
      actions_ca: actions_ca,
      golden1: gold1,
      golden2: gold2,
      golden3: gold3,
      golden4: gold4,
      trust:   trust,
      actions:  actions,
      question: current,
      correct: correct,
      ans_a: ans_a,
      ans_b: ans_b,
      viz:      Session.get("option"),
      weather:  weather,
      safety:   safety,
      traffic:  traffic,
      air:      air
    });

    Session.set("actions_sw",0);
    Session.set("actions_ss",0);
    Session.set("actions_st",0);
    Session.set("actions_sa",0);
    Session.set("actions_cw",0);
    Session.set("actions_cs",0);
    Session.set("actions_ct",0);
    Session.set("actions_ca",0);

    // Reset the sidebar...
    Session.set("strength-t",100);
    Session.set("strength-p",100);
    Session.set("strength-s",100);
    Session.set("strength-h",100);
    // Clear the sidebar
    $(".content-left").empty();
    Blaze.render(Template.navfilter,$(".content-left")[0]);
    // Hide answers from questionnare
    // Go to next question..
    $(".question-"+current).fadeOut(function(){
      if(current == 2) {
        $(".question-answers").css("visibility","hidden");
        $(".question-buttons").css("visibility","hidden");
        $(".question-2-1").fadeIn();
        $(".start-question-container").fadeIn( function() {
          $(".start-question").fadeIn();
        });
      } else if(current == 4) {
        $(".question-answers").css("visibility","hidden");
        $(".question-buttons").css("visibility","hidden");
        $(".question-4-1").fadeIn();
        $(".start-question-container").fadeIn( function() {
          $(".start-question").fadeIn();
        });
      } else if(current == 6) {
        $(".question-answers").css("visibility","hidden");
        $(".question-buttons").css("visibility","hidden");
        $(".question-6-1").fadeIn();
        $(".start-question-container").fadeIn( function() {
          $(".start-question").fadeIn();
        });
      } else if(current == 8) {
        $(".question-answers").css("visibility","hidden");
        $(".question-buttons").css("visibility","hidden");
        $(".question-8-1").fadeIn();
        $(".start-question-container").fadeIn( function() {
          $(".start-question").fadeIn();
        });
      } else {
        $(".question-answers").css("visibility","hidden");
        $(".question-buttons").css("visibility","hidden");
        Session.set("qnumber",current+1);
        $(".question-"+(current+1)).fadeIn();
        $(".start-question-container").fadeIn( function() {
          $(".start-question").fadeIn();
        });
      }
    });


  },
  "click .start-question" (event,instance) {
    Session.set("qstart",Date.now());
    $(".start-question").fadeOut();
    $(".start-question-container").fadeOut( function() {
      $(".navfilter-container").css("visibility","visible");
    });
  },
  "click .big-finish" (event, instance) {
    var current = Number(Session.get("qnumber"));
    var timeend = Date.now();
    var weather = Math.round(Session.get("strength-h"));
    var safety  = Math.round(Session.get("strength-s"));
    var traffic = Math.round(Session.get("strength-t"));
    var air     = Math.round(Session.get("strength-p"));
    var gold1 = Session.get("gold1");
    var gold2 = Session.get("gold2");
    var gold3 = Session.get("gold3");
    var gold4 = Session.get("gold4");
    var trust = 5;
    if(Number(gold1) != 60  && current > 2) trust = trust - 1;
    if(Number(gold2) != 35  && current > 3) trust = trust - 1;
    if(Number(gold3) != 25  && current > 5) trust = trust - 1;
    if(Number(gold4) != 75  && current > 7) trust = trust - 1;
    var actions_sw = Session.get("actions_sw",0);
    var actions_ss = Session.get("actions_ss",0);
    var actions_st = Session.get("actions_st",0);
    var actions_sa = Session.get("actions_sa",0);
    var actions_cw = Session.get("actions_cw",0);
    var actions_cs = Session.get("actions_cs",0);
    var actions_ct = Session.get("actions_ct",0);
    var actions_ca = Session.get("actions_ca",0);
    var actions = actions_sw + actions_ss + actions_st + actions_sa + actions_cw + actions_cs + actions_ct + actions_ca;
    var correct = false;

    if(weather == 0) weather = "0"; if(safety == 0) safety = "0";
    if(traffic == 0) traffic = "0"; if(air    == 0) air    = "0";

    if(!$(".health"  ).attr("checked")) weather = false;
    if(!$(".safety"  ).attr("checked")) safety  = false;
    if(!$(".traffic" ).attr("checked")) traffic = false;
    if(!$(".polluted").attr("checked")) air     = false;

    if(current==9) {
      var ans_a = $("input[name=cities]:checked").val();
      var ans_b = "";
      if(ans_a == "seattle")  correct = true;
    }

    $("input:radio").removeAttr("checked");
    $("input:checkbox").removeAttr("checked");

    console.log({
      userid:    Session.get("ssid"),
      timestart: Session.get("qstart"),
      timeend:   timeend,
      timespent: timeend - Session.get("qstart"),
      actions_sw: actions_sw,
      actions_ss: actions_ss,
      actions_st: actions_st,
      actions_sa: actions_sa,
      actions_cw: actions_cw,
      actions_cs: actions_cs,
      actions_ct: actions_ct,
      actions_ca: actions_ca,
      golden1: gold1,
      golden2: gold2,
      golden3: gold3,
      golden4: gold4,
      trust:   trust,
      actions:  actions,
      question: current,
      correct: correct,
      ans_a: ans_a,
      ans_b: ans_b,
      viz:      Session.get("option"),
      weather:  weather,
      safety:   safety,
      traffic:  traffic,
      air:      air
    });

    $(".question-container").fadeOut(function(){
      $(".big-thanks").fadeIn();
    });
  },
  "click .fd-next" (event, instance) {
    var a = $("input[name=difficulty]:checked").val();
    $(".feedback-difficulty").fadeOut(function(){
      Session.set("feedback-difficulty",a);
      $(".feedback-preference").fadeIn();
    });
  },
  "click .fp-next" (event, instance) {
  }
});


Template.bigquestion.rendered = function () {
  var self = this;
  this.$("#question-slider1").noUiSlider({
    start: 100,
    step: 1,
    connect: "lower",
    tooltips: true,
    range: {'min': 0, 'max': 100}
  }).on('slide', function (ev, val) {
    Session.set("gold1",Number(val));
    self.$(".question-answers").css("visibility","visible");
  }).on('set', function(){
    self.$(".question-answers").css("visibility","visible");
  });

  this.$("#question-slider2").noUiSlider({
    start: 100,
    step: 1,
    connect: "lower",
    tooltips: true,
    range: {'min': 0, 'max': 100}
  }).on('slide', function (ev, val) {
    Session.set("gold2",Number(val));
    self.$(".question-answers").css("visibility","visible");
  }).on('set', function(){
    self.$(".question-answers").css("visibility","visible");
  });

  this.$("#question-slider3").noUiSlider({
    start: 100,
    step: 1,
    connect: "lower",
    tooltips: true,
    range: {'min': 0, 'max': 100}
  }).on('slide', function (ev, val) {
    Session.set("gold3",Number(val));
    self.$(".question-answers").css("visibility","visible");
  }).on('set', function(){
    self.$(".question-answers").css("visibility","visible");
  });

  this.$("#question-slider4").noUiSlider({
    start: 100,
    step: 1,
    connect: "lower",
    tooltips: true,
    range: {'min': 0, 'max': 100}
  }).on('slide', function (ev, val) {
    Session.set("gold4",Number(val));
    self.$(".question-answers").css("visibility","visible");
  }).on('set', function(){
    self.$(".question-answers").css("visibility","visible");
  });

};
