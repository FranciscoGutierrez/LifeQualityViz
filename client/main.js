import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

Tweets  = new Meteor.Collection('tweets');
Meteor.subscribe("tweets");
Template.tweets.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.tweets.helpers({
  tweets() {
    if ($('.tweets-container').length > 10) $('.simple-tweet').slice($('.tweets-container').length-10).remove();
    return Tweets.find({}, {
      transform: function(item){
        item.polarity = (item.polarity > 0) ? item.polarity = "positive" : item.polarity = "negative";
        item.date = moment(item.date).fromNow();
        return item;
      }
    });
  },
});

Template.tweets.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
