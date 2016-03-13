var mongoose = require('mongoose'),
        conn = mongoose.connect('mongodb://localhost/HCA-app'),
        Team = require("../models/team");

Team.remove({}, function(err){
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
    mongoose.connection.close();
  } 
});