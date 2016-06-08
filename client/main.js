import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

//Tweets = new Meteor.Collection('tweets');
Cities  = new Meteor.Collection('cities');
Answers = new Meteor.Collection('answers');


//mongoexport --host=127.0.0.1:3001 --db meteor --collection answers  --type=csv --out answers.csv  --fields _id,checkbox,timestart,timeend,ssid,user,question,viz,difficulty,preference,acity,aoption1,aoption2,weather,safety,traffic,polluted,slider1,slider2,senta,sentb,sentc
