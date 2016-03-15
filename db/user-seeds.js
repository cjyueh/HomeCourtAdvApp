var mongoose = require('mongoose'),
        conn = mongoose.connect('mongodb://localhost/HCA-app'),
        User = require("../models/user");

User.remove({}, function(err){
  if (err) console.log("ERROR: ", err);
});

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

/* 
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
*/

User.create(users, function(err, users){
  if (err) {
    console.log(err);
  } else {
    console.log("created: ", users);
    mongoose.connection.close();
  }
});
