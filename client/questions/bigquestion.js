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

    return {
      w: w,
      s: s,
      t: t,
      a: a
    };
  },
  username() {
    return Session.get("username");
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
    var current = Number(Session.get("qnumber"));
    var imp     = Session.set("aimp",$("input[name=importance]:checked").val());
    var city    = Session.set("acity",$("input[name=cities]:checked").val());
    var factor  = Session.set("afactor",$("input[name=factors]:checked").val());
    var select1 = Session.set("select1",$(".control-a-"+current+" option:selected").text());
    var select2 = Session.set("select2",$(".control-b-"+current+" option:selected").text());
    var text    = Session.set("textarea",$('textarea').val());
    Session.set("qend",Date.now());
    $(".question-"+current).fadeOut(function(){
      $(".feedback-difficulty").fadeIn();
    });
  },
  "click .big-finish" (event, instance) {
    $(".inner-question-container").fadeOut(function(){
      $(".big-question-container").css("background","rgba(255,255,255,1)");
    });
  },
  "click .radio-button" (event, instance) {
    console.log(event.target);
  },
  "click .fd-next" (event, instance) {
    var a = $("input[name=difficulty]:checked").val();
    $(".feedback-difficulty").fadeOut(function(){
      Session.set("feedback-difficulty",a);
      $(".feedback-preference").fadeIn();
    });
  },
  "click .fp-next" (event, instance) {
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
    var diff = Session.get("feedback-difficulty");
    var pref = $("input[name=preference]:checked").val();
    var resp = Session.get("answer");

    var timestart = Session.get("qstart");
    var timeend   = Session.get("qend");

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

    $(".feedback-preference").fadeOut(function(){
      $("input:radio").removeAttr("checked");
      $('textarea').val("");
      console.log({
        timestart:  timestart,
        timeend:    timeend,
        ssid:       user_id,
        user:       name,
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
        polluted:   a
      });
      Session.set("qstart",Date.now());
      Session.set("qnumber",current+1);
      $(".question-"+(current+1)).fadeIn();
    });
  }
});
