var mongoose = require('mongoose'),
        conn = mongoose.connect('mongodb://localhost/HCA-app'),
        Team = require("../models/team"),
        Event = require("../models/event"),
        User = require("../models/user");
         //Bar = require("../models/bar");

Team.remove({}, function(err){
  if (err) console.log("ERROR: ", err);
});

User.remove({}, function(err){
  if (err) console.log("ERROR: ", err);
});

Event.remove({}, function(err){
  if (err) console.log("ERROR: ", err);
});


var teams = [
  {
  name: "Bulls",
  league: "NBA",
  origin: "Chicago",
  logo: "http://content.sportslogos.net/logos/6/221/thumbs/hj3gmh82w9hffmeh3fjm5h874.gif",
  // events: this.name._id
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


var users = [
  {
    email: "howellwho@gmail.com",
    about: "Cool guyyyyy",
    picture: "",
    favorites: "Bulls"
  },
  {
    email: "derek@champas.com",
    about: "Oakland babyyyy",
    picture: "",
    favorites: "Bulls"
  }
];


Team.create(teams, function(err, teams){
  if (err) {
    console.log(err);
  } else {
    console.log("created: ", teams);
    //teams have been createed!
    var events = [{
      homeTeam: teams[0]._id,
      awayTeam: teams[1]._id,
      date: "3/19",
      time: "5:00 pm PST"
    },
    {
      homeTeam: teams[0]._id,
      awayTeam: teams[2]._id,
      date: "3/21",
      time: "5:00 pm PST"
    },
    {
      homeTeam: teams[1]._id,
      awayTeam: teams[2]._id,
      date: "3/23",
      time: "5:00 pm PST"
    }];
    Event.create(events, function(err, events) {
      console.log("events created:", events);
    });
  }
});

User.create(users, function(err, users){
  if (err) {
    console.log(err);
  } else {
    console.log("created: ", users);
  }
});
