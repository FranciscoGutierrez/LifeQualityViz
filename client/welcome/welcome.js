Template.welcome.helpers({
  option() {
    var option = Session.get("option");
    var map   = false;
    var dots  = false;
    var chart = false;

    if(option == "map")   map   = true;
    if(option == "dots")  dots  = true;
    if(option == "chart") chart = true;

    return {chart: chart, dots: dots, map: map};
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
      $(".wd-1").fadeIn(function(){
        $(".wb-next-1").delay(2500).fadeIn();
      });
    });
  },
  "click .wb-next-1" (event, instance) {
    $(".wd-1").fadeOut(function(){
      $(".wd-2").fadeIn(function(){
        $(".wb-next-2").delay(2500).fadeIn();
      });
    });
  },
  "click .wb-next-2" (event, instance) {
    $(".wd-2").fadeOut(function(){
      $(".wd-3").fadeIn(function(){
        $(".wb-next-3").delay(2500).fadeIn();
      });
    });
  },
  "click .wb-next-3" (event, instance) {
    $(".wd-3").fadeOut(function(){
      $(".wd-4").fadeIn(function(){
        $(".wb-next-4").delay(2500).fadeIn();
      });
    });
  },
  "click .wb-next-4" (event, instance) {
    $(".wd-4").fadeOut(function(){
      $(".wd-5").fadeIn(function(){
        $(".wb-next-5").delay(2500).fadeIn();
      });
    });
  },
  "click .wb-next-5" (event, instance) {
    $(".wd-5").fadeOut(function(){
      $(".wd-end").fadeIn(function(){
        $(".wb-next-end").delay(2500).fadeIn();
      });
    });
  },
  "click .wb-next-end" (event, instance) {
    Session.set("username",$(".welcome-input").val());
    $(".welcome-screen").fadeOut(function(){
      Session.set("qstart",Date.now());
      $(this).remove();
      Session.set("qnumber",1);
    });
  },
  "keyup .welcome-input" (event, instance) {
    $(".skip-tutorial").fadeIn();
  }
});
