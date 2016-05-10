import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

Tweets = new Meteor.Collection('tweets');
Cities = new Meteor.Collection('cities');

Template.tweets.onCreated(function() {
  this.counter = new ReactiveVar(0);
  setTimeout( function() {
    $(".tweets-container").scrollTop(0);
  },500);
});

Template.sentimentmap.onCreated(function() {
  $(document).ready(function() {
    mymap = L.map('map').setView([40.7128, -74.0059], 12);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      maxZoom: 18,
      id: 'franciscoghz.026h6h3d',
      accessToken: 'pk.eyJ1IjoiZnJhbmNpc2NvZ2h6IiwiYSI6ImNpbnV1Z3J4eTAwb3R2c2tscXgwMWs2eHEifQ.OrlG9so4YihIM4ccw59cHw'
    }).addTo(mymap);
    var iconPositive = L.divIcon({className: 'tweet-icon-positive'});
    var iconNegative = L.divIcon({className: 'tweet-icon-negative'});
    L.marker([40.7128, -74.0059],{clickable: false, icon: iconPositive}).addTo(mymap);
    L.marker([40.7314, -74.0159],{clickable: false, icon: iconPositive}).addTo(mymap);
    L.marker([40.7251, -74.0379],{clickable: false, icon: iconPositive}).addTo(mymap);
    L.marker([40.739434, -74.041878],{clickable: false, icon: iconNegative}).addTo(mymap);
  });
});

Template.lifeIndex.onCreated(function() {
  $(document).ready(function() {
    Chart.defaults.global.responsive = false;
    Chart.defaults.global.legend = false;
    var data = { labels: ["",""], datasets: [{data: [125.86, 74.14], backgroundColor: ["#bdbdbd","white"], hoverBackgroundColor: ["#c7c7c7","white"]}]};
    var options = {responsive: false};
    var ctx = document.getElementById("myChart");
    var donutchart = new Chart(ctx, { type: 'doughnut', data: data, options: options });
    //////
    var data2 = { labels: ["Safety","Health Care","Climate"], datasets: [{data: [51.16, 60.59,79.69], backgroundColor: "#bdbdbd", hoverBackgroundColor: "#c7c7c7"}]};
    var options2 = {responsive: true};
    var ctx2 = document.getElementById("myChart2");
    var options2 = {
      scales: {
        yAxes: [{
          display: true,
          beginAtZero: true,
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
            beginAtZero: true
          }
        }]
      }
    };
    var barchart = new Chart(ctx2, { type: 'bar', data: data2, options: options2 });

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
