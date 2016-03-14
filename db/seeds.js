var mongoose = require('mongoose'),
        conn = mongoose.connect('mongodb://localhost/HCA-app'),
        Team = require("../models/team"),
       Event = require("../models/event"),
        User = require("../models/user"),
         Bar = require("../models/bar");

Event.remove({}, function(err){
  if (err) console.log("ERROR: ", err);
});

Team.remove({}, function(err){
  if (err) console.log("ERROR: ", err);
});

User.remove({}, function(err){
  if (err) console.log("ERROR: ", err);
});

Bar.remove({}, function(err){
  if (err) console.log("ERROR: ", err);
});

var events = [
  {
  homeTeam: "Bulls",
  awayTeam: "Jazz",
  date: "3/19",
  time: "5:00 pm PST"
  },
  {
  homeTeam: "Bulls",
  awayTeam: "Kings",
  date: "3/21",
  time: "5:00 pm PST"
  },
  {
  homeTeam: "Bulls",
  awayTeam: "Knicks",
  date: "3/23",
  time: "5:00 pm PST"
  },
  {
  homeTeam: "Knicks",
  awayTeam: "Bulls",
  date: "3/24",
  time: "4:30 pm PST"
  },
  {
  homeTeam: "Magic",
  awayTeam: "Bulls",
  date: "3/26",
  time: "4:00 pm PST"
  },
  {
  homeTeam: "Bulls",
  awayTeam: "Hawks",
  date: "3/28",
  time: "5:00 pm PST"
  },
  {
  homeTeam: "Hornets",
  awayTeam: "Nuggets",
  date: "3/19",
  time: "3:00 pm PST"
  }
];

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

var bars = [
  {
    name: "beer garden",
    address: "225 bush st",
    city: "SF",
    state: "CA"
  },
    {
    name: "fear garden",
    address: "666 death ave",
    city: "Oakland",
    state: "CA"
  }
];

Event.create(events, function(err, events){
  if (err) {
    console.log(err);
  } else {
    console.log("create: ", events);
  }
});

Team.create(teams, function(err, teams){
  if (err) {
    console.log(err);
  } else {
    console.log("created: ", teams);
  }
});

User.create(users, function(err, users){
  if (err) {
    console.log(err);
  } else {
    console.log("created: ", users);
  }
});

Bar.create(bars, function(err, bars){
    if (err) {
    console.log(err);
  } else {
    console.log("created: ", bars);
    mongoose.connection.close();
  }
});