var mongoose = require('mongoose'),
        conn = mongoose.connect('mongodb://localhost/HCA-app'),
        Bar = require("../models/bar"),
        Team = require("../models/team"),
        User = require("../models/user");

User.remove({}, function(err){
  if (err) console.log("ERROR: ", err);
});

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
      long: -122.439743,
      yelp: "http://www.yelp.com/biz/monaghans-san-francisco-2"
      // teams: [teams[0]._id]
    },
    {
      name: "Dolores Corner",
      address: "1600 Dolores St. San Francisco",
      pic: "http://s3-media2.fl.yelpcdn.com/bphoto/SSsa_dloJhe0Hef9zKBpQg/o.jpg",
      city: "San Francisco",
      state: "CA",
      lat: 37.74375,
      long: -122.42459,
      yelp: "http://www.yelp.com/biz/dolores-corner-san-francisco"
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
      long: -122.430964,
      yelp: "http://www.yelp.com/biz/mad-dog-in-the-fog-san-francisco"
    },
    {
      name: "Greens Sports Bar",
      address: "2239 Polk St. San Francisco",
      pic: "http://s3-media3.fl.yelpcdn.com/bphoto/8sa5X6DPb_MwpAdIlqXwFw/o.jpg",
      city: "San Francisco",
      state: "CA",
      lat: 37.797566,
      long: -122.422394,
      yelp: "http://www.yelp.com/biz/the-greens-sports-bar-san-francisco"
    },
    {
      name: "Jackalope",
      address: "1092 Post St. San Francisco",
      pic: "http://s3-media1.fl.yelpcdn.com/bphoto/irNzaShJFHJR7zxFu_eQzg/o.jpg",
      city: "San Francisco",
      state: "CA",
      lat: 37.787016,
      long: -122.419744,
      yelp: "http://www.yelp.com/biz/jackalope-san-francisco"
    },
    {
      name: "Ted's Sports Bar and Grill",
      address: "312 Harriet St. San Francisco",
      pic: "http://s3-media1.fl.yelpcdn.com/bphoto/UPSa0ZOuHW7qFumeqaL3Rg/o.jpg",
      city: "San Francisco",
      state: "CA",
      lat: 37.775271,
      long: -122.402914,
      yelp: "http://www.yelp.com/biz/teds-sports-bar-and-grill-san-francisco"
    },
    {
      name: "Ace's",
      address: "998 Sutter St. San Francisco",
      pic: "http://s3-media2.fl.yelpcdn.com/bphoto/tLHb0e5dv0chzAVafAQKmw/o.jpg",
      city: "San Francisco",
      state: "CA",
      lat: 37.788426,
      long: -122.416784,
      yelp: "http://www.yelp.com/biz/aces-san-francisco"
    },
    {
      name: "Pete's Tavern",
      address: "128 King St. San Francisco",
      pic: "http://s3-media1.fl.yelpcdn.com/bphoto/AEVUxaU5nz9d6QdskNbIkw/o.jpg",
      city: "San Francisco",
      state: "CA",
      lat: 37.779502,
      long: -122.390708,
      yelp: "http://www.yelp.com/biz/petes-tavern-san-francisco"
    },
    {
      name: "Danny Coyle's",
      address: "668 Haight St. San Francisco",
      pic: "http://s3-media1.fl.yelpcdn.com/bphoto/NRlHVUrepTTMF9KGnaT94Q/o.jpg",
      city: "San Francisco",
      state: "CA",
      lat: 37.771965,
      long: -122.433312,
      yelp: "http://www.yelp.com/biz/danny-coyles-san-francisco"
    },
    {
      name: "Taco Shop At Underdogs",
      address: "1824 Irving St. San Francisco",
      pic: "http://s3-media3.fl.yelpcdn.com/bphoto/wZfdQgo_DeYQNvyrk9Lluw/o.jpg",
      city: "San Francisco",
      state: "CA",
      lat: 37.763801,
      long: -122.477692,
      yelp: "http://www.yelp.com/biz/the-taco-shop-at-underdogs-san-francisco-2"
    },
    {
      name: "McCarthy’s",
      address: "46 West Portal Ave. San Francisco",
      pic: "http://s3-media4.fl.yelpcdn.com/bphoto/UtS6FfnArXGzAUdVRx2zQQ/o.jpg",
      city: "San Francisco",
      state: "CA",
      lat: 37.740339,
      long: -122.466414,
      yelp: "http://www.yelp.com/biz/mccarthys-san-francisco"
    },
    { 
      name: "Hockey Haven",
      address: "3625 Balboa St. San Francisco",
      pic: "http://s3-media4.fl.yelpcdn.com/bphoto/Y8AAV1KEUsGErPTIhKyOWQ/o.jpg",
      city: "San Francisco",
      state: "CA",
      lat: 37.775506,
      long: -122.497791,
      yelp: "http://www.yelp.com/biz/hockey-haven-san-francisco"
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
    var tacoShop = bars[9]._id;
    var mccarthys = bars[10]._id;
    var hockeyHaven = bars[11]._id;

    console.log("created: ", bars)

    var teams = [
      {
        name: "Bulls",
        league: "NBA",
        origin: "Chicago",
        logo: "http://content.sportslogos.net/logos/6/221/thumbs/hj3gmh82w9hffmeh3fjm5h874.gif",
        bars: [monaghans,
               doloresCorner,
               madDog,
               tacoShop]
      },
      {
        name: "Hornets",
        league: "NBA",
        origin: "Charlotte",
        logo: "http://content.sportslogos.net/logos/6/5120/thumbs/512019262015.gif",
        bars: [greens,
               jackalope,
               teds,
               mccarthys]
      },
      {
        name: "Knicks",
        league: "NBA",
        origin: "New York",
        logo: "http://content.sportslogos.net/logos/6/216/thumbs/2nn48xofg0hms8k326cqdmuis.gif",
        bars: [aces,
               petes,
               dannyCoyles,
               hockeyHaven]
      }
    ];
  Team.create(teams, function(err, teams){
    console.log("teams created: ", teams);
    mongoose.connection.close();
  });
  }
});
