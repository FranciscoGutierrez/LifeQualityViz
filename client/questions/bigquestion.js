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

    $(".question-"+current).fadeOut(function(){
      $(".feedback-difficulty").fadeIn();
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
    var diff = Session.get("feedback-difficulty");
    var pref = $("input[name=preference]:checked").val();
    var resp = Session.get("answer");
    var checkbox = Session.get("checkbox");
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
      $("input:checkbox").removeAttr("checked");
      $('textarea').val("");
      //Answers.insert
      console.log({
        checkbox:   checkbox,
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
      $(".question-container").fadeOut(function(){
        $(".big-thanks").fadeIn();
      });
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
    var checkbox = Session.get("checkbox");
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
      $("input:checkbox").removeAttr("checked");
      $('textarea').val("");
      //Answers.insert
      console.log({
        checkbox:   checkbox,
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
