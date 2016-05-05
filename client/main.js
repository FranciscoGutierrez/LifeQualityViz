import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

Tweets  = new Meteor.Collection('tweets');
Meteor.subscribe("tweets");

Template.tweets.onCreated(function() {
  this.counter = new ReactiveVar(0);
  setTimeout( function() {
    $(".tweets-container").scrollTop(0);
  },500);
});

Template.lifeIndex.onCreated(function() {
  $( document ).ready(function() {
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        backgroundColor: "#424242",
        data: [12, 19, 3, 5, 2, 3]
      }});
    });
  });


  Template.tweets.helpers({
    tweets() {
      if ($('.tweets-container').length > 10) $('.simple-tweet').slice($('.tweets-container').length-10).remove();
      return Tweets.find({}, {
        transform: function(item){
          item.polarity = (item.polarity > 0) ? item.polarity = "positive" : item.polarity = "negative";
          item.tweetdate = moment(item.tweetdate).fromNow();
          return item;
        }
      });
    }
  });

  Template.lifeIndex.helpers({
    currentIndex(){
      return Tweets.findOne({}, {
        transform: function(item){
          item.safety_index    = item.safety_index.toFixed(2);
          item.pollution_index = item.pollution_index.toFixed(2);
          item.traffic_index   = item.traffic_index.toFixed(2);
          item.quality_of_life_index = item.quality_of_life_index.toFixed(2);
          return item;
        }
      },{sort: {DateTime: 1}});
    }
  });

  Template.tweets.events({
    'click button'(event, instance) {
      // increment the counter when button is clicked
      instance.counter.set(instance.counter.get() + 1);
    },
  });
