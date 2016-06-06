Template.welcome.helpers({
  option() {
    return Session.get("option");
  }
});

Template.welcome.events({
  'click .wb-ok'  (event, instance) {
    $(".welcome-screen").fadeOut(function(){
      $(this).remove();
    });
  },
  "click .wb-next-0" (event, instance) {
    $(".wd-0").fadeOut(function(){
      $(".wd-1").fadeIn();
      $(".wb-next-1").delay(2500).fadeIn();
    });
  },
  "click .wb-next-1" (event, instance) {
    $(".wd-1").fadeOut(function(){
      $(".wd-2").fadeIn();
      $(".wb-next-2").delay(2500).fadeIn();
    });
  },
  "click .wb-next-2" (event, instance) {
    $(".wd-2").fadeOut(function(){
      $(".wd-3").fadeIn();
      $(".wb-next-3").delay(2500).fadeIn();
    });
  },
  "click .wb-next-3" (event, instance) {
    $(".wd-3").fadeOut(function(){
      $(".welcome-screen").fadeOut(function(){
        $(this).remove();
      });
    });
  },
  "click .skip-tutorial" (event, instance) {
    var value=$.trim($(".welcome-input").val());
    if(value.length>0) {
      Session.set("username",$(".welcome-input").val());
      $(".welcome-screen").fadeOut(function(){
        Session.set("qstart",Date.now());
        $(this).remove();
        Session.set("qnumber",1);
      });
    }
  },
  "keyup .welcome-input" (event, instance) {
    $(".skip-tutorial").fadeIn();
  }
});
