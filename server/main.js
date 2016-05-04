import { Meteor } from 'meteor/meteor';

Tweets  = new Meteor.Collection('tweets');

Meteor.startup(() => {});

Meteor.publish("tweets", function () {
  //900000 15 min
  //1800000 30 min
  //3600000 1 hour
  return Tweets.find({tweetdate: {$gte: new Date(new Date().getTime() - 900000)}});
  //return Tweets.find({},{limit: 25});
});
