/*
*  Gets data from address bar using Iron-Router
*  Sets the session according this data.
*/
Router.configure({
  layoutTemplate: 'dummy'
});

Router.route('/:_id', {
  data: function () {
    var courses;
    var option = Router.current().params._id;
    Meteor.subscribe("cities", function(){
      $(".loading-screen").fadeOut(function(){
        $(this).remove();

        Meteor.subscribe("answers");

        Session.setDefault("strength-t",100);
        Session.setDefault("strength-p",100);
        Session.setDefault("strength-s",100);
        Session.setDefault("strength-h",100);
        Session.setDefault("option",option);
        Session.setDefault("qnumber",1);
        Session.setDefault("slider1",100);
        Session.setDefault("slider2",100);
        Session.setDefault("gold1",100);
        Session.setDefault("gold2",100);
        Session.setDefault("gold3",100);
        Session.setDefault("ssid",Meteor.default_connection._lastSessionId);


        var isChrome = !!window.chrome && !!window.chrome.webstore;
        if(isChrome) {
          Blaze.render(Template.welcome,$(".welcome-screen")[0]);
          if(option == "map")   Blaze.render(Template.map,$("body")[0]);
          if(option == "chart") Blaze.render(Template.regression,$("body")[0]);
          if(option == "dots")  Blaze.render(Template.dots,$("body")[0]);
        } else {
          $(".welcome-screen").text("This evaluation is only available in Google Chrome. 1.0 - 48 or above.");
        }

        jQuery(document).ready(function($) {
          if (window.history && window.history.pushState) {
            $(window).on('popstate', function() {
              var hashLocation = location.hash;
              var hashSplit = hashLocation.split("#!/");
              var hashName = hashSplit[1];
              if (hashName !== '') {
                var hash = window.location.hash;
                if (hash === '') {
                  alert('Warning, if you press back button, you will lose your progress...');
                }
              }
            });
            window.history.pushState('forward', null, './'+option);
          }
        });


      });
    });
  }
});
