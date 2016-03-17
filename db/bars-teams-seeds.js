var mongoose = require('mongoose'),
        conn = mongoose.connect('mongodb://localhost/HCA-app'),
        Bar = require("../models/bar");
        Team = require("../models/team"),

Bar.remove({}, function(err){
  if (err) console.log("ERROR: ", err);
});

Team.remove({}, function(err){
  if (err) console.log("ERROR: ", err);
});



 var bars = [
    {
      name: "Monaghan's",
      address: "3243 Pierce St. San Francisco",
      pic: "http://s3-media3.fl.yelpcdn.com/bphoto/sOCSpcIZDEwvStZGXB-qbQ/o.jpg",
      city: "San Francisco",
      state: "CA",
      lat: 37.800047,
      long: -122.439743
      // teams: [teams[0]._id]
    },
    {
      name: "Dolores Corner",
      address: "1600 Dolores St. San Francisco",
      pic: "http://s3-media2.fl.yelpcdn.com/bphoto/SSsa_dloJhe0Hef9zKBpQg/o.jpg",
      city: "San Francisco",
      state: "CA",
      lat: 37.74375,
      long: -122.42459
      // teams: [teams[1]._id,
      //         teams[2]._id]
    },
    {
      name: "Mad Dog In The Fog",
      address: "530 Haight St. San Francisco",
      pic: "http://s3-media1.fl.yelpcdn.com/bphoto/aY7KYDwiE013jwBeGIh8zQ/o.jpg",
      city: "San Francisco",
      state: "CA",
      lat: 37.772308,
      long: -122.430964
    },
    {
      name: "Greens Sports Bar",
      address: "2239 Polk St. San Francisco",
      pic: "http://s3-media3.fl.yelpcdn.com/bphoto/8sa5X6DPb_MwpAdIlqXwFw/o.jpg",
      city: "San Francisco",
      state: "CA",
      lat: 37.797566,
      long: -122.422394
    },
    {
      name: "Jackalope",
      address: "1092 Post St. San Francisco",
      pic: "http://s3-media1.fl.yelpcdn.com/bphoto/irNzaShJFHJR7zxFu_eQzg/o.jpg",
      city: "San Francisco",
      state: "CA",
      lat: 37.787016,
      long: -122.419744
    },
    {
      name: "Ted's Sports Bar and Grill",
      address: "312 Harriet St. San Francisco",
      pic: "http://s3-media1.fl.yelpcdn.com/bphoto/UPSa0ZOuHW7qFumeqaL3Rg/o.jpg",
      city: "San Francisco",
      state: "CA",
      lat: 37.775271,
      long: -122.402914
    },
    {
      name: "Ace's",
      address: "998 Sutter St. San Francisco",
      pic: "http://s3-media2.fl.yelpcdn.com/bphoto/tLHb0e5dv0chzAVafAQKmw/o.jpg",
      city: "San Francisco",
      state: "CA",
      lat: 37.788426,
      long: -122.416784
    },
    {
      name: "Pete's Tavern",
      address: "128 King St. San Francisco",
      pic: "http://s3-media1.fl.yelpcdn.com/bphoto/AEVUxaU5nz9d6QdskNbIkw/o.jpg",
      city: "San Francisco",
      state: "CA",
      lat: 37.779502,
      long: -122.390708
    },
    {
      name: "Danny Coyle's",
      address: "668 Haight St. San Francisco",
      pic: "http://s3-media1.fl.yelpcdn.com/bphoto/NRlHVUrepTTMF9KGnaT94Q/o.jpg",
      city: "San Francisco",
      state: "CA",
      lat: 37.771965,
      long: -122.433312
    }
  ];



Bar.create(bars, function(err, bars){
  if (err) {
    console.log(err)
  } else {

    var monaghans = bars[0]._id;
    var doloresCorner = bars[1]._id;
    var madDog = bars[2]._id;
    var greens = bars[3]._id;
    var jackalope = bars[4]._id;
    var teds = bars[5]._id;
    var aces = bars[6]._id;
    var petes = bars[7]._id;
    var dannyCoyles = bars[8]._id;
    
    console.log("created: ", bars)

    var teams = [
      {
        name: "Bulls",
        league: "NBA",
        origin: "Chicago",
        logo: "http://content.sportslogos.net/logos/6/221/thumbs/hj3gmh82w9hffmeh3fjm5h874.gif",
        bars: [monaghans,
               doloresCorner,
               madDog]
      },
      {
        name: "Hornets",
        league: "NBA",
        origin: "Charlotte",
        logo: "http://content.sportslogos.net/logos/6/5120/thumbs/512019262015.gif",
        bars: [greens,
               jackalope,
               teds]
      },
      {
        name: "Knicks",
        league: "NBA",
        origin: "New York",
        logo: "http://content.sportslogos.net/logos/6/216/thumbs/2nn48xofg0hms8k326cqdmuis.gif",
        bars: [aces,
               petes,
               dannyCoyles]
      }
    ];
  Team.create(teams, function(err, teams){
    console.log("teams created: ", teams);
    mongoose.connection.close();
  });
  }
});
