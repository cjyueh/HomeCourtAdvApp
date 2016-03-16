var mongoose = require('mongoose'),
        conn = mongoose.connect('mongodb://localhost/HCA-app'),
        Team = require("../models/team"),
        Bar = require("../models/bar");

Team.remove({}, function(err){
  if (err) console.log("ERROR: ", err);
});

Bar.remove({}, function(err){
  if (err) console.log("ERROR: ", err);
});

var teams = [
  {
  name: "Bulls",
  league: "NBA",
  origin: "Chicago",
  logo: "http://content.sportslogos.net/logos/6/221/thumbs/hj3gmh82w9hffmeh3fjm5h874.gif"
  },
  {
  name: "Hornets",
  league: "NBA",
  origin: "Charlotte",
  logo: "http://content.sportslogos.net/logos/6/5120/thumbs/512019262015.gif"
  },
  {
  name: "Knicks",
  league: "NBA",
  origin: "New York",
  logo: "http://content.sportslogos.net/logos/6/216/thumbs/2nn48xofg0hms8k326cqdmuis.gif"
  }
];

Team.create(teams, function(err, teams){
  if (err) {
    console.log(err);
  } else {
    console.log("created: ", teams);
  
  var bars = [
    {
      name: "beer garden",
      address: "225 bush st",
      city: "SF",
      state: "CA",
      lat: 37.790882,
      long: -122.401552,
      teams: [teams[0]._id]
    },
    {
      name: "fear garden",
      address: "666 death ave",
      city: "San Francisco",
      state: "CA",
      lat: 37.790230,
      long: -122.408439,
      teams: [teams[1]._id, 
              teams[2]._id]
    }
  ];
    Bar.create(bars, function(err, bars) {
      console.log("bars created:", bars);
      mongoose.connection.close();
    });
    // bars have been created
  }
});