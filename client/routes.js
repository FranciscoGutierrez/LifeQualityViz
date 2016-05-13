/*
*  Gets data from address bar using Iron-Router
*  Sets the session according this data.
*/
Router.configure({
  layoutTemplate: 'dummy'
});

Router.route('/', {
  data: function () {
    var courses;
    var student = Router.current().params._id;
    Meteor.subscribe("tweets", function(){
      Meteor.subscribe("cities", function(){
          $(".loading-screen").fadeOut(function(){
            $(this).remove();
          });
          Blaze.render(Template.maincontent,$("body")[0]);
          Session.set("rowtop","newyork");
          Session.set("rowbot","boston");
          Session.set("strength",0);
          Session.set("strength-t",0);
          Session.set("strength-p",0);
          Session.set("strength-s",0);
          Session.set("strength-h",0);
      });
    });
  }
});
