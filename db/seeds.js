var mongoose = require('mongoose'),
        conn = mongoose.connect('mongodb://localhost/HCA-app'),
        Team = require("../models/team"),
        Event = require("../models/event");
        // User = require("../models/user");
         //Bar = require("../models/bar");

Event.remove({}, function(err){
  if (err) console.log("ERROR: ", err);
});

// Team.remove({}, function(err){
//   if (err) console.log("ERROR: ", err);
// });

// User.remove({}, function(err){
//   if (err) console.log("ERROR: ", err);
// });

// Bar.remove({}, function(err){
//   if (err) console.log("ERROR: ", err);
// });


var events = [
  {
  homeTeam: '56e70507e02a527c25f83dfa',
  awayTeam: '56e70507e02a527c25f83dfb',
  date: "3/19",
  time: "5:00 pm PST"
}
  // ,
  // {
  // homeTeam: teams[0],
  // awayTeam: {name: "Kings"},
  // date: "3/21",
  // time: "5:00 pm PST"
  // },
  // {
  // homeTeam: teams[0],
  // awayTeam: teams[2],
  // date: "3/23",
  // time: "5:00 pm PST"
  // }, 
  // {
  // homeTeam: "Knicks",
  // awayTeam: "Bulls",
  // date: "3/24",
  // time: "4:30 pm PST"
  // },
  // {
  // homeTeam: "Magic",
  // awayTeam: "Bulls",
  // date: "3/26",
  // time: "4:00 pm PST"
  // },
  // {
  // homeTeam: "Bulls",
  // awayTeam: "Hawks",
  // date: "3/28",
  // time: "5:00 pm PST"
  // },
  // {
  // homeTeam: "Hornets",
  // awayTeam: "Nuggets",
  // date: "3/19",
  // time: "3:00 pm PST"
  // }
];


// var users = [
//   {
//     email: "howellwho@gmail.com",
//     about: "Cool guyyyyy",
//     picture: "",
//     favorites: "Bulls"
//   },
//   {
//     email: "derek@champas.com",
//     about: "Oakland babyyyy",
//     picture: "",
//     favorites: "Bulls"
//   }
// ];

// var bars = [
//   {
//     name: "beer garden",
//     address: "225 bush st",
//     city: "SF",
//     state: "CA"
//   },
//     {
//     name: "fear garden",
//     address: "666 death ave",
//     city: "Oakland",
//     state: "CA"
//   }
// ];

Event.create(events, function(err, events){
  if (err) {
    console.log(err);
  } else {
    console.log("create: ", events);
  }
});

// Team.create(teams, function(err, teams){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("created: ", teams);
//   }
// });

// User.create(users, function(err, users){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("created: ", users);
//   }
// });

// Bar.create(bars, function(err, bars){
//     if (err) {
//     console.log(err);
//   } else {
//     console.log("created: ", bars);
//     mongoose.connection.close();
//   }
// });