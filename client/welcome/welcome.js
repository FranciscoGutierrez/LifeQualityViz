Template.welcome.events({
  'click .wb-ok'  (event, instance) {
    $(".welcome-screen").fadeOut(function(){
      $(this).remove();
    });
  }
});

Template.welcome.events({
  "click .wb-next-0" (event, instance) {
    $(".wd-0").fadeOut(function(){
      $(".wd-1").fadeIn();
    });
  },
  "click .wb-next-1" (event, instance) {
    $(".wd-1").fadeOut(function(){
      $(".wd-2").fadeIn();
    });
  },
  "click .wb-next-2" (event, instance) {
    $(".wd-2").fadeOut(function(){
      $(".wd-3").fadeIn();
    });
  },
  "click .wb-next-3" (event, instance) {
    $(".wd-3").fadeOut(function(){
      $(".welcome-screen").fadeOut(function(){
        $(this).remove();
      });
    });
  }
});
