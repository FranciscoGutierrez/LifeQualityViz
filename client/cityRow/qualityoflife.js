Template.lifequality.helpers({
  strength() {
    var check = $('paper-checkbox[checked]').size();
    var h = parseInt(Session.get("strength-h"));
    var t = parseInt(Session.get("strength-t"));
    var s = parseInt(Session.get("strength-s"));
    var p = parseInt(Session.get("strength-p"));
    var x = (h+t+s+p)/check;
    console.log(x);
    return  x;
  }
});
