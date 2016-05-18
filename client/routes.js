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
    Meteor.subscribe("tweets", function(){
      Meteor.subscribe("cities", function(){
          $(".loading-screen").fadeOut(function(){
            $(this).remove();
          });
          Session.set("rowtop","newyork");
          Session.set("rowbot","boston");
          Session.set("strength",0);
          Session.set("strength-t",0);
          Session.set("strength-p",0);
          Session.set("strength-s",0);
          Session.set("strength-h",0);

          if(option == "map")   Blaze.render(Template.map,$("body")[0]);
          if(option == "chart") Blaze.render(Template.regression,$("body")[0]);
          if(option == "dots")  Blaze.render(Template.dots,$("body")[0]);
      });
    });
  }
});
