/*
*  Gets data from address bar using Iron-Router
*  Sets the session according this data.
*/
Router.configure({
  layoutTemplate: 'dummy' // layoutTemplate, not layout
});

Router.route('/:_id', {
  data: function () {
    var courses;
    var student = Router.current().params._id;
    Meteor.subscribe("tweets", function(){
      Meteor.subscribe("cities", student, function(){
          $(".loading-screen").fadeOut(function(){
            $(this).remove();
          });
          Blaze.render(Template.regression,$("body")[0]);
      });
    });
  }
});
