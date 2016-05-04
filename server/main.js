import { Meteor } from 'meteor/meteor';

Tweets  = new Meteor.Collection('tweets');

Meteor.startup(() => {});

Meteor.publish("tweets", function () {
  return Tweets.find({date: {$gte: new Date(new Date().getTime() - 3600000)}});
});
