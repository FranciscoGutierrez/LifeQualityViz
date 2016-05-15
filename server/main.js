import { Meteor } from 'meteor/meteor';

Tweets = new Meteor.Collection('tweets');
Cities = new Meteor.Collection('cities');

Meteor.startup(() => {});
Meteor.publish("tweets", function () {
  return Tweets.find({},{sort: {tweetdate: -1}, limit: 5});
});

Meteor.publish("cities", function () {
  return Cities.find({});
});
