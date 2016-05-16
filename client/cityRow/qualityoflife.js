Template.lifequality.helpers({
  strength() {
    var check = $('paper-checkbox[checked]').size();
    var h = parseInt(Session.get("strength-h"));
    var t = parseInt(Session.get("strength-t"));
    var s = parseInt(Session.get("strength-s"));
    var p = parseInt(Session.get("strength-p"));
    var x = (h+t+s+p)/check;
    return  x;
  },
  weather() {
    var h = parseInt(Session.get("strength-h"));
    var current = Session.get("rowtop");
    var title = "";
    $('paper-checkbox[checked]').each(function() {
      var name = $(this).attr('class').split(' ')[0];
      if(name=="health") title = current+"_w.png";
    });
    return {name: title, opacity:h/100};
  },
  safety() {
    var s = parseInt(Session.get("strength-s"));
    var current = Session.get("rowtop");
    var title = "";
    $('paper-checkbox[checked]').each(function() {
      var name = $(this).attr('class').split(' ')[0];
      if(name=="safety") title = current+"_s.png";
    });
    return {name: title, opacity:s/100};
  },
  traffic() {
    var t = parseInt(Session.get("strength-t"));
    var current = Session.get("rowtop");
    var title = "";
    $('paper-checkbox[checked]').each(function() {
      var name = $(this).attr('class').split(' ')[0];
      if(name=="traffic") title = current+"_t.png";
    });
    return {name: title, opacity:t/100};
  },
  airqual() {
    var p = parseInt(Session.get("strength-p"));
    var current = Session.get("rowtop");
    var title = "";
    $('paper-checkbox[checked]').each(function() {
      var name = $(this).attr('class').split(' ')[0];
      if(name=="polluted") title = current+"_a.png";
    });
    return {name: title, opacity:p/100};
  }
});
