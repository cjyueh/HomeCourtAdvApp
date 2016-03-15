var Event = require('../models/Event');

var eventsController = {
  indexEvents: function (req, res) {
    Event.find({}, function (err, events){
      console.log(events);
      err ? console.log(err) : res.render('partials/events', {events: events});
    });
  }
};

module.exports = eventsController;