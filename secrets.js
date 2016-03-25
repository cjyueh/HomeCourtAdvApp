const OAUTH = {
  fb: {
    clientID: ENV['FB_CLIENT'],
    clientSecret: ENV['FB_SECRET']
  },
  google: {
    clientID: ENV['GOOGLE_CLIENT'],
    clientSecret: ENV['GOOGLE_SECRET']
    // callbackURL: "http://home-court-advantage.herokuapp.com/oauth2callback"
  }
};

module.exports = OAUTH;
