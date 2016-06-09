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
    Session.set("aimp",$("input[name=importance]:checked").val());
    Session.set("acity",$("input[name=cities]:checked").val());
    Session.set("afactor",$("input[name=factors]:checked").val());
    Session.set("select1",$(".control-a-"+current+" option:selected").text());
    Session.set("select2",$(".control-b-"+current+" option:selected").text());
    Session.set("textarea",$(".textarea-"+current).val());
    Session.set("qend",Date.now());
    var checkbox = "";
    $("input[name=cities]:checked").each(function(){ checkbox = checkbox + $(this).attr("value")+" " });
    Session.set("checkbox", checkbox);
    Session.set("sentencea",$(".sentence-a-"+current+" option:selected").text());
    Session.set("sentenceb",$(".sentence-b-"+current+" option:selected").text());
    Session.set("sentencec",$(".sentence-c-"+current+" option:selected").text());
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

    // Record to database
    var current = Number(Session.get("qnumber"));
    var option  = Session.get("option");
    var city    = Session.get("acity");
    var factor  = Session.get("afactor");
    var imp     = Session.get("aimp");
    var select1 = Session.get("select1");
    var select2 = Session.get("select2");
    var text    = Session.get("textarea");
    var user_id = Session.get("ssid");
    var diff = Session.get("feedback-difficulty");
    var pref = $("input[name=preference]:checked").val();
    var resp = Session.get("answer");
    var checkbox = Session.get("checkbox");
    var timestart = Session.get("qstart");
    var timeend   = Session.get("qend");

    var slider1 = Session.get("slider1");
    var slider2 = Session.get("slider2");

    var w = Math.round(Session.get("strength-h"));
    var s = Math.round(Session.get("strength-s"));
    var t = Math.round(Session.get("strength-t"));
    var a = Math.round(Session.get("strength-p"));

    var sa = Session.get("sentencea");
    var sb = Session.get("sentenceb");
    var sc = Session.get("sentencec");

    if (w == 0) w = "0"; if (s == 0) s = "0";
    if (t == 0) t = "0"; if (a == 0) a = "0";

    if(!$(".health"  ).attr("checked")) w = false
    if(!$(".safety"  ).attr("checked")) s = false
    if(!$(".traffic" ).attr("checked")) t = false
    if(!$(".polluted").attr("checked")) a = false


    $("input:radio").removeAttr("checked");
    $("input:checkbox").removeAttr("checked");
    $('textarea').val("");
    //Answers.insert
    console.log({
      checkbox:   checkbox,
      timestart:  timestart,
      timeend:    timeend,
      ssid:       user_id,
      question:   current,
      viz:        option,
      difficulty: diff,
      preference: pref,
      acity:      city,
      afactor:    factor,
      aimp:       imp,
      aoption1:   select1,
      aoption2:   select2,
      atext:      text,
      weather:    w,
      safety:     s,
      traffic:    t,
      polluted:   a,
      slider1: slider1,
      slider2: slider2,
      senta: sa,
      sentb: sb,
      sentc: sc
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
    var option  = Session.get("option");
    var name    = Session.get("username");
    var city    = Session.get("acity");
    var factor  = Session.get("afactor");
    var imp     = Session.get("aimp");
    var select1 = Session.get("select1");
    var select2 = Session.get("select2");
    var text    = Session.get("textarea");
    var user_id = Meteor.default_connection._lastSessionId;
    var diff    = Session.get("feedback-difficulty");
    var pref    = $("input[name=preference]:checked").val();
    var resp    = Session.get("answer");
    var checkbox  = Session.get("checkbox");
    var timestart = Session.get("qstart");
    var timeend   = Session.get("qend");

    var slider1 = Session.get("slider1");
    var slider2 = Session.get("slider2");

    var sa = Session.get("sentencea");
    var sb = Session.get("sentenceb");
    var sc = Session.get("sentencec");

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

    $("input:radio").removeAttr("checked");
    $("input:checkbox").removeAttr("checked");
    $('textarea').val("");

    console.log({
      checkbox:   checkbox,
      timestart:  timestart,
      timeend:    timeend,
      ssid:       user_id,
      question:   current,
      viz:        option,
      difficulty: diff,
      preference: pref,
      acity:      city,
      afactor:    factor,
      aimp:       imp,
      aoption1:   select1,
      aoption2:   select2,
      atext:      text,
      weather:    w,
      safety:     s,
      traffic:    t,
      polluted:   a,
      slider1: slider1,
      slider2: slider2,
      senta: sa,
      sentb: sb,
      sentc: sc
    });
    $(".question-container").fadeOut(function(){
      $(".big-thanks").fadeIn();
    });
  },
  "click .radio-button" (event, instance) {
    //console.log(event.target);
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
  this.$("#question-slider1").noUiSlider({
    start: 100,
    step: 1,
    connect: "lower",
    tooltips: true,
    range: {'min': 0, 'max': 100}
  }).on('slide', function (ev, val) {
    Session.set("gold1",Number(val));
    $(".question-answers").css("visibility","visible");
  });

  this.$("#question-slider2").noUiSlider({
    start: 100,
    step: 1,
    connect: "lower",
    tooltips: true,
    range: {'min': 0, 'max': 100}
  }).on('slide', function (ev, val) {
    Session.set("gold2",Number(val));
    $(".question-answers").css("visibility","visible");
  });

  this.$("#question-slider3").noUiSlider({
    start: 100,
    step: 1,
    connect: "lower",
    tooltips: true,
    range: {'min': 0, 'max': 100}
  }).on('slide', function (ev, val) {
    Session.set("gold3",Number(val));
    $(".question-answers").css("visibility","visible");
  });
};
